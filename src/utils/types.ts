interface Language {
  color: string;
  id: string;
  name: string;
}

export interface Repository {
  name: string;
  id: string;
  description: string | null;
  stargazerCount: number;
  createdAt: string;
  forkCount: number;
  homepageUrl: string | null;
  visibility: string;
  url: string;
  repositoryTopics: {
    nodes: {
      topic: {
        id: string;
        name: string;
      };
    }[];
  };
  primaryLanguage: {
    id: string;
    color: string;
    name: string;
  };
  languages: {
    totalCount: number;
    nodes: Language[];
  };
  defaultBranchRef: {
    name: string;
    target: {
      id: string;
      history: {
        totalCount: number;
      };
    };
  };
}
