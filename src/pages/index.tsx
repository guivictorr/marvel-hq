import { ChangeEvent, Fragment, KeyboardEvent, useState } from 'react';

import useComics from '../hooks/useComics';

import Card from '../components/Card';
import Error from '../components/Error/styles';
import Grid from '../components/Grid/styles';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper/styles';
import Input from '../components/Input';
import Button from '../components/Button';
import Details from '../components/Details';

import * as H from '../styles/pages/home';
import { useModal } from '../context/modalContext';
import { useSelectedComics } from '../context/selectedComicsContext';

const Home = () => {
  const { comics, loadMore, fetchComics, error } = useComics();
  const { isEmpty } = useSelectedComics();
  const { modalIsOpen } = useModal();
  const [inputText, setInputText] = useState('');

  const getInputText = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const searchOnKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') getDataByInput(inputText);
  };

  const getDataByInput = async (name: string) => {
    await fetchComics(name);
    setInputText('');
  };

  return (
    <H.Container>
      <Header btnRoute="/checkout" btnText="Eviar-me" btnVisible={!isEmpty} />
      <Wrapper maxWidth={160}>
        <H.Content>
          <Input
            btnAction={getDataByInput}
            onChange={getInputText}
            value={inputText}
            onKeyPress={searchOnKeyPress}
          />

          <Error visible={Boolean(error)}>{error}</Error>

          <Grid columns={6}>
            {comics.results ? (
              comics.results.map(comic => <Card key={comic.id} comic={comic} />)
            ) : (
              <Fragment />
            )}
          </Grid>

          <Wrapper maxWidth={50}>
            <Button
              title="Carregar mais"
              visible={comics.count >= 1 && comics.count < 90}
              onClick={loadMore}
            />
          </Wrapper>
        </H.Content>
      </Wrapper>
      <Details visible={modalIsOpen} />
    </H.Container>
  );
};

export default Home;
