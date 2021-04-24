type ComicItems = {
  items: [
    {
      name: string;
    },
  ];
};

type ComicProps = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    name: string;
  };
  creators: ComicItems;
  characters: ComicItems;
};

type ComicsDataProps = {
  count: number;
  results: ComicProps[];
};

type DataProps = {
  data: ComicsDataProps;
};
