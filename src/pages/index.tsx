import HeaderComponent from '@/components/Header'
import {
  Box,
  Button,
  Center,
  HStack,
  Text,
  Image,
  Stack,
  keyframes,
} from '@chakra-ui/react'

import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5'
import Typewriter from 'typewriter-effect'

const animationKeyframes = keyframes`
  0% { transform: scale(0.98)  }
  50% { transform: scale(1)  }
  100% { transform: scale(0.98)  }
`

const animation = `${animationKeyframes} 3s ease-in-out infinite`

export default function Home() {
  return (
    <Box>
      <HeaderComponent title="Despezzas" />

      <Center>
        <HStack maxW="1200px" flex="1" p="50px 50px 0px" alignItems="start">
          <Box flex={1} pt="100px">
            <Box fontWeight="800" fontSize="40px">
              <Text bg="primary.500" as="span" color="white" px="10px">
                Despezzas
              </Text>
              <Typewriter
                options={{
                  strings: [
                    ' O jeito fácil de organizar suas finanças e economizar!',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 45,
                }}
              />
            </Box>
            <Text pt="10px">
              Simplifique sua vida financeira com Despezzas - Faça o download
              agora e comece a economizar!
            </Text>

            <HStack pt="40px">
              <Button
                leftIcon={<IoLogoGooglePlaystore size={20} />}
                bg="black"
                px="50px"
              >
                PlayStore
              </Button>
              <Button leftIcon={<IoLogoApple size={20} />} bg="black" px="50px">
                Apple Store
              </Button>
            </HStack>
          </Box>

          <Box flex={1} pl="80px" mr="-80px !important">
            <Image
              animation={animation}
              alt=""
              src="/images/mockup-02.png"
              // height="800px"
              objectFit={'contain'}
            />
          </Box>
        </HStack>
      </Center>

      <Center mt="-200px">
        <HStack maxW="1200px" flex="1">
          <Box flex={1.5} pl="10px">
            <Image
              animation={animation}
              alt=""
              src="/images/mockup-03.png"
              height="900px"
              objectFit={'contain'}
              ml="-80px"
            />
          </Box>

          <Box flex={1} pt="0">
            <Text fontWeight="800" fontSize="40px">
              Tenha Notícias do Mundo Financeiro
            </Text>
            <Text pt="10px">
              Ter acesso às notícias financeiras é fundamental para se manter
              informado sobre o mercado financeiro e tomar decisões financeiras
              mais informadas e estratégicas
              <br /> <br />
              Ficar informado pode ajudá-lo a otimizar seus investimentos,
              gerenciar riscos e aproveitar oportunidades financeiras.
            </Text>

            <HStack pt="40px" pb="120px">
              <Button px="50px">baixe agora</Button>
            </HStack>
          </Box>
        </HStack>
      </Center>

      <Center mt="-80px">
        <Stack maxW="1200px" flex="1">
          <Text textAlign="center" fontWeight="800" fontSize="40px">
            Por que usar o Despezzas?
          </Text>

          <HStack justify="space-between" py="50px" spacing="100px">
            <Stack w="100px" flex={1} textAlign="center">
              <Image
                alt=""
                src="/icons/check.svg"
                height="40px"
                objectFit={'contain'}
              />
              <Text pt="20px" fontWeight="800">
                Organize suas finanças
              </Text>
              <Text pt="10px">
                Tenha controle total de suas finanças pessoais e domésticas.
              </Text>
            </Stack>

            <Stack w="100px" flex={1} textAlign="center">
              <Image
                alt=""
                src="/icons/check.svg"
                height="40px"
                objectFit={'contain'}
              />
              <Text pt="20px" fontWeight="800">
                Organize suas finanças
              </Text>
              <Text pt="10px">
                Tenha controle total de suas finanças pessoais e domésticas.
              </Text>
            </Stack>

            <Stack w="100px" flex={1} textAlign="center">
              <Image
                alt=""
                src="/icons/check.svg"
                height="40px"
                objectFit={'contain'}
              />
              <Text pt="20px" fontWeight="800">
                Organize suas finanças
              </Text>
              <Text pt="10px">
                Tenha controle total de suas finanças pessoais e domésticas.
              </Text>
            </Stack>
          </HStack>
        </Stack>
      </Center>
    </Box>
  )
}
