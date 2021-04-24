import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type SelectedComicsProviderProps = {
  children: ReactNode;
};

type SelectedComicsContextProps = {
  addComic(isChecked: boolean, comic: ComicProps): void;
  clearSelected(): void;
  selectedComics: ComicProps[];
  isEmpty: boolean;
};

const SelectedComicsContext = createContext({} as SelectedComicsContextProps);

const SelectedComicsProvider = ({ children }: SelectedComicsProviderProps) => {
  const [selectedComics, setSelectedComics] = useState<ComicProps[]>([]);

  const addComic = (isChecked: boolean, comic: ComicProps) => {
    if (!isChecked) {
      const selectedIndex = selectedComics.findIndex(
        selectedComic => selectedComic.id === comic.id,
      );
      selectedComics.splice(selectedIndex, 1);
      setSelectedComics([...selectedComics]);
    } else {
      setSelectedComics([...selectedComics, comic]);
    }
  };

  const isEmpty = useMemo(() => {
    return selectedComics.length === 0;
  }, [selectedComics]);

  const clearSelected = () => {
    setSelectedComics([]);
  };

  return (
    <SelectedComicsContext.Provider
      value={{ isEmpty, addComic, selectedComics, clearSelected }}
    >
      {children}
    </SelectedComicsContext.Provider>
  );
};

export const useSelectedComics = () => useContext(SelectedComicsContext);

export default SelectedComicsProvider;
