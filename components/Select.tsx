import React, { useEffect } from 'react'
import styled from 'styled-components';

interface SettingsOption {
  value: any;
  label: string;
  disabled?: boolean;
}

interface Props {
  hidden?: boolean;
  value: any;
  onChange: (value: any) => void;
  title: string;
  options: SettingsOption[];
}

const StyledSelect = styled.select`
  min-width: 200px;
  width: 100%;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid black;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bg};
`

export default function Select(props: Props) {
  const {
    title,
    hidden,
    onChange,
    options,
    value,
  } = props
  useEffect(() => {
    if (hidden) {
      return
    }
    if (!value && options.length) {
      console.log(`Changing default val on mount to`, options[0])
      onChange(String(options[0].value))
    }
  }, [hidden])
  if (hidden) {
    return null
  }
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div>{title}</div>
      <StyledSelect
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {
          options.map(o => (
            <option disabled={o.disabled} key={`${o.value}_${o.label}_${title}`} value={o.value}>{o.label}</option>
          ))
        }
      </StyledSelect>
    </div>
  )
}
