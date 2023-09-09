import CardHotel from '@/components/CardHotel'
import HeaderComponent from '@/components/Header'
import { Box, Button, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const Home: React.FC = () => {
  const { push } = useRouter()

  return (
    <Box h="100vh" bg="background" overflowY="auto" color="text.primary">
      <HeaderComponent title="CONEMAD" />

      <Box
        bgImage="url('/images/bg.jpeg')"
        bgPos="top"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Box
          backdropFilter="blur(8px)"
          h="550px"
          textAlign="center"
          display="flex"
          flexDir="column"
          justifyContent="center"
          fontWeight="bold"
          color="white"
          bg="rgba(0,0,0, 0.3)"
          zIndex={-1}
        >
          <Box>
            <Text fontSize={['18px', '25px']}>CONEMAD MA - 25º AGO 2023</Text>
            <Text fontSize="50px">20 A 22 DE OUTUBRO</Text>
            <Text fontWeight="25px">BALSAS - MARANHÃO</Text>

            <Button
              onClick={() => {
                push('/cadastro')
              }}
              mt="30px"
              px="60px"
            >
              Fazer minha inscrição
            </Button>
          </Box>
        </Box>
      </Box>

      <Box w="full" bg="primary.500" py="30px">
        <Box color="white" textAlign="center">
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize={['20px', '30px']}
          >
            unidade, hierarquia e disciplina
          </Text>
          <Text opacity="0.6">Nação Madureira, aqui crescemos juntos!</Text>
        </Box>
      </Box>

      <Stack
        px={['20px', '150px']}
        pt="40px"
        spacing={[0, '100px']}
        direction={['column', 'row']}
      >
        <Box flex={1} pt={[0, '30px']} pb={['30px', 0]}>
          <Text fontSize="32px" fontWeight="bold">
            AD Madureira Balsas
          </Text>
          <Box py="16px">
            <Text fontWeight="bold" fontSize="20px">
              Rua Dr. José Coelho Noleto, N10
            </Text>
            <Text fontWeight="bold" fontSize="20px">
              Potosi, Balsas, MA
            </Text>
          </Box>
          <Text opacity={0.5}>Ao lado da camara de vereadores</Text>

          <Button
            mt={['30px', '60px']}
            size="sm"
            w="full"
            onClick={() => {
              window.open(
                'https://www.google.com/maps?q=Assembleia de Deus Ministerio de Madureira, Rua Dr. José Coelho Noleto, Balsas MA'
              )
            }}
          >
            Ver no Google Maps
          </Button>
        </Box>

        <Box flex={1.4}>
          <Box
            display="flex"
            as="iframe"
            src={
              'https://www.google.com/maps?q=Assembleia de Deus Ministerio de Madureira, Rua Dr. José Coelho Noleto, Balsas MA&key=AIzaSyAAJhGjHZCo6MpU3EnmgYkSqFaYVXdsQBM&output=embed'
            }
            w="full"
            h="350px"
            loading="lazy"
          />
        </Box>
      </Stack>

      <Box px={['20px', '150px']} py={['30px', '50px']}>
        <Text pb="20px" fontSize="26px" fontWeight="bold">
          Hoteis por perto
        </Text>

        <SimpleGrid columns={[2, 4]} spacing={['20px', '40px']}>
          <CardHotel
            nome="Hotel Balsas"
            distancia="500m"
            endereco="Hotel Balsas, Av. Cel. Fonseca, 153 - Centro"
            preco="R$ 95,00 - R$ 300,00"
            telefone="9935410615"
          />

          <CardHotel
            nome="Hotel Scalibur"
            distancia="800m"
            endereco="Hotel Scalibur 1, Av. Cel. Fonseca, 326 - Centro"
            preco="R$ 100,00 - R$ 280,00"
            telefone="99981639765"
          />

          <CardHotel
            nome="Hotel Feito a Mão"
            distancia="1km"
            endereco="Hotel Feito a Mão, Rua Pequeno Farias, 254 - Centro"
            preco="R$ 90,00 - R$ 190,00"
            telefone="89994563162"
          />

          <CardHotel
            nome="Mais Hotel"
            distancia="1.1km"
            endereco="Mais Hotel Balsas, Praça Antonio Pereira, n°100 - Centro"
            preco="R$ 130,00 - R$ 300,00"
            telefone="9998400-1019"
          />

          <CardHotel
            nome="New Plaza Hotel"
            distancia="1.7km"
            endereco="New Plaza Hotel Balsas, Av. Dr. José Bernandino, Nº 69 - Centro"
            preco="R$ 140,00 - R$ 260,00"
            telefone="9921412207"
          />

          <CardHotel
            nome="Hotel Mangueiras"
            distancia="1.8km"
            endereco="Hotel Mangueiras, Av. Dr. José Bernandino, 79 - Centro"
            preco="R$ 150,00 - R$ 270,00"
            telefone="99981025189"
          />

          <CardHotel
            nome="Leo Palace Hotel"
            distancia="1.8km"
            endereco="Léo Palace Hotel, Av. Dr. José Bernandino, 55 - Bairro de Fátima"
            preco="R$ 130,00 - R$ 250,00"
            telefone="99985298992"
          />

          <CardHotel
            nome="Balsas Premier Hotel"
            distancia="2.3km"
            endereco="Balsas Premier HOTEL, BR-230, 2500 - Setor Industrial"
            preco="R$ 230,00 - R$ 430,00"
            telefone="99984053835"
          />
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Home
