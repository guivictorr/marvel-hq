import { InputHTMLAttributes } from 'react';
import Container from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  btnAction(any: unknown): unknown;
};

const Input = ({ btnAction, value, onChange, onKeyPress }: InputProps) => {
  return (
    <Container>
      <input
        type="text"
        placeholder="Procure por quadrinhos"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={btnAction}>
        <img src="/search.svg" alt="Procurar" />
      </button>
    </Container>
  );
};

export default Input;
