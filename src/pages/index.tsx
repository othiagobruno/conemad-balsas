import HeaderComponent from '@/components/Header'
import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Home: React.FC = () => {
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
          h="400px"
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

            <Button mt="30px" px="60px">
              Fazer minha inscrição
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        position="relative"
        zIndex={100}
        bgImage="url('/images/bg.svg')"
        bgPos="top"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="40%"
        m={['-40px', '-80px']}
        alignItems="center"
      >
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
        px={['40px', '150px']}
        pt={['60px', '150px']}
        spacing={[0, '50px']}
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
        </Box>

        <Box flex={1.4}>
          <Box
            display="flex"
            as="iframe"
            src={
              'https://www.google.com/maps?q=Assembleia de Deus Ministerio de Madureira, Rua Dr. José Coelho Noleto, Balsas MA&key=AIzaSyAAJhGjHZCo6MpU3EnmgYkSqFaYVXdsQBM&output=embed'
            }
            w="full"
            h="400px"
            loading="lazy"
          />
        </Box>
      </Stack>

      <Box px={[2, '150px']} py="100px">
        <Text fontSize="32px" fontWeight="bold">
          Hoteis por perto
        </Text>
      </Box>
    </Box>
  )
}

export default Home
