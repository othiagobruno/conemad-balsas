import HeaderComponent from '@/components/Header'
import { api } from '@/hooks/useSubscription'
import { Box, Center, HStack, Input, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const SENHA = 'madureira10'

const Total: React.FC = () => {
  const [liberado, setLiberado] = useState(false)
  const [dados, setDados] = useState<IResponse>()

  useEffect(() => {
    api.get<IResponse>('/total').then((response) => {
      setDados(response.data)
    })
  })

  if (!liberado) {
    return (
      <Center h="100vh">
        <Box>
          <Text fontSize="33px">
            <b>Entrar</b> no painel
          </Text>

          <Input
            type="password"
            placeholder="Insira a Senha"
            onChange={(e) => {
              if (e.target.value === SENHA) {
                setLiberado(true)
              }
            }}
          />
        </Box>
      </Center>
    )
  }

  return (
    <Box bg="gray.200" h="100vh" overflowX="auto">
      <HeaderComponent title="Dashboard" />
      <Center>
        <Box px={['20px', 0]} mt={[5, '50px']} w={['full', '60%']}>
          <Stack direction={['column', 'row']} spacing={[3, '30px']}>
            <Box flex={1} bg="white" p="30px" borderRadius="20px" shadow="lg">
              <Text
                opacity={0.5}
                textTransform="uppercase"
                fontSize="12px"
                color="grey.100"
              >
                Total de inscrições
              </Text>
              <Text fontWeight="bold" fontSize="22px">
                {dados?.quantidade}
              </Text>
            </Box>

            <Box flex={1} bg="white" p="30px" borderRadius="20px" shadow="lg">
              <Text
                opacity={0.5}
                textTransform="uppercase"
                fontSize="12px"
                color="grey.100"
              >
                Valor Total
              </Text>
              <Text fontWeight="bold" fontSize="22px">
                {dados?.total}
              </Text>
            </Box>
          </Stack>

          <Stack
            direction={['column', 'row']}
            spacing={[2, '30px']}
            align="start"
            pt={[3, '30px']}
            pb="100px"
          >
            <Box p="30px" bg="white" borderRadius="10px" shadow="lg" flex={1}>
              <Text fontSize="22px" fontWeight="bold" pb="20px">
                Por cidade
              </Text>
              {dados?.porCidade.map((item) => (
                <HStack
                  py="10px"
                  key={String(item.cidade)}
                  justify="space-between"
                  borderBottom="1px solid #eee"
                >
                  <Text>{item.cidade}</Text>
                  <Text fontWeight="bold">{item.total}</Text>
                </HStack>
              ))}
            </Box>

            <Box p="30px" bg="white" borderRadius="10px" shadow="lg" flex={1}>
              <Text fontSize="22px" fontWeight="bold" pb="20px">
                Por campo
              </Text>
              {dados?.porCampo.map((item) => (
                <HStack
                  py="10px"
                  key={String(item.campo)}
                  justify="space-between"
                  borderBottom="1px solid #eee"
                >
                  <Text>{item.campo}</Text>
                  <Text fontWeight="bold">{item.total}</Text>
                </HStack>
              ))}
            </Box>
          </Stack>
        </Box>
      </Center>
    </Box>
  )
}

export default Total

export interface PorCidade {
  cidade: string
  total: string
}

export interface PorCampo {
  campo: string
  total: string
}

export interface IResponse {
  total: string
  quantidade: number
  porCidade: PorCidade[]
  porCampo: PorCampo[]
}
