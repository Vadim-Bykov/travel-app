import { RouteComponentProps } from 'react-router';
import { CountriesType } from '../../store/mainPage/types';

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

export type GetAppropriatedCardsType = (
  e: React.ChangeEvent<HTMLInputElement>,
  curLang: string
) => Array<CountriesType>;
