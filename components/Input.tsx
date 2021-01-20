import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  min-width: 200px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 6px;
  border: none;
  border-radius: 4px;
  transition: 0.2s;
  border: 1px solid black;
  margin-bottom: 1rem;
`

interface Props {
  hidden?: boolean;
  value: any;
  onChange: (value: any) => void;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
}

export default function Input(props: Props) {
  const { onChange, value, type, disabled, hidden, placeholder } = props
  if (hidden) {
    return null
  }
  return (
    <StyledInput
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      value={String(value)}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
