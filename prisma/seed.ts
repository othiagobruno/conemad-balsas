const { PrismaClient } = require("@prisma/client");
const dotenv = require("dotenv");

const main = async () => {
  dotenv.config();

  const prisma = new PrismaClient();
  await prisma.category.createMany({
    data: [
      {
        name: "alimentação",
        icon: "🍔",
      },
      {
        name: "educação",
        icon: "📚",
      },
      {
        name: "lazer",
        icon: "🎮",
      },
      {
        name: "moradia",
        icon: "🏠",
      },
      {
        name: "saúde",
        icon: "🏥",
      },
      {
        name: "transporte",
        icon: "🚗",
      },
      {
        name: "outros",
        icon: "🤷‍♂️",
      },
    ],
  });
};

main();
