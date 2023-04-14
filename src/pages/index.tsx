import HeaderComponent from '@/components/Header'
import {
  Box,
  Button,
  Center,
  HStack,
  Text,
  Image,
  Stack,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Box>
      <HeaderComponent />

      <Center>
        <HStack maxW="1200px" flex="1" p="50px 50px 0px" alignItems="start">
          <Box flex={1} pt="100px">
            <Text fontWeight="800" fontSize="40px">
              Depezzas: O jeito fácil de organizar suas finanças e economizar!
            </Text>
            <Text pt="10px">
              Simplifique sua vida financeira com Despezzas - Faça o download
              agora e comece a economizar!
            </Text>

            <HStack pt="40px">
              <Button px="50px">baixe agora</Button>
            </HStack>
          </Box>

          <Box flex={1} pl="80px" mr="-80px !important">
            <Image
              alt=""
              src="/images/mockup-02.png"
              // height="800px"
              objectFit={'contain'}
            />
          </Box>
        </HStack>
      </Center>

      <Center mt="-120px">
        <HStack maxW="1200px" flex="1">
          <Box flex={1.5} pl="10px">
            <Image
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
        </Stack>
      </Center>
    </Box>
  )
}
