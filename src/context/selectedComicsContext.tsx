import { createContext, ReactNode, useContext, useState } from 'react';

type SelectedComicsProviderProps = {
  children: ReactNode;
};

type SelectedComicsContextProps = {
  addComic(isChecked: boolean, comic: ComicProps): void;
  selectedComics: ComicProps[];
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
    } else {
      setSelectedComics([...selectedComics, comic]);
    }
  };

  return (
    <SelectedComicsContext.Provider value={{ addComic, selectedComics }}>
      {children}
    </SelectedComicsContext.Provider>
  );
};

export const useSelectedComics = () => useContext(SelectedComicsContext);

export default SelectedComicsProvider;
