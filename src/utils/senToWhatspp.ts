import { toPrice } from './price'

export const sendToWhatsapp = (dados: any) => {
  const url = `https://api.whatsapp.com/send?phone=559885115648text=${encodeURIComponent(`
Olá, a paz do Senhor Jesus! Eu sou ${
    dados.nome
  }! Acabei de fazer o pagamento da minha inscrição/consagração no valor de ${toPrice(
    dados.valor
  )} e queria confirmar se está tudo certo.

ID de inscrição: *${dados.id}*
Cargo Atual: *${dados.cargo_atual}*
Consagração: *${
    dados.cargo_pretendido !== 'não' ? dados.cargo_pretendido : 'Não'
  }*
Valor: *${toPrice(dados.valor)}*
Telefone: *${dados.telefone}*
CPF: *${dados.cpf}*
Campo: *${dados.campo}*
Regional: *${dados.regional}*
Pastor: *${dados.pastor}*
Cidade: *${dados.cidade}*
Estado: *${dados.estado}*
CEP: *${dados.cep}*
Endereço: *${dados.endereco}*
`)}`

  window.open(url, '_blank')
}
