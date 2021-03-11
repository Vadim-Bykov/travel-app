import { UserDataType } from '../../store/auth/types';

export type OwnInputProps = {
  label: string;
  type: string;
};

export type ValidatorsType = (value: string) => undefined | string;

export type FormKeysType = Extract<keyof UserDataType, string>;
