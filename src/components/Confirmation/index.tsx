import Heading from '../Heading/styles';
import Container from './styles';

const Confirmation = () => {
  return (
    <Container>
      <img src="check.svg" alt="Finalizado" />
      <Heading level={1} fontSize="xlarge36">
        Finalizado
      </Heading>
    </Container>
  );
};

export default Confirmation;
