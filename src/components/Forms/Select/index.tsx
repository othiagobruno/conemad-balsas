import {
  Box,
  InputGroup,
  InputRightElement,
  Select,
  SelectProps,
  Text,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import _ from 'lodash'

interface Values {
  name: string
  value: any
}

interface Props extends Omit<SelectProps, 'onChange'> {
  name: string
  options: Values[]
  withSearch?: boolean
  disabled?: boolean
  label?: string
  hasLabel?: boolean
  onChange?(props: any): void
  variant?: 'outline' | 'filled' | 'flushed' | 'unstyled'
  rightIcon?: React.ReactNode
  defaultValueByProps?: string
  applyDefault?: boolean
}

const SelectComponent: React.FC<Props> = ({
  name,
  label,
  options,
  variant,
  rightIcon,
  defaultValueByProps,
  ...rest
}) => {
  const {
    formState: { errors },
    watch,
    register,
  } = useFormContext()

  const error = _.get(errors, name) as any

  const [value, setValueField] = useState<string | number>(
    defaultValueByProps || ''
  )

  useEffect(() => {
    if (options.length > 0) {
      const valor = options
        .map((a) => ({
          label: a.name,
          value: a.value,
        }))
        .find((a) => a.value === watch(name)) as any as Values
      if (!defaultValueByProps) {
        setValueField('')
      } else {
        setValueField(valor?.value)
      }
    }
  }, [options, defaultValueByProps])

  return (
    <Box>
      {label && (
        <Text fontSize="12px" pb="5px" fontWeight="600">
          {label}
        </Text>
      )}

      <InputGroup>
        <Select
          errorBorderColor="red.400"
          isInvalid={!!error}
          defaultValue={value}
          variant={variant}
          {...register(name)}
          {...rest}
        >
          {options.map((option) => (
            <Box as="option" key={option.value} value={option.value}>
              {option.name}
            </Box>
          ))}
        </Select>

        {rightIcon && (
          <InputRightElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            {rightIcon}
          </InputRightElement>
        )}
      </InputGroup>

      {error && (
        <Text
          pl="10px"
          textAlign="start"
          marginTop="4px !important"
          lineHeight="12px"
          fontSize="10px"
          color={'red.400'}
          textStyle="body.small"
        >
          {error?.message}
        </Text>
      )}
    </Box>
  )
}

export default SelectComponent
