import {
  Icon,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Input as ChakraInput,
  InputProps as IProps,
  Spinner,
  Box,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import InputMask from 'react-input-mask'
import _ from 'lodash'

interface InputProps extends Omit<IProps, 'onChange'> {
  name: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  type?: string
  isLoading?: boolean
  mask?: string
  label?: string
  buttonRight?: React.ReactNode
  positionBox?:
    | '-webkit-sticky'
    | 'absolute'
    | 'fixed'
    | 'relative'
    | 'static'
    | 'sticky'
  onChange?: (e?: number | string) => void
}

const InputComponent: React.FC<InputProps> = ({
  name,
  leftIcon,
  rightIcon,
  type = 'text',
  isLoading,
  mask,
  onChange,
  label,
  positionBox,
  buttonRight,
  ...rest
}) => {
  const [show, setShow] = useState(false)
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext()

  const error = _.get(errors, name)

  return (
    <Box w={rest?.w} flex={rest?.flex} position={positionBox}>
      {label && (
        <Text fontSize="12px" pb="5px" fontWeight="600">
          {label}
        </Text>
      )}
      <InputGroup>
        {leftIcon && (
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            {leftIcon}
          </InputLeftElement>
        )}

        {rightIcon && (
          <InputRightElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            {rightIcon}
          </InputRightElement>
        )}

        <ChakraInput
          as={!mask ? undefined : InputMask}
          id={`${name + Math.round(Math.random() * 1000)}`}
          w="full"
          maskPlaceholder={null}
          mask={mask ?? ''}
          isInvalid={!!error}
          errorBorderColor="red.400"
          placeholder={rest.placeholder ?? label}
          helperText="Esse campo é obrigatório"
          {...register(name)}
          {...rest}
          type={!show ? type ?? 'text' : 'text'}
          onChange={(e) => {
            let value: string | number = e.target.value
            if (type === 'number') {
              value = Number(e.target.value)
            }
            onChange?.(value)
            setValue(name, value)
          }}
          value={watch(name) ?? ''}
        />

        {isLoading && (
          <InputRightElement width="4.5rem" height="74%">
            <Spinner color="primary.500" />
          </InputRightElement>
        )}

        {type === 'password' && (
          <InputRightElement width="4rem" height="full" mr="-12px">
            <Icon
              onClick={() => setShow((m) => !m)}
              fontSize="25px"
              cursor="pointer"
              color="green.strong"
            >
              {show ? <BsEye /> : <BsEyeSlash />}
            </Icon>
          </InputRightElement>
        )}
        <>{buttonRight && buttonRight}</>
      </InputGroup>

      {error && (
        <Text
          textAlign="start"
          marginTop="4px !important"
          lineHeight="12px"
          fontSize="11px"
          color="red.400"
          textStyle="body.small"
        >
          {String(error?.message)}
        </Text>
      )}
    </Box>
  )
}

export default InputComponent
