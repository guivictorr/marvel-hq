import { ChangeEvent, KeyboardEvent, ReactNode, useState } from 'react';

import * as L from './styles';
import Header from '../Header';
import Input from '../Input';
import Wrapper from '../Wrapper/styles';
import { useSelectedComics } from '../../context/selectedComicsContext';
import { useRouter } from 'next/dist/client/router';
import Error from '../Error/styles';
import Details from '../../components/Details';
import { useModal } from '../../context/modalContext';

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');
  const { modalIsOpen } = useModal();
  const { isEmpty } = useSelectedComics();
  const { push } = useRouter();

  const getInputText = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const searchOnKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return;
    }

    if (!inputText) {
      setError('Você precisa digitar o nome do herói em inglês');
      return;
    }

    searchHero(inputText);
  };

  const searchHero = async (name: string) => {
    if (!inputText) {
      setError('Você precisa digitar o nome do herói em inglês');
      return;
    }

    push(`/heroes/${name}`);
    setInputText('');
    setError('');
  };

  return (
    <L.Container>
      <Header btnRoute="/checkout" btnText="Enviar-me" btnVisible={!isEmpty} />
      <Wrapper maxWidth={160}>
        <L.Content>
          <Input
            btnAction={searchHero}
            onChange={getInputText}
            value={inputText}
            onKeyPress={searchOnKeyPress}
            autoFocus
          />
          <Error visible={Boolean(error)}>{error}</Error>
          {children}
        </L.Content>
      </Wrapper>
      <Details visible={modalIsOpen} />
    </L.Container>
  );
};

export default Layout;
