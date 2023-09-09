import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  nome: string
  distancia: string
  preco: string
  endereco: string
  telefone: string
}

const CardHotel: React.FC<Props> = ({
  distancia,
  endereco,
  preco,
  telefone,
  nome,
}) => {
  return (
    <Box>
      <Box
        display="flex"
        as="iframe"
        src={`https://www.google.com/maps?q=${endereco} Balsas - MA, 65800-000&key=AIzaSyAAJhGjHZCo6MpU3EnmgYkSqFaYVXdsQBM&output=embed`}
        w="full"
        h="200px"
        loading="lazy"
      />
      <Box py="20px">
        <Text fontWeight="bold">{nome}</Text>
        <Text fontSize="14px">{preco}</Text>
        <HStack pt="5px">
          <Text
            p="2px 10px"
            color="#068e06"
            bg="#24ff2445"
            borderRadius="20px"
            fontSize="12px"
            fontWeight="bold"
          >
            {distancia} da igreja
          </Text>
        </HStack>
      </Box>
      <Button
        size="sm"
        w="full"
        onClick={() => {
          window.open(
            `https://api.whatsapp.com/send?phone=55${telefone}&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20%20${nome}%20em%20Balsas%2C%20MA.`
          )
        }}
      >
        Entrar em contato
      </Button>
    </Box>
  )
}

export default CardHotel
