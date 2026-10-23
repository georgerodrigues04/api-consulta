import ky from 'ky';

const buscar = (texto: string, inicio: string, fim: string): string | null => {
  const start = texto.indexOf(inicio);
  if (start === -1) return null;
  const from = start + inicio.length;
  const end = texto.indexOf(fim, from);
  if (end === -1) return null;
  return texto.slice(from, end);
};

interface ConsultaOdontoResult {
  nome: string;
  dataNascimento: string;
  nomeMae: string;
}

export async function consultarOdonto(cpf: string): Promise<ConsultaOdontoResult> {
  try {
  const session = ky.create();

  // 1) Primeiro GET no site da Uniodonto
  const headers1 = {
    'Host': 'uniodontominas.com.br',
    'cache-control': 'max-age=0',
    'sec-ch-ua': '"Chromium";v="152", "Not?A_Brand";v="24", "Brave";v="152"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'upgrade-insecure-requests': '1',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36',
    'accept':
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'sec-gpc': '1',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'referer': 'https://search.brave.com/',
    'accept-language': 'pt-BR,pt;q=0.9',
    'priority': 'u=0, i',
  };

  const response1 = await session.get(
    'https://uniodontominas.com.br/compra-online/plano-infantil-sem-carencia/',
    { headers: headers1 }
  );

  const html1 = await response1.text();

  let url = buscar(html1, '"  href="', '"');

  if (!url) {
    url =
      'https://marketplace.odontosfera.com.br/Produto/Comprar/YTQyNTg0NmMtYWQ5My00MGU2LTk5OTktMmJkMmM5OWRjYmQ3';
  }

  // 2) GET no marketplace
  const headers2 = {
    'Host': 'marketplace.odontosfera.com.br',
    'sec-ch-ua': '"Chromium";v="152", "Not?A_Brand";v="24", "Brave";v="152"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'upgrade-insecure-requests': '1',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36',
    'accept':
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'sec-gpc': '1',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'referer': 'https://uniodontominas.com.br/',
    'accept-language': 'pt-BR,pt;q=0.8',
    'priority': 'u=0, i',
  };

  const response2 = await session.get(url, { headers: headers2 });
  const html2 = await response2.text();

  const produtoId = buscar(html2, 'name="LojaId" type="hidden" value="', '"');

  // 3) GET na API BuscaCPFCadSus (usa o mesmo session para reaproveitar cookies)
  const headers3 = {
    'Host': 'marketplace.odontosfera.com.br',
    'sec-ch-ua-platform': '"Windows"',
    'x-requested-with': 'XMLHttpRequest',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'sec-ch-ua': '"Chromium";v="152", "Not?A_Brand";v="24", "Brave";v="152"',
    'sec-ch-ua-mobile': '?0',
    'sec-gpc': '1',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer':
      'https://marketplace.odontosfera.com.br/Produto/Comprar/YTQyNTg0NmMtYWQ5My00MGU2LTk5OTktMmJkMmM5OWRjYmQ3',
    'accept-language': 'pt-BR,pt;q=0.8',
    'priority': 'u=1, i',
  };

  const response3 = await session.get(
    'https://marketplace.odontosfera.com.br/Produto/BuscaCPFCadSus',
    {
      headers: headers3,
      searchParams: {
        cpf,
        LojaId: produtoId ?? '',
      },
    }
  );

  const data = await response3.json<{
    nome?: string;
    dataNascimento?: string;
    nomeMae?: string;
  }>();

  //console.log(data);

  return {
    nome: data.nome ?? 'NOME NÃO ENCONTRADO',
    dataNascimento: data.dataNascimento ?? 'DATA DE NASCIMENTO NÃO ENCONTRADA',
    nomeMae: data.nomeMae ?? 'NOME DA MÃE NÃO ENCONTRADO',
  };
} catch (error) {
  return {nome: 'Erro ao consultar odonto', dataNascimento: '', nomeMae: ''};
}
}

await consultarOdonto('16682091443');