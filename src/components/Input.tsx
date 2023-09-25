import { ChangeEvent, FC } from 'react';

type InputProps = {
  value: string;
  change: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = ({ value, change }) => {
  return <input autoFocus={true} value={value} onChange={change} />;
};
