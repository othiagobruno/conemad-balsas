import { Button, Center, HStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  title: string
}

const HeaderComponent: React.FC<Props> = ({ title }) => {
  const { push } = useRouter()

  return (
    <Center>
      <HStack
        flex="1"
        justify={['center', 'space-between']}
        maxW="1200px"
        p="20px"
      >
        <Image
          onClick={() => push('/')}
          src="logo.svg"
          width={120}
          height={60}
          alt={''}
        />

        <HStack spacing="0px" display={['none', 'block']}>
          <Button variant="text" onClick={() => push('/')}>
            recursos
          </Button>
          <Button variant="text" onClick={() => push('/plans')}>
            planos
          </Button>
          <Button onClick={() => push('/terms')} variant="text">
            termos de uso
          </Button>
          <Button onClick={() => push('/')}>baixe agora</Button>
        </HStack>
      </HStack>

      <Head>
        <title>{`${title} | Despezzas: O jeito fácil de organizar suas finanças e economizar!`}</title>
        <meta
          name="description"
          content={`${title} | Depezzas: O jeito fácil de organizar suas finanças e economizar!`}
        />
      </Head>
    </Center>
  )
}

export default HeaderComponent
