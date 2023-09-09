import { Button, Center, HStack, Image } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  title: string
}

const HeaderComponent: React.FC<Props> = ({ title }) => {
  const { push } = useRouter()

  return (
    <Center w="full">
      <HStack
        w="full"
        py="16px"
        px={[2, '150px']}
        bg="white"
        shadow="md"
        justify="space-between"
      >
        <Image onClick={() => push('/')} src="/logo.svg" />

        <HStack>
          <Button display={['none', 'block']} variant="text">
            Contato
          </Button>
          <Button
            onClick={() => {
              push('/cadastro')
            }}
            borderRadius="40px"
            p="10px 40px"
          >
            Inscrição
          </Button>
        </HStack>
      </HStack>

      <Head>
        <title>{`${title} | AD Madureira Regional de Balsas!`}</title>
        <meta
          name="description"
          content={`${title} | AD Madureira Regional de Balsas!`}
        />
      </Head>
    </Center>
  )
}

export default HeaderComponent
