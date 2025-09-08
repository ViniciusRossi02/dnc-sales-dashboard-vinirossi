import { StyledButton, StyledInput } from '@/components'
import type { FormComponentProps } from '@/types'
import { pxToRem } from '@/utils'
import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(16)};
`

function FormComponent(props: FormComponentProps) {
  const { inputs, buttons, message } = props
  return (
    <StyledForm>
      {inputs.map((inputProps, index) => (
        <StyledInput key={index} {...inputProps} />
      ))}
      {buttons.map((buttonProps, index) => {
        const { children, ...rest } = buttonProps
        return (
          <StyledButton  key={index} {...rest}>
            {children}
          </StyledButton >
        )
      })}
      {message && (
        <div style={{ color: message.type === 'error' ? 'red' : 'green' }}>
          {message.msg}
        </div>
      )}
    </StyledForm>
  )
}

export default FormComponent
