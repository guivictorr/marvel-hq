import Container from './styles';

type ListProps = {
  data: ComicProps[];
  limit: number;
};

const List = ({ data, limit }: ListProps) => {
  return (
    <Container>
      {data.slice(0, limit).map(({ thumbnail, id, title }) => (
        <li key={id}>
          <img
            src={`${thumbnail.path}/portrait_medium.${thumbnail.extension}`}
            alt={title}
          />
        </li>
      ))}
      <span>{data.length > limit && `+${data.length - limit}`}</span>
    </Container>
  );
};

export default List;
