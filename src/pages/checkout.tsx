import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import Button from '../components/Button';
import Confirmation from '../components/Confirmation';
import Header from '../components/Header';
import Heading from '../components/Heading/styles';
import List from '../components/List';
import Map from '../components/Map';

import { useSelectedComics } from '../context/selectedComicsContext';

import * as C from '../styles/pages/checkout';

const Checkout = () => {
  const { push } = useRouter();
  const { selectedComics, isEmpty, clearSelected } = useSelectedComics();
  const [finished, setFinished] = useState(false);

  const finishCheckout = () => {
    setFinished(true);
    setTimeout(() => {
      push('/');
      clearSelected();
    }, 2000);
  };

  return (
    <C.Container>
      <Header btnVisible={true} btnText="Voltar" btnRoute="/" />
      <C.Content>
        <Heading level={1} fontSize="xlarge36">
          Informe o lugar no mapa e iremos entregar!
        </Heading>
        <Map />
        <List data={selectedComics} limit={6} />
        <Button title="Finalizar" disabled={isEmpty} onClick={finishCheckout} />
      </C.Content>
      {finished && <Confirmation />}
    </C.Container>
  );
};

export default Checkout;
