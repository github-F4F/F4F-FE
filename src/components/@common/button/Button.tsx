import { btnSize, btnStyle, btnVariant } from './Button.style';

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
   variant?: 'bgWhite' | 'bgBlack';
   size?: 'small' | 'large';
   handleBtnClick: () => void;
}

const Button = ({ children, variant = 'bgBlack', size = 'large', handleBtnClick }: ButtonProps) => {
   return (
      <button css={[btnStyle, btnVariant[variant], btnSize[size]]} onClick={handleBtnClick}>
         {children}
      </button>
   );
};

export default Button;
