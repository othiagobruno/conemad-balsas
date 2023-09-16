import HeaderComponent from '@/components/Header'
import { ICreateSub } from '@/hooks/useSubscription'
import { toPrice } from '@/utils/price'
import { Box, Center, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const SuccessPage: React.FC = () => {
  const { query } = useRouter()
  const [pixCode, setPixCode] = React.useState<string>('')
  const dados = query as any as ICreateSub
  const firstName = dados?.nome?.split(' ')?.[0]

  useEffect(() => {
    if (dados)
      fetch(`${pixChave}&saida=br`).then((res) => {
        res.text().then((text) => {
          setPixCode(text)
        })
      })
  }, [dados])

  if (!dados) {
    return <div />
  }

  const pixChave = `https://gerarqrcodepix.com.br/api/v1?nome=${firstName}&cidade=${dados.cidade}&valor=${dados.valor}&chave=umadbalsas@gmail.com`

  return (
    <Box>
      <HeaderComponent title="Obrigado por se inscrever" />

      <Center h="full" pt="50px">
        <Box
          w={['auto', '600px']}
          shadow="lg"
          borderRadius="10px"
          p="30px"
          bg="white"
        >
          <Text fontSize="20px" fontWeight="bold">
            Ei, {firstName}! Finalize sua inscrição
          </Text>
          <Text>
            Para finalizar sua inscrição, faça o pagamento do valor de{' '}
            <Text
              color="primary.500"
              as="span"
              fontSize="18px"
              fontWeight="bold"
            >
              {toPrice(dados.valor)}
            </Text>{' '}
            para a chave{' '}
            <Text
              color="primary.500"
              as="span"
              fontSize="18px"
              fontWeight="bold"
            >
              umadbalsas@gmail.com
            </Text>
          </Text>

          <Center py="20px">
            <Image src={`${pixChave}&saida=qr`} />
          </Center>

          <Box>{pixCode}</Box>
        </Box>
      </Center>
    </Box>
  )
}

export default SuccessPage
