import { Fragment } from 'react';
import { useModal } from '../../context/modalContext';
import Heading from '../Heading/styles';
import * as D from './styles';

type DetailsProps = {
  visible: boolean;
};

const Details = ({ visible }: DetailsProps) => {
  const { closeModal, payload } = useModal();

  return (
    <Fragment>
      {visible && (
        <D.Container>
          <D.Content>
            <button onClick={closeModal}>&times;</button>
            <Heading level={1} fontSize="xlarge36">
              {payload.title}
            </Heading>
            <Heading level={2} fontSize="large24">
              Série: {payload.series.name}
            </Heading>
            <img
              src={`${payload.thumbnail.path}/landscape_incredible.${payload.thumbnail.extension}`}
              alt="Foto"
            />
            <Heading level={2} fontSize="large24">
              Autores
            </Heading>
            <ul>
              {payload.creators.items.map(item => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
            <Heading level={2} fontSize="large24">
              Personagens
            </Heading>
            <ul>
              {payload.characters.items.map(item => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </D.Content>
        </D.Container>
      )}
    </Fragment>
  );
};

export default Details;
