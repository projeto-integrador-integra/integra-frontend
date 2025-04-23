import { Box, CloseButton, Dialog, Heading, Steps } from '@chakra-ui/react'
import { ReactNode, useState } from 'react'

import { CompletedContent } from './step/CompletedStep'

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
    <Dialog.Content>
      <Dialog.Body>
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap="8" pt="8">
          <Steps.Root
            count={steps.length}
            size="sm"
            step={stepIndex}
            onStepChange={(e) => setStepIndex(e.step)}
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
                <Heading as="h2" mb={4}>
                  {title}
                </Heading>
                {step.component({ nextStep })}
              </Steps.Content>
            ))}

            <Steps.CompletedContent>
              <CompletedContent />
            </Steps.CompletedContent>
          </Steps.Root>
          {img}
        </Box>
      </Dialog.Body>

      <Dialog.CloseTrigger asChild>
        <CloseButton size="sm" variant="ghost" />
      </Dialog.CloseTrigger>
    </Dialog.Content>
  )
}
