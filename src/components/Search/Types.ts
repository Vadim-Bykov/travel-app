import { RouteComponentProps } from 'react-router';

type SearchOwnPropsType = {
  curLang: string;
};

type MatchParams = {
  id: string;
};

export type UrlProps = RouteComponentProps<MatchParams>;

export type SearchPropsType = SearchOwnPropsType & UrlProps;

export type SearchInputType = (
  event: React.ChangeEvent<HTMLInputElement>
) => void;
