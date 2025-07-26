export interface Movie {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  VideoUrl?: string;
  Description: string;
}

export interface AppState {
  featuredData: Movie;
  trendingNowData: Movie[];
  playVideo: boolean;
  isHovered: boolean;
}
