import HeaderComponent from '@/components/Header'
import { ICreateSub, useSubscription } from '@/hooks/useSubscription'
import { copyToClipboard } from '@/utils/copy'
import { toPrice } from '@/utils/price'
import { sendToWhatsapp } from '@/utils/senToWhatspp'
import {
  Box,
  Button,
  Center,
  Image,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export const CHAVE_PIX = '07815192000133' // PIX CONEMAD

const SuccessPage: React.FC = () => {
  const { query } = useRouter()
  const dadosQuery = query as any as ICreateSub

  const [dados, setDados] = React.useState<ICreateSub>(dadosQuery)

  const firstName = dados?.nome?.split(' ')?.[0]
  const { generatePix, pix, getDados } = useSubscription()

  const toast = useToast()

  useEffect(() => {
    if (dadosQuery.id) {
      getDados(dadosQuery.id).then((res) => setDados(res))
    }
  }, [dadosQuery.id])

  useEffect(() => {
    if (!dados.valor) return
    generatePix(dados.valor)
  }, [dados.valor])

  if (!dados) {
    return <div />
  }

  const pixChave = `https://gerarqrcodepix.com.br/api/v1?nome=${firstName}&cidade=${dados.cidade}&valor=${dados.valor}&chave=${CHAVE_PIX}`

  if (!dados?.nome) {
    return (
      <Center h="100vh" w="100vw">
        <Spinner />
      </Center>
    )
  }

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

          <Text fontWeight="bold" fontSize="16px" pb="10px">
            Clique para copiar a Chave PIX
          </Text>
          <Box
            cursor="pointer"
            userSelect={'none'}
            onClick={() => {
              copyToClipboard(pix)
              toast({
                title: 'Chave PIX copiada',
                description:
                  'A chave PIX foi copiada para sua area de transferência',
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
            }}
            p="14px"
            bg="gray.200"
            borderRadius="5px"
            fontWeight="bold"
          >
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
