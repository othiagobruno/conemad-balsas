import { toPrice } from './price'

const cargo = [
  {
    name: 'Pastor(a)',
    value: 'pastor',
  },
  {
    name: 'Evangelista',
    value: 'evangelista',
  },
  {
    name: 'Missionário(a)',
    value: 'missionario',
  },
  {
    name: 'Presbítero(a)',
    value: 'presbitero',
  },
  {
    name: 'Diácono / Diaconiza',
    value: 'diacono',
  },
  {
    name: 'Auxiliar',
    value: 'auxiliar',
  },
  {
    name: 'Obreiro(a)',
    value: 'obreiro',
  },
  {
    name: 'Membro(a)',
    value: 'membro',
  },
]

export const sendToWhatsapp = (dados: any) => {
  const url = `https://api.whatsapp.com/send?phone=5598985115648&text=${encodeURIComponent(`
Olá, a paz do Senhor Jesus! Eu sou ${
    dados.nome
  }! Acabei de fazer o pagamento da minha inscrição no valor de ${toPrice(
    dados.valor
  )} e queria confirmar se está tudo certo.

ID de inscrição: *${dados.id}*
Cargo Atual: *${cargo.find((a) => a.value === dados.cargo_atual)?.name}*
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
