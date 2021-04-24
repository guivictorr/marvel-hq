import { useState } from 'react';
import fetchJson from '../utils/fetchJson';

const useComics = () => {
  const [comics, setComics] = useState<ComicsDataProps>({} as ComicsDataProps);
  const [currentSearch, setCurrentSearch] = useState('');
  const [resultCount, setResultCount] = useState(18);
  const [error, setError] = useState('');

  const loadMore = async () => {
    if (comics.count >= 90) {
      return;
    }

    const moreResults = resultCount + 18;
    await fetchComics(currentSearch, moreResults);
    setResultCount(moreResults);
  };

  const fetchComics = async (name: string, limit = 18) => {
    const result = await fetchJson<DataProps>(
      `https://gateway.marvel.com:443/v1/public/comics?title=${name}&orderBy=title&limit=${limit}&${process.env.NEXT_PUBLIC_API_KEY}
          `,
    );

    if (name.length === 0) {
      setError('Você precisa digitar o nome do quadrinho');
      return;
    }

    if (result.data.count === 0) {
      setError('Não encontrei esse quadrinho');
      return;
    }

    setComics({ ...result.data });
    setCurrentSearch(name);
    setError('');
  };

  return {
    fetchComics,
    loadMore,
    comics,
    error,
  };
};

export default useComics;
