import { FooterComponent } from '@/components/Footer'
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
  useBreakpointValue,
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
  const isMobile = useBreakpointValue({ base: true, md: false })

  const image = ['/images/mockup-04.png', '/images/mockup-02.png']

  const imageByDevice = isMobile ? image[0] : image[1]

  return (
    <Box>
      <HeaderComponent title="Despezzas" />

      <Center>
        <Stack
          direction={['column-reverse', 'row']}
          maxW="1200px"
          flex="1"
          p={['20px', '50px 50px 0px']}
          alignItems="start"
        >
          <Box flex={1} pt={[0, '100px']}>
            <Box fontWeight="800" fontSize="40px" minH={['300px', '200px']}>
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

            <Stack pt="40px" direction={['column', 'row']}>
              <Button
                leftIcon={<IoLogoGooglePlaystore size={20} />}
                bg="black"
                w={['100%', 'auto']}
              >
                PlayStore
              </Button>
              <Button
                w={['100%', 'auto']}
                leftIcon={<IoLogoApple size={20} />}
                bg="black"
              >
                Apple Store
              </Button>
            </Stack>
          </Box>

          <Box flex={1} pl={[0, '80px']} mr={[0, '-80px !important']}>
            <Image
              animation={animation}
              alt=""
              src={imageByDevice}
              objectFit={'contain'}
            />
          </Box>
        </Stack>
      </Center>

      <Center mt={['-250px', '-180px']}>
        <Stack
          align="center"
          direction={['column', 'row']}
          maxW="1200px"
          flex="1"
          p={['20px', '0px']}
        >
          <Box flex={1.5} pl="10px">
            <Image
              animation={animation}
              alt=""
              src="/images/mockup-03.png"
              height="900px"
              objectFit={'contain'}
              ml={[0, '-80px']}
            />
          </Box>

          <Box
            textAlign={['center', 'start']}
            flex={1}
            pt="0"
            mt={['-300px !important', '50px !important']}
          >
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

            <HStack display={['none', 'block']} pt="40px" pb="120px">
              <Button px="50px">baixe agora</Button>
            </HStack>
          </Box>
        </Stack>
      </Center>

      <Center mt={[20, '-80px']}>
        <Stack maxW="1200px" flex="1">
          <Text textAlign="center" fontWeight="800" fontSize="40px">
            Por que usar o Despezzas?
          </Text>

          <Stack
            direction={['column', 'row']}
            justify="space-between"
            py="50px"
            spacing={['20px', '100px']}
            px={['20px', '0px']}
          >
            <Stack w={['auto', '100px']} flex={1} textAlign="center">
              <Image
                alt=""
                src="/icons/check.svg"
                height="40px"
                objectFit={'contain'}
              />
              <Text pt="20px" fontWeight="800">
                Total controle de suas finanças
              </Text>
              <Text pt="10px">
                Tenha controle total de suas finanças pessoais e domésticas.
                Relatorios detalhados e gráficos para você entender melhor seus
                gastos.
              </Text>
            </Stack>

            <Stack w={['auto', '100px']} flex={1} textAlign="center">
              <Image
                alt=""
                src="/icons/check.svg"
                height="40px"
                objectFit={'contain'}
              />
              <Text pt="20px" fontWeight="800">
                Priorizamos sua segurança e privacidade
              </Text>
              <Text pt="10px">
                Sua privacidade é muito importante para nós. Nós nunca
                compartilhamos seus dados com terceiros.
              </Text>
            </Stack>

            <Stack w={['auto', '100px']} flex={1} textAlign="center">
              <Image
                alt=""
                src="/icons/check.svg"
                height="40px"
                objectFit={'contain'}
              />
              <Text pt="20px" fontWeight="800">
                Ajudamos você a alcançar sua independência financeira
              </Text>
              <Text pt="10px">
                Você pode acompanhar seus gastos e economizar dinheiro para
                alcançar sua independência financeira.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Center>

      <FooterComponent />
    </Box>
  )
}
