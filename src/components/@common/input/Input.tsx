import { HTMLAttributes } from 'react';
import { inputSize, inputStyle, inputVariant } from './Input.style';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  variant: 'default';
  size: 'large';
  value?: string;
  placeholder?: string;
}

const Input = ({ variant = 'default', size = 'large', value, placeholder, ...props }: InputProps) => {
  return (
    <input
      css={[inputStyle, inputVariant[variant], inputSize[size]]}
      value={value}
      placeholder={placeholder}
      type="text"
      {...props}
    />
  );
};

export default Input;
