import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';

import { AUTHOR } from './Constants/UserConstants';
import { nanoid } from 'nanoid';
import { MessagesList } from './MessagesList';
import { Input } from './Input';
import { Button } from './Button';

export type MessageType = {
  id: string;
  user: string;
  message: string;
};

export const Form: FC = () => {
  const [value, setValue] = useState<string>('');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const name = 'click';
  const [visible, setVisible] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        id: nanoid(),
        user: AUTHOR.user,
        message: value,
      },
    ]);
    console.log(value);

    setValue('');
  };
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].user !== AUTHOR.bot) {
      const botTimeOut = setTimeout(() => {
        setMessages([
          ...messages,
          {
            id: nanoid(),
            user: AUTHOR.bot,
            message: 'I`m BOT',
          },
        ]);
      }, 500);
      return () => {
        clearTimeout(botTimeOut);
      };
    }
  }, [messages]);

  return (
    <>
      <form onSubmit={handleClick}>
        {visible && <MessagesList messages={messages} />}

        <Input change={handleChange} value={value} />

        <Button disabled={!value} name={name} />
      </form>
      <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
    </>
  );
};
