import * as C from './styles';
import Button from '../Button';
import Heading from '../Heading/styles';
import { useModal } from '../../context/modalContext';
import { useSelectedComics } from '../../context/selectedComicsContext';
import { ChangeEvent, memo } from 'react';

type CardProps = {
  comic: ComicProps;
};

const Card = ({ comic }: CardProps) => {
  const { openModal } = useModal();
  const { addComic, selectedComics } = useSelectedComics();
  const imageURL = `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`;
  const getInputCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    addComic(event.target.checked, comic);
  };

  const isSelected = selectedComics.some(
    selectedComic => selectedComic.id === comic.id,
  );

  return (
    <C.Container>
      <C.Content>
        <input
          hidden
          onChange={getInputCheckbox}
          type="checkbox"
          defaultChecked={isSelected}
          name={String(comic.id)}
          id={String(comic.id)}
        />
        <label htmlFor={String(comic.id)}>
          <img src={imageURL} alt={comic.title} />
          <Heading level={1} fontWeight={600} fontSize="small14">
            {comic.title}
          </Heading>
          <Button title="Ver detalhes" onClick={() => openModal(comic)} />
        </label>
      </C.Content>
    </C.Container>
  );
};

export default memo(Card);
