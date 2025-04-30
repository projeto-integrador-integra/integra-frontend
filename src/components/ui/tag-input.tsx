import { Field, Input, Tag, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { useCallback, useState } from 'react'

interface TagInputProps {
  value?: string[]
  setValue: (value: string[]) => void
  placeholder?: string
  error?: string
  label?: string
}

export function TagInput({ value = [], setValue, placeholder, error, label }: TagInputProps) {
  const [inputValue, setInputValue] = useState('')

  const addTag = useCallback(
    (tag: string) => {
      const trimmed = tag.trim()
      if (trimmed && !value.includes(trimmed)) {
        setValue([...value, trimmed])
      }
    },
    [setValue, value]
  )

  const removeTag = useCallback(
    (tagToRemove: string) => {
      setValue(value.filter((tag) => tag !== tagToRemove))
    },
    [setValue, value]
  )

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.key === ',') && inputValue.trim()) {
      e.preventDefault()
      addTag(inputValue)
      setInputValue('')
    }

    if (e.key === 'Backspace' && !inputValue && value.length > 0) {
      e.preventDefault()
      removeTag(value[value.length - 1])
    }
  }

  return (
    <Field.Root invalid={!!error}>
      <Field.Label>{label}</Field.Label>
      <Input
        aria-label="Campo de tags"
        value={inputValue}
        placeholder={placeholder || 'Adicione uma tag e pressione Enter'}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
      <Wrap mt={2}>
        {value.map((tag) => (
          <WrapItem key={tag}>
            <Tag.Root borderRadius="full" colorPalette="blue" p="2" px="4">
              <Tag.Label>{tag}</Tag.Label>
              <Tag.EndElement>
                <Tag.CloseTrigger onClick={() => removeTag(tag)} />
              </Tag.EndElement>
            </Tag.Root>
          </WrapItem>
        ))}
      </Wrap>
      <Text>{error}</Text>
    </Field.Root>
  )
}
