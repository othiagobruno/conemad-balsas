import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

export const FooterComponent: React.FC = () => {
  const { push } = useRouter()

  return (
    <Center>
      <Box
        mt="100px"
        py="50px"
        maxW="1200px"
        flex="1"
        borderTop="1px solid #eee"
      >
        <Stack
          justify="space-between"
          align="center"
          direction={['column', 'row']}
        >
          <Stack align={['center', 'start']} pb={['20px', 0]}>
            <Image cursor="pointer" src="/logo.svg" w="160px" />
            <Text textAlign={['center', 'start']} pt="6px">
              Todos os Direitos Reservados © 2023 Despezzas
            </Text>
          </Stack>

          <HStack spacing="30px">
            <Button
              onClick={() => push('/terms')}
              color="black"
              textDecor="underline"
              fontSize="12px"
              variant="link"
            >
              termos de uso
            </Button>
            <Button
              onClick={() => push('/terms')}
              color="black"
              textDecor="underline"
              fontSize="12px"
              variant="link"
            >
              política de privacidade
            </Button>
          </HStack>
        </Stack>
      </Box>
    </Center>
  )
}
