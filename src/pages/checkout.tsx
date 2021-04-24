import Button from '../components/Button';
import Header from '../components/Header';
import Heading from '../components/Heading/styles';
import List from '../components/List';
import { useSelectedComics } from '../context/selectedComicsContext';

import * as C from '../styles/pages/checkout';

const Checkout = () => {
  const { selectedComics, isEmpty } = useSelectedComics();

  return (
    <C.Container>
      <Header btnVisible={true} btnText="Voltar" btnRoute="/" />
      <C.Content>
        <Heading level={1} fontSize="xlarge36">
          Informe o lugar no mapa e iremos entregar!
        </Heading>
        <div>.</div>
        <List data={selectedComics} limit={6} />
        <Button title="Finalizar" disabled={isEmpty} />
      </C.Content>
    </C.Container>
  );
};

export default Checkout;
