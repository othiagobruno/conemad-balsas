/* eslint-disable react/no-unescaped-entities */
import HeaderComponent from '@/components/Header'
import { Box, Center, Stack, Text } from '@chakra-ui/react'

import React from 'react'

const TermsPage: React.FC = () => {
  return (
    <Box>
      <HeaderComponent title="Termos de Uso e Privacidade" />

      <Center>
        <Box
          mt="50px"
          textAlign="center"
          p="50px"
          alignSelf="center"
          w={['full', '800px']}
          bg="rgb(0,0,0,0.05)"
          borderRadius="4px"
        >
          <Text fontSize="32px" fontWeight="600">
            Termos de Uso e Privacidade
          </Text>
          <Text pb="20px">Atualizado 15 de abr. de 2023</Text>

          <Box py="30px">
            <Text>
              Os seguintes termos de uso ("Termos") regem o uso do aplicativo
              Despezzas ("Aplicativo") oferecido pela empresa Despezzas Ltda
              ("Empresa"). Ao utilizar o Aplicativo, você concorda em cumprir e
              estar vinculado por estes Termos.
            </Text>
          </Box>

          <Box pt="40px">
            <Stack
              py="20px"
              textAlign="start"
              as="ul"
              listStylePos="inside"
              spacing="20px"
            >
              <Text as="li">
                Uso do Aplicativo: O Aplicativo é destinado ao uso pessoal e não
                comercial. Você concorda em utilizar o Aplicativo de acordo com
                as leis e regulamentações aplicáveis e em conformidade com estes
                Termos. A Empresa se reserva o direito de suspender ou encerrar
                seu acesso ao Aplicativo a qualquer momento, por qualquer
                motivo, sem aviso prévio.
              </Text>

              <Text as="li">
                Privacidade: A Empresa valoriza a privacidade dos usuários e
                segue uma política de privacidade estrita. Ao utilizar o
                Aplicativo, você concorda com a coleta, uso e divulgação de suas
                informações pessoais de acordo com a Política de Privacidade da
                Empresa.
              </Text>

              <Text as="li">
                Responsabilidade do Usuário: Você é o único responsável por
                qualquer conteúdo que envie ou compartilhe através do
                Aplicativo. Você concorda em não usar o Aplicativo para enviar
                ou compartilhar conteúdo ilegal, ofensivo, difamatório, obsceno,
                fraudulento, ou de outra forma inapropriado. A Empresa não é
                responsável por qualquer conteúdo gerado pelo usuário.
              </Text>

              <Text as="li">
                Propriedade Intelectual: Todo o conteúdo do Aplicativo,
                incluindo, mas não se limitando a, textos, imagens, logotipos,
                marcas registradas, gráficos, sons e vídeos são de propriedade
                exclusiva da Empresa ou de seus licenciadores. Você concorda em
                não reproduzir, distribuir, modificar, copiar, transmitir,
                exibir, vender ou explorar qualquer conteúdo do Aplicativo sem a
                autorização prévia por escrito da Empresa.
              </Text>

              <Text as="li">
                Limitação de Responsabilidade: O Aplicativo é fornecido "como
                está", sem garantias de qualquer tipo, expressas ou implícitas.
                A Empresa não garante a precisão, confiabilidade, integridade,
                adequação ou disponibilidade do Aplicativo. Em nenhuma
                circunstância a Empresa será responsável por quaisquer danos
                diretos, indiretos, consequenciais, especiais, punitivos ou
                incidentais decorrentes do uso ou incapacidade de uso do
                Aplicativo.
              </Text>

              <Text as="li">
                Alterações nos Termos: A Empresa reserva-se o direito de alterar
                estes Termos a qualquer momento, mediante aviso prévio. É
                responsabilidade do usuário revisar periodicamente os Termos
                para estar ciente de quaisquer alterações. O uso contínuo do
                Aplicativo após a publicação das alterações constitui aceitação
                dos Termos atualizados.
              </Text>

              <Text as="li">
                Lei Aplicável e Jurisdição: Estes Termos são regidos pelas leis
                do Brasil. Qualquer disputa relacionada a estes Termos ou ao
                Aplicativo será resolvida exclusivamente pelos tribunais
                competentes da jurisdição da empresa.
              </Text>

              <Text as="li">
                Disposições Gerais: Estes Termos constituem o acordo integral
                entre o usuário e a Empresa em relação ao Aplicativo e
                substituem todos os acordos anteriores ou contemporâneos,
                escritos ou verbais, em relação ao assunto aqui tratado. A falha
                da Empresa em exercer ou aplicar qualquer direito ou disposição
                destes Termos não constitui uma renúncia a tal direito ou
                disposição. Se qualquer disposição destes Termos for considerada
                inválida ou inexequível por um tribunal competente, as demais
                disposições permanecerão em pleno vigor e efeito.
              </Text>

              <Text as="li">
                Contato: Se você tiver alguma dúvida, comentário ou preocupação
                sobre estes Termos ou o Aplicativo Despezzas, entre em contato
                conosco através dos canais de contato disponibilizados no
                Aplicativo.
              </Text>
            </Stack>

            <Text fontSize="12px" py="40px">
              Ao utilizar o Aplicativo Despezzas, você concorda em cumprir estes
              Termos de Uso. É importante ler e compreender integralmente os
              Termos antes de utilizar o Aplicativo. A Empresa reserva-se o
              direito de modificar ou atualizar estes Termos a qualquer momento.
              Portanto, é recomendável revisar periodicamente os Termos para se
              manter atualizado em relação às políticas e regras aplicáveis ao
              uso do Aplicativo.
            </Text>
          </Box>
        </Box>
      </Center>
    </Box>
  )
}

export default TermsPage
