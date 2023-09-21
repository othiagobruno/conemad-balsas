import HeaderComponent from '@/components/Header'
import { useSubscription } from '@/hooks/useSubscription'
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Spinner,
  Text,
} from '@chakra-ui/react'
import html2canvas from 'html2canvas'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const ConfirmarPage: React.FC = () => {
  const [data, setData] = useState<IData>(null)
  const { getConfirm } = useSubscription()
  const { query } = useRouter()
  const { id } = query

  useEffect(() => {
    if (id) {
      getConfirm(id as string).then((res) => {
        setData(res)
      })
    }
  }, [id])

  if (!data || !id)
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    )

  const downloadImage = async () => {
    const element = document.getElementById('print')

    const res = await html2canvas(element, {
      scale: 10,
    })

    const image = res.toDataURL('image/png')

    const link = document.createElement('a')
    link.download = `${data.nome}.png`
    link.href = image
    link.click()
  }

  return (
    <Box>
      <HeaderComponent title="Obrigado por se inscrever" />

      <Flex h="full" py="50px" flexDir="column" align="center">
        <Box>
          <Flex
            id="print"
            backgroundColor="white"
            w={['auto', '600px']}
            shadow="lg"
            bgImage="url('/bg.png')"
            bgPos="top"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Flex
              p="40px 30px"
              pb="10px"
              flexDir="column"
              align="center"
              flex={1}
            >
              <Text opacity={0.5}>CONFIRMAÇÃO DE INSCRIÇÃO</Text>
              <Text
                py="20px"
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="26px"
              >
                {data?.nome}
              </Text>

              <Text fontWeight="bold" fontSize="14px">
                CONEMAD MA - 25º AGO 2023 - BALSAS - MARANHÃO
              </Text>

              <HStack pt="30px">
                <Image mixBlendMode="multiply" src="/conemad.png" w="60px" />
                <Image src="/logo.svg" w="100px" />
              </HStack>
            </Flex>
          </Flex>
        </Box>

        <Button onClick={downloadImage} mt="30px">
          Enviar Comprovante de Inscrição
        </Button>
      </Flex>
    </Box>
  )
}

export default ConfirmarPage

export interface IData {
  id: string
  nome: string
  telefone: string
  cpf: string
  cep: string
  endereco: string
  cidade: string
  estado: string
  cargo_atual: string
  valor: number
  campo: string
  regional: string
  pastor: string
  pixCode?: any
  pago: boolean
  createdAt: string
  updatedAt: string
}
