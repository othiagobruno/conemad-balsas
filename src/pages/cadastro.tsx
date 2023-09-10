import InputComponent from '@/components/Forms/Input'
import SelectComponent from '@/components/Forms/Select'
import HeaderComponent from '@/components/Header'
import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

interface FormProps {
  cargo_atual: string
  cargo_pretendido: string
  nome: string
  cpf: string
  telefone: string
  cep: string
  endereco: string
}

const Cadastro: React.FC = () => {
  const formMethods = useForm<FormProps>()

  return (
    <Box h="100vh" bg="background" overflowY="auto" color="text.primary">
      <HeaderComponent title="Inscrição" />

      <Stack
        direction={['column', 'row']}
        pt="50px"
        pb="200px"
        justify="center"
        spacing={['20px', '40px']}
        px={['20px', '150px']}
      >
        <Box flex={1} bg="white" shadow="md" borderRadius="8px" p="30px">
          <FormProvider {...formMethods}>
            <form action="">
              <Text fontSize="20px" fontWeight="bold" pb="30px">
                Cadastro CONEMAD
              </Text>

              <Stack spacing="20px">
                <SelectComponent
                  name="cargo_atual"
                  label="Cargo atual"
                  placeholder="Selecione um cargo"
                  options={[
                    {
                      name: 'Pastor',
                      value: 'pastor',
                    },
                    {
                      name: 'Evangelista',
                      value: 'evangelista',
                    },
                    {
                      name: 'Missionário',
                      value: 'missionario',
                    },
                    {
                      name: 'Presbítero',
                      value: 'presbitero',
                    },
                    {
                      name: 'Diácono',
                      value: 'diacono',
                    },
                    {
                      name: 'Auxiliar',
                      value: 'auxiliar',
                    },
                    {
                      name: 'Obreiro',
                      value: 'obreiro',
                    },
                    {
                      name: 'Membro',
                      value: 'membro',
                    },
                  ]}
                />

                <SelectComponent
                  name="cargo_pretendido"
                  label="Vou ser consagrado(a)"
                  placeholder="Selecione um cargo"
                  options={[
                    {
                      name: 'Pastor',
                      value: 'pastor',
                    },
                    {
                      name: 'Evangelista',
                      value: 'evangelista',
                    },
                    {
                      name: 'Missionário',
                      value: 'missionario',
                    },
                    {
                      name: 'Presbítero',
                      value: 'presbitero',
                    },
                  ]}
                />

                <InputComponent
                  name="nome"
                  placeholder="Seu nome completo"
                  label="Nome"
                />

                <HStack spacing="20px">
                  <InputComponent
                    name="cpf"
                    placeholder="Seu CPF"
                    label="CPF"
                    mask="999.999.999-99"
                    flex={1}
                  />

                  <InputComponent
                    name="telefone"
                    placeholder="Seu número de telefone"
                    label="Telefone"
                    flex={1}
                  />
                </HStack>

                <HStack spacing="20px">
                  <InputComponent
                    name="cep"
                    placeholder="Seu CEP"
                    label="CEP"
                    mask="99999-999"
                    flex={1}
                  />

                  <InputComponent
                    name="endereco"
                    placeholder="Seu endereço completo"
                    label="Endereço"
                    flex={1}
                  />
                </HStack>
              </Stack>
            </form>
          </FormProvider>
        </Box>

        <HStack align="start">
          <Box
            w={['full', '400px']}
            bg="white"
            shadow="md"
            borderRadius="8px"
            p="30px"
          >
            <HStack justify="space-between" pb="30px">
              <Text fontSize="20px" fontWeight="bold">
                Total
              </Text>
              <Text fontSize="20px" fontWeight="bold">
                R$ 130,00
              </Text>
            </HStack>

            <Button w="full">Finalizar Inscrição</Button>
          </Box>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Cadastro
