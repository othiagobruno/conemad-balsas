import HeaderComponent from '@/components/Header'
import { Box, Button, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Cadastro: React.FC = () => {
  return (
    <Box h="100vh" bg="background" overflowY="auto" color="text.primary">
      <HeaderComponent title="Inscrição" />

      <Center py="30px">
        <Box
          w="full"
          maxW="500px"
          bg="white"
          shadow="lg"
          p="30px"
          borderRadius="10px"
        >
          <Text fontSize="12px" color="red" fontWeight="bold">
            Atenção
          </Text>
          <Text fontWeight="bold" fontSize="20px" color="black">
            Inscrições encerradas!
          </Text>

          <Text>
            Inscrições apenas presencialmente na secretaria da igreja a partir
            de sexta (dia 20) às 14h.
          </Text>

          <Text opacity={0.7} mt="40px" fontSize="14px" pb="10px">
            Mais informações:
          </Text>
          <Button
            leftIcon={
              <Image
                w="30px"
                h="30px"
                src="https://static.vecteezy.com/system/resources/thumbnails/018/930/748/small/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png"
              />
            }
            bg="green.400"
            colorScheme="whatsapp"
            onClick={() => {
              window.open(
                `https://api.whatsapp.com/send?phone=5599984757710&text=${encodeURIComponent(
                  'A paz do Senhor Jesus! Gostaria de mais informações sobre as inscrições da 24a AGO - CONEMAD-MA'
                )}`
              )
            }}
          >
            Chamar no Whatsapp
          </Button>
        </Box>
      </Center>
    </Box>
  )
}

export default Cadastro
