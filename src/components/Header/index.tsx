import { Button, Center, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const HeaderComponent: React.FC = () => {
  return (
    <Center>
      <HStack flex="1" justify="space-between" maxW="1200px" p="20px">
        <Image src="logo.svg" width={120} height={60} alt={''} />

        <HStack spacing="10px">
          <Button variant="text">recursos</Button>
          <Button variant="text">planos</Button>
          <Button>baixe agora</Button>
        </HStack>
      </HStack>
    </Center>
  )
}

export default HeaderComponent
