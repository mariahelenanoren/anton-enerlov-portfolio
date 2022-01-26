export interface ISeo {
  _site: {
    globalSeo: {
      fallbackSeo: {
        title: string;
        description: string;
        image: {
          url: string;
          width: number;
          height: number;
        };
        twittercard: string;
      };
    };
  };
}
