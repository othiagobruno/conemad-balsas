import InputComponent from '@/components/Forms/Input'
import SelectComponent from '@/components/Forms/Select'
import HeaderComponent from '@/components/Header'
import { useCep } from '@/hooks/useCep'
import { ICreateSub, useSubscription } from '@/hooks/useSubscription'
import { toPrice } from '@/utils/price'
import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  cargo_atual: yup.string().required('Campo obrigatório'),
  nome: yup.string().required('Campo obrigatório'),
  cpf: yup.string().required('Campo obrigatório'),
  telefone: yup.string().required('Campo obrigatório'),
  cep: yup.string().required('Campo obrigatório'),
  endereco: yup.string().required('Campo obrigatório'),
  campo: yup.string().required('Campo obrigatório'),
  regional: yup.string().required('Campo obrigatório'),
  pastor: yup.string().required('Campo obrigatório'),
})

const Cadastro: React.FC = () => {
  const formMethods = useForm<ICreateSub>({
    resolver: yupResolver(schema) as any,
    defaultValues: {
      cargo_atual: 'membro',
      nome: '',
      cpf: '',
      telefone: '',
      cep: '',
      endereco: '',
    },
  })

  const cargo_atual = formMethods.watch('cargo_atual') || 'não'

  const { createSub, loading } = useSubscription()

  const price =
    {
      evangelista: 260,
      pastor: 260,
      missionario: 260,
      membro: 130,
    }[cargo_atual ?? 'membro'] ?? 130

  const { getByCep } = useCep()

  const handleSubmit = async (data: ICreateSub) => {
    const cep = data.cep.replace(/\D/g, '')
    const { city, state } = await getByCep(cep)

    await createSub({
      ...data,
      cidade: city,
      estado: state,
      valor: price,
    })
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
              <Box bg="red.600" p="20px" borderRadius="5px" mb="20px">
                <Text fontSize="14px" color="white" fontWeight="bold">
                  ⚠️ Ao iniciar a sua inscrição, esteja ciente que o seu CPF só
                  poderá ser cadastrado apenas uma vez, revise seus dados com
                  atenção e não avance se não for finalizar a inscrição.
                </Text>
              </Box>

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
                      name: 'Pastor(a)',
                      value: 'pastor',
                    },
                    {
                      name: 'Evangelista',
                      value: 'evangelista',
                    },
                    {
                      name: 'Missionário(a)',
                      value: 'missionario',
                    },
                    {
                      name: 'Presbítero(a)',
                      value: 'presbitero',
                    },
                    {
                      name: 'Diácono / Diaconiza',
                      value: 'diacono',
                    },
                    {
                      name: 'Auxiliar',
                      value: 'auxiliar',
                    },
                    {
                      name: 'Obreiro(a)',
                      value: 'obreiro',
                    },
                    {
                      name: 'Membro(a)',
                      value: 'membro',
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
                    label="Qual o Campo?"
                    flex={1}
                  />

                  <InputComponent
                    name="regional"
                    placeholder="Regional"
                    label="Qual a Regional?"
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
                  <Text>Total</Text>
                  <Text fontWeight="bold">{toPrice(price)}</Text>
                </HStack>

                <Button isLoading={loading} type="submit" w="full">
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
