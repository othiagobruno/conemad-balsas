import InputComponent from '@/components/Forms/Input'
import SelectComponent from '@/components/Forms/Select'
import HeaderComponent from '@/components/Header'
import { useCep } from '@/hooks/useCep'
import { ICreateSub, useSubscription } from '@/hooks/useSubscription'
import { toPrice } from '@/utils/price'
import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

const Cadastro: React.FC = () => {
  const formMethods = useForm<ICreateSub>({
    defaultValues: {
      cargo_atual: 'membro',
      cargo_pretendido: 'não',
      nome: '',
      cpf: '',
      telefone: '',
      cep: '',
      endereco: '',
    },
  })
  const cargo_pretendido = formMethods.watch('cargo_pretendido') || 'não'

  const { createSub } = useSubscription()

  const priceByCargoPretendido = {
    evangelista: 910,
    missionario: 910,
    pastor: 560,
    não: 130,
  }[cargo_pretendido]

  const price = priceByCargoPretendido

  const { getByCep } = useCep()

  const handleSubmit = async (data: ICreateSub) => {
    const cep = data.cep.replace(/\D/g, '')
    const { city, state } = await getByCep(cep)

    const response = await createSub({
      ...data,
      cidade: city,
      estado: state,
      valor: price,
    })
    console.log(response)
  }

  return (
    <Box h="100vh" bg="background" overflowY="auto" color="text.primary">
      <HeaderComponent title="Inscrição" />

      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
          <Stack
            direction={['column', 'row']}
            pt="50px"
            pb="200px"
            justify="center"
            spacing={['20px', '40px']}
            px={['20px', '150px']}
          >
            <Box flex={1} bg="white" shadow="lg" borderRadius="8px" p="30px">
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
                      name: 'Não vou ser consagrado(a)',
                      value: 'não',
                    },
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
                    mask="(99) 99999-9999"
                    flex={1}
                  />
                </HStack>

                <HStack spacing="20px">
                  <InputComponent
                    name="cep"
                    placeholder="Seu CEP"
                    label="CEP da sua residência"
                    mask="99999-999"
                    flex={1}
                  />

                  <InputComponent
                    name="endereco"
                    placeholder="Seu endereço completo"
                    label="Seu endereço completo"
                    flex={1}
                  />
                </HStack>

                <Stack direction={['column', 'row']} spacing="20px">
                  <InputComponent
                    name="campo"
                    placeholder="Campo"
                    label="Qual o nome do Campo?"
                    flex={1}
                  />

                  <InputComponent
                    name="regional"
                    placeholder="Regional"
                    label="Qual o nome da Regional?"
                    flex={1}
                  />
                </Stack>

                <InputComponent
                  name="pastor"
                  placeholder="Nome do seu pastor"
                  label="Qual o nome do seu pastor?"
                  flex={1}
                />
              </Stack>
            </Box>

            <HStack align="start">
              <Box
                w={['full', '450px']}
                bg="white"
                shadow="md"
                borderRadius="8px"
                p="30px"
              >
                <Text fontSize="20px" fontWeight="bold" pb="30px">
                  Confira seus dados
                </Text>
                <HStack justify="space-between" pb="30px">
                  <Text>Cargo atual</Text>
                  <Text fontWeight="bold" textTransform="capitalize">
                    {formMethods.watch('cargo_atual')}
                  </Text>
                </HStack>
                <HStack justify="space-between" pb="30px">
                  <Text>Vou ser consagrado</Text>
                  <Text fontWeight="bold" textTransform="capitalize">
                    {cargo_pretendido}
                  </Text>
                </HStack>
                <HStack justify="space-between" pb="30px">
                  <Text>Total</Text>
                  <Text fontWeight="bold">{toPrice(price)}</Text>
                </HStack>

                <Button type="submit" w="full">
                  Finalizar Inscrição
                </Button>
              </Box>
            </HStack>
          </Stack>
        </form>
      </FormProvider>
    </Box>
  )
}

export default Cadastro
