
import { api } from "../servicos/serviço";
import { DadosPessoais } from "../geradores/pessoas";




export async function consulta(cpf: string) {
  // const cpf: string = '16682091443';

  try{

let response = await api.get('https://www.amildental.com.br/plano-odontologico/dental-bronze-doc-pf/970680_DENTALNG1', {
  headers: {
    'Host': 'www.amildental.com.br',
    'sec-ch-ua': '"Brave";v="155", "Chromium";v="155", "Not(A:Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'upgrade-insecure-requests': '1',
    'user-agent': DadosPessoais.userAgent,
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/jxl,image/avif,image/webp,image/apng,*/*;q=0.8',
    'sec-gpc': '1',
    'sec-fetch-site': 'none',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'accept-language': 'pt-BR,pt;q=0.8',
    'priority': 'u=0, i'
  }
});

let responseText = await response.text();


let response2 = await api.get('https://www.amildental.com.br/ccstoreui/v1/metadata/order', {
  searchParams: {
    'dynamicOnly': 'true'
  },
  headers: {
    'Host': 'www.amildental.com.br',
    'x-ccvisitorid': '1068iArpzm4183NmBK0zcKChLrqPRyi6MdXsLIUEVsnqGkA6F5E',
    'x-ccvisitid': '43fb4125:1a148b04fad:1d1c-4094326536',
    'sec-ch-ua-platform': '"Windows"',
    'sec-ch-ua': '"Brave";v="155", "Chromium";v="155", "Not(A:Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'x-ccsite': 'siteUS',
    'x-requested-with': 'XMLHttpRequest',
    'user-agent': DadosPessoais.userAgent,
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'content-type': 'application/json',
    'x-ccviewport': 'lg',
    'x-cc-meteringmode': 'CC-NonMetered',
    'x-ccprofiletype': 'storefrontUI',
    'sec-gpc': '1',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.amildental.com.br/plano-odontologico/dental-bronze-doc-pf/970680_DENTALNG1',
    'accept-language': 'pt-BR,pt;q=0.8',
    'priority': 'u=1, i'
  }
});

let response2Text = await response2.text();


let response3 = await api.post('https://www.amildental.com.br/ccstorex/custom/v1/acs-oic-integrator/storefront', {
  headers: {
    'Host': 'www.amildental.com.br',
    'sec-ch-ua-platform': '"Windows"',
    'authorization': 'Bearer null',
    'user-agent': DadosPessoais.userAgent,
    'accept': '*/*',
    'sec-ch-ua': '"Brave";v="155", "Chromium";v="155", "Not(A:Brand";v="24"',
    'content-type': 'application/json',
    'sec-ch-ua-mobile': '?0',
    'sec-gpc': '1',
    'origin': 'https://www.amildental.com.br',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.amildental.com.br/plano-odontologico/dental-bronze-doc-pf/970680_DENTALNG1',
    'accept-language': 'pt-BR,pt;q=0.8',
    'priority': 'u=1, i'
  },
  json: {
    'path': '/AMILPRODUTOSENDERECOCEP/1.0/rest/venda-online/v2/produtos/api/endereco/04711904',
    'method': 'GET',
    'payload': null,
    'headers': ''
  }
});

let response3Text = await response3.text();


let response4 = await api.get('https://www.amildental.com.br/ccstoreui/v1/addressTypes', {
  headers: {
    'Host': 'www.amildental.com.br',
    'x-ccasset-language': 'en',
    'sec-ch-ua-platform': '"Windows"',
    'x-cc-meteringmode': 'CC-NonMetered',
    'sec-ch-ua': '"Brave";v="155", "Chromium";v="155", "Not(A:Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'x-ccsite': 'siteUS',
    'x-requested-with': 'XMLHttpRequest',
    'user-agent': DadosPessoais.userAgent,
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'content-type': 'application/json',
    'x-ccviewport': 'lg',
    'sec-gpc': '1',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.amildental.com.br/plano-odontologico/dental-bronze-doc-pf/970680_DENTALNG1',
    'accept-language': 'pt-BR,pt;q=0.8',
    'priority': 'u=1, i'
  }
});

let response4Text = await response4.text();



let response5 = await api.post('https://www.amildental.com.br/ccstoreui/v1/profiles', {
  headers: {
    'Host': 'www.amildental.com.br',
    'sec-ch-ua-platform': '"Windows"',
    'sec-ch-ua': '"Brave";v="155", "Chromium";v="155", "Not(A:Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'x-ccsite': 'siteUS',
    'x-requested-with': 'XMLHttpRequest',
    'user-agent': DadosPessoais.userAgent,
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'content-type': 'application/json',
    'x-ccviewport': 'lg',
    'x-cc-meteringmode': 'CC-NonMetered',
    'x-ccprofiletype': 'storefrontUI',
    'sec-gpc': '1',
    'origin': 'https://www.amildental.com.br',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.amildental.com.br/checkout/',
    'accept-language': 'pt-BR,pt;q=0.8',
    'priority': 'u=1, i'
  },
  json: {
    'email': DadosPessoais.email,
    'password': DadosPessoais.senha,
    'firstName': DadosPessoais.nome,
    'lastName': DadosPessoais.sobrenome,
    'receiveEmail': 'no',
    'GDPRProfileP13nConsentGranted': false,
    'shippingAddresses': [
      {
        'alias': 'Address',
        'prefix': '',
        'firstName': DadosPessoais.nome,
        'middleName': '',
        'lastName': DadosPessoais.sobrenome,
        'suffix': '',
        'country': 'BR',
        'postalCode': '04711-904',
        'address1': 'RUA ARQUITETO OLAVO REDIG DE CAMPOS 105',
        'address2': '',
        'address3': '',
        'city': 'SAO PAULO',
        'state': 'SP',
        'county': 'VILA SAO FRANCISCO (ZONA SUL)',
        'phoneNumber': '',
        'email': null,
        'jobTitle': '',
        'companyName': '',
        'faxNumber': '',
        'addressType': [],
        'type': '',
        'repositoryId': '',
        'isDefaultBillingAddress': false,
        'isDefaultShippingAddress': false,
        'predefinedAddressTypes': [],
        'isTypeModified': false,
        'computedDefaultBilling': false,
        'computedDefaultShipping': false,
        'selectedCountry': 'BR',
        'selectedState': 'SP',
        'state_ISOCode': 'BR-SP',
        'defaultCountryCode': 'BR',
        'selectedAddressTypes': [],
        'isDefaultAddress': true,
        'dynamicProperties': [],
        'computedAddressType': [],
        'computedCountry': [
          'BR'
        ],
        'computedState': [
          'SP'
        ],
        'types': []
      }
    ],
    'locale': '',
    'first_access': true,
    'userType_': null,
    'currentCartProperties_': null,
    'cta_corretor': false,
    '_codigoCorretora': null,
    'inscricaoEstadual': null,
    'nomeFantasia': null,
    'tipoCliente': 'PF',
    'comercialTelefone': null,
    'comercialCargo': null,
    'razaoSocial': null,
    'comercialEmail': null,
    'comercialNome': null,
    'mei': false,
    'telefone': null,
    'CNPJ': null,
    '_codigoSupervisor': null,
    '_cpfCorretor': null,
    'x_soaRequestsPerDay': '0',
    'CPF': null,
    'currentOrderDetails': null,
    'x_paymentAttemptFail': 0
  }
});

let response5Text = await response5.text();


let response6 = await api.post('https://www.amildental.com.br/ccstoreui/v1/login/', {
  headers: {
    'Host': 'www.amildental.com.br',
    'sec-ch-ua-platform': '"Windows"',
    'sec-ch-ua': '"Brave";v="155", "Chromium";v="155", "Not(A:Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'x-ccsite': 'siteUS',
    'x-requested-with': 'XMLHttpRequest',
    'user-agent': DadosPessoais.userAgent,
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'x-ccprofiletype': 'storefrontUI',
    'x-ccvisitorid': '1068iArpzm4183NmBK0zcKChLrqPRyi6MdXsLIUEVsnqGkA6F5E',
    'sec-gpc': '1',
    'origin': 'https://www.amildental.com.br',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.amildental.com.br/checkout/',
    'accept-language': 'pt-BR,pt;q=0.8',
    'priority': 'u=1, i'
  },
  body: new URLSearchParams({
    'grant_type': 'password',
    'username': DadosPessoais.email,
    'password': DadosPessoais.senha
  })
});

let response6Text: any = await response6.json();
let accessToken = response6Text['access_token'];


let response7 = await api.post('https://www.amildental.com.br/ccstoreui/v1/refresh', {
  headers: {
    'Host': 'www.amildental.com.br',
    'x-ccvisitid': '43fb4125:1a148b04fad:1d1c-4094326536',
    'sec-ch-ua-platform': '"Windows"',
    'authorization': `Bearer ${accessToken}`,
    'sec-ch-ua': '"Brave";v="155", "Chromium";v="155", "Not(A:Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'x-ccsite': 'siteUS',
    'x-requested-with': 'XMLHttpRequest',
    'user-agent': DadosPessoais.userAgent,
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'content-type': 'application/json',
    'x-ccprofiletype': 'storefrontUI',
    'x-ccvisitorid': '1068iArpzm4183NmBK0zcKChLrqPRyi6MdXsLIUEVsnqGkA6F5E',
    'sec-gpc': '1',
    'origin': 'https://www.amildental.com.br',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.amildental.com.br/checkout/',
    'accept-language': 'pt-BR,pt;q=0.8',
    'priority': 'u=1, i'
  },
  json: {}
});

let response7Text: any = await response7.json();
let newAccessToken = response7Text['access_token'];


let response8 = await api.post('https://www.amildental.com.br/ccstorex/custom/v1/acs-oic-integrator/_storefront', {
  headers: {
    'Host': 'www.amildental.com.br',
    'sec-ch-ua-platform': '"Windows"',
    'authorization': `Bearer ${newAccessToken}`,
    'user-agent': DadosPessoais.userAgent,
    'accept': '*/*',
    'sec-ch-ua': '"Brave";v="155", "Chromium";v="155", "Not(A:Brand";v="24"',
    'content-type': 'application/json',
    'sec-ch-ua-mobile': '?0',
    'sec-gpc': '1',
    'origin': 'https://www.amildental.com.br',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.amildental.com.br/checkout/',
    'accept-language': 'pt-BR,pt;q=0.8',
    'priority': 'u=1, i'
  },
  json: {
    'path': `/AMILPROPOSTASCONSULTABASECPFSERV/1.0/rest/venda-online/v2/propostas/ConsultaBaseCpfAuthenticated?cpf=${cpf}`,
    'method': 'GET',
    'payload': null,
    'headers': ''
  }
});

const response8Text = await response8.json();
const retorno = JSON.stringify(response8Text);

const reposta: string = retorno.includes('CPF OU CNPJ NÃO ENCONTRADO NA BASE') ? 'CPF OU CNPJ NÃO ENCONTRADO NA BASE' : JSON.stringify(response8Text);


console.log(reposta);
console.log(DadosPessoais.senha);



  const { appendFile } = await import('fs/promises');

  await appendFile('login.txt', `${DadosPessoais.email}:${DadosPessoais.senha} \n`);

} catch (error) {
  console.error('Erro ao escrever no arquivo:', error);
}

}



await consulta("16682091443");

