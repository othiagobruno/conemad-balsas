import HeaderComponent from '@/components/Header'
import { ICreateSub, useSubscription } from '@/hooks/useSubscription'
import { toPrice } from '@/utils/price'
import { sendToWhatsapp } from '@/utils/senToWhatspp'
import { Box, Button, Center, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export const CHAVE_PIX = '07815192000133'

const SuccessPage: React.FC = () => {
  const { query } = useRouter()
  const dados = query as any as ICreateSub
  const firstName = dados?.nome?.split(' ')?.[0]
  const { generatePix, pix } = useSubscription()

  useEffect(() => {
    if (!dados.valor) return
    generatePix(dados.valor)
  }, [dados.valor])

  if (!dados) {
    return <div />
  }

  const pixChave = `https://gerarqrcodepix.com.br/api/v1?nome=${firstName}&cidade=${dados.cidade}&valor=${dados.valor}&chave=${CHAVE_PIX}`

  return (
    <Box>
      <HeaderComponent title="Obrigado por se inscrever" />

      <Center h="full" py="50px">
        <Box
          w={['auto', '600px']}
          shadow="lg"
          borderRadius="10px"
          p="30px"
          bg="white"
        >
          <Box bg="red.600" p="20px" borderRadius="5px" mb="20px">
            <Text fontSize="14px" color="white" fontWeight="bold">
              ⚠️ Aviso! Não saia dessa pagina sem fazer o pagamento, pois não é
              possivel fazer outro cadastro no mesmo CPF.
            </Text>
          </Box>
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
              07.815.192/0001-33
            </Text>
          </Text>

          <Center py="20px">
            <Image src={`${pixChave}&saida=qr`} />
          </Center>

          <Box p="14px" bg="gray.200" borderRadius="5px" fontWeight="bold">
            {pix}
          </Box>

          <Center py="20px">
            <Button colorScheme="red" onClick={() => sendToWhatsapp(dados)}>
              Enviar confirmação no WhatsApp
            </Button>
          </Center>
        </Box>
      </Center>
    </Box>
  )
}

export default SuccessPage
