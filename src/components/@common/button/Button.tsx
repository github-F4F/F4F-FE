import { ReactElement } from 'react';
import { btnSize, btnStyle, btnVariant } from './Button.style';

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'bgWhite' | 'bgBlack';
  size?: 'small' | 'large';
  handleBtnClick: () => void;
  icon?: ReactElement;
}

const Button = ({ children, variant = 'bgBlack', size = 'large', handleBtnClick, icon }: ButtonProps) => {
  return (
    <button css={[btnStyle, btnVariant[variant], btnSize[size]]} onClick={handleBtnClick}>
      {children}
      {icon}
    </button>
  );
};

export default Button;
