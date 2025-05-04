import { Dialog, Portal } from '@chakra-ui/react'
import React from 'react'

import { SignUpContainer, StepComponentProps } from '@/components/signup/SignUpConteiner'
import { AboutStep } from './step/AboutStep'
import { AccessStep } from './step/AccessStep'
import { LightMode } from '../ui/color-mode'

interface SignDialogProps {
  button: React.ReactNode
  title: string
  role: 'dev' | 'company' | 'mentor'
  img: React.ReactNode
}

export const SignDialog = ({ button, title, img, role }: SignDialogProps) => {
  const steps = [
    {
      title: 'Acesso',
      component: ({ nextStep }: StepComponentProps) => <AccessStep nextStep={nextStep} />,
    },
    {
      title: 'Sobre você',
      component: ({ nextStep }: StepComponentProps) => (
        <AboutStep role={role} nextStep={nextStep} />
      ),
    },
  ]

  return (
    <Dialog.Root size="xl" placement="center">
      <Dialog.Trigger asChild>{button}</Dialog.Trigger>
      <Portal>
        <LightMode>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <SignUpContainer img={img} title={title} steps={steps} />
          </Dialog.Positioner>
        </LightMode>
      </Portal>
    </Dialog.Root>
  )
}
