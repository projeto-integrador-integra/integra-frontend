import { Box, CloseButton, Dialog, Heading, Steps } from '@chakra-ui/react'
import { ReactNode, useState } from 'react'

import { CompletedContent } from './step/CompletedStep'
import jigsaw from '@/assets/jigsaw.png'

export type StepComponentProps = {
  nextStep: () => void
}

interface SignUpStep {
  title: string
  component: (props: StepComponentProps) => ReactNode
}

interface SignUpContainerProps {
  title: string
  img: ReactNode
  steps: SignUpStep[]
}

export const SignUpContainer = ({ title, img, steps }: SignUpContainerProps) => {
  const [stepIndex, setStepIndex] = useState(0)

  const nextStep = () => setStepIndex((prev) => prev + 1)

  return (
    <Dialog.Content bg="#F7FAFC">
      <Dialog.Body p="0" m="0">
        <Box display="grid" gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="8">
          <Steps.Root
            count={steps.length}
            size="sm"
            step={stepIndex}
            onStepChange={(e) => setStepIndex(e.step)}
            p={{ base: '8', lg: '12' }}
            maxW="md"
            mx="auto"
            colorPalette="blue"
          >
            <Steps.List>
              {steps.map((step, index) => (
                <Steps.Item key={index} index={index}>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Steps.Indicator />
                    <Steps.Title textAlign="center">{step.title}</Steps.Title>
                  </Box>
                  <Steps.Separator />
                </Steps.Item>
              ))}
            </Steps.List>

            {steps.map((step, index) => (
              <Steps.Content key={step.title} index={index}>
                <Heading as="h2" mb={2} mt="4" fontSize="2xl">
                  {title}
                </Heading>
                {step.component({ nextStep })}
              </Steps.Content>
            ))}

            <Steps.CompletedContent>
              <CompletedContent />
            </Steps.CompletedContent>
          </Steps.Root>
          <Box
            bg="white"
            p={{ base: '8', lg: '12' }}
            borderRightRadius="lg"
            bgRepeat="repeat"
            bgSize="center"
            bgImage={`url(${jigsaw})`}
            display="flex"
            alignItems="center"
            justifyContent="center"
            hideBelow="md"
          >
            {img}
          </Box>
        </Box>
      </Dialog.Body>

      <Dialog.CloseTrigger asChild>
        <CloseButton size="sm" variant="ghost" />
      </Dialog.CloseTrigger>
    </Dialog.Content>
  )
}
