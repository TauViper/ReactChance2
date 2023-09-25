import { FC } from 'react';
import { MessageType } from './Form';
import { AUTHOR } from './Constants/UserConstants';

type MessagesListProps = {
  messages: MessageType[];
};

export const MessagesList: FC<MessagesListProps> = ({ messages }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: '0' }}>
      {messages &&
        messages.map((item) =>
          item.user !== AUTHOR.bot ? (
            <li style={{ textAlign: 'end' }} key={item.id}>{`${item.user} : ${item.message}`}</li>
          ) : (
            <li style={{ textAlign: 'initial' }} key={item.id}>{`${item.user} : ${item.message}`}</li>
          ),
        )}
    </ul>
  );
};
