import { toPrice } from './price'

export const sendToWhatsapp = (dados: any) => {
  const url = `https://api.whatsapp.com/send?phone=559888953707&text=${encodeURIComponent(`
Olá, a paz do Senhor Jesus! Eu sou ${
    dados.nome
  }! Acabei de fazer o pagamento da minha inscrição no valor de ${toPrice(
    dados.valor
  )} e queria confirmar se está tudo certo.

ID de inscrição: *${dados.id}*
Cargo Atual: *${dados.cargo_atual}*
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
