import { Input as ChakraInput, Field } from '@chakra-ui/react'
import type { ComponentPropsWithRef, ElementType } from 'react'
import { createElement, forwardRef } from 'react'

type InputProps<T extends ElementType> = {
  label: string
  error?: string
  as?: T
} & ComponentPropsWithRef<T>

const InputBase = <T extends ElementType>(
  { label, error, as, ...props }: InputProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) => {
  const Component = as || ChakraInput

  return (
    <Field.Root invalid={!!error}>
      <Field.Label>{label}</Field.Label>
      {createElement(Component, { ref, ...props })}
      {error && <Field.ErrorText>{error}</Field.ErrorText>}
    </Field.Root>
  )
}

type PolymorphicComponent = <T extends ElementType>(
  props: InputProps<T> & { ref?: ComponentPropsWithRef<T>['ref'] }
) => React.ReactElement | null

export const Input = forwardRef(InputBase) as PolymorphicComponent & { displayName: string }

Input.displayName = 'Input'
