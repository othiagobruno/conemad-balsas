const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')
const prisma = new PrismaClient()

async function main() {
  dotenv.config()
  const prisma = new PrismaClient()

  await prisma.category.createMany({
    data: [
      {
        id: '74d2e0f3-a8f3-4ef9-9c92-80a41fd297c0',
        name: 'trabalho',
        icon: '💼',
      },
      {
        id: 'fca4f25f-3cc9-428f-b2a5-9d17ec16c4ee',
        name: 'investimentos',
        icon: '💰',
      },
      {
        id: 'c73903f0-3563-4a9f-ab7f-548fa66ad2b6',
        name: 'emprestimos',
        icon: '💸',
      },
      {
        id: 'e37b6e11-3295-4c57-bc36-0cafd26ee7e8',
        name: 'renda extra',
        icon: '💵',
      },
      {
        id: 'e2368b32-5c6b-401e-adac-1be64deef10b',
        name: 'alimentação',
        icon: '🍔',
      },
      {
        id: '922eaf38-a503-4821-9125-a1159d2e140c',
        name: 'educação',
        icon: '📚',
      },
      {
        id: '82faf665-1515-4948-9851-ea20dbea1c1c',
        name: 'lazer',
        icon: '🎮',
      },
      {
        id: 'bd4673cf-70f5-4288-abaa-a6a8794a89ac',
        name: 'moradia',
        icon: '🏠',
      },
      {
        id: '7938d1af-3dee-44ff-939a-514af60bf6e3',
        name: 'saúde',
        icon: '🏥',
      },
      {
        id: '687df2a3-c011-401f-97d8-b5d01fb437a3',
        name: 'transporte',
        icon: '🚗',
      },
      {
        id: '85d4c01b-9d1a-47c8-84c6-8df7a295e820',
        name: 'outros',
        icon: '🤷‍♂️',
      },
    ],
  })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
