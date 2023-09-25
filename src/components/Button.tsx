import { FC } from 'react';

type Props = {
  name: string;
  click?: () => void;
  disabled: boolean;
};

export const Button: FC<Props> = ({ name, click, disabled }) => {
  return (
    <button disabled={disabled} onClick={click}>
      {name}
    </button>
  );
};
