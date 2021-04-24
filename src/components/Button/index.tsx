import { ButtonHTMLAttributes, Fragment } from 'react';

import Container from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  outlined?: boolean;
  visible?: boolean;
};

const Button = ({ title, outlined, visible = true, ...rest }: ButtonProps) => {
  return (
    <Fragment>
      {visible && (
        <Container outlined={outlined} {...rest}>
          {title}
        </Container>
      )}
    </Fragment>
  );
};

export default Button;
