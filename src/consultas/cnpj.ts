import ky from 'ky'


export async function consultarCnpj(cnpj: string) {

  try{

    const response = await ky.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`).json();
    
    console.log(response);
  }catch(error){
    console.log(error);
  }
}



consultarCnpj('25991097000172');
