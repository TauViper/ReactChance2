import '@testing-library/jest-dom';
import { MessagesList } from './MessagesList';
import { render, screen } from '@testing-library/react';

describe('Form', () => {
  it('MessagesList is a function', () => {
    expect(MessagesList).toBeInstanceOf(Function);
  });
  it('Ul present in DOM', () => {
    render(<MessagesList messages={[]} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    screen.debug();
  });
  it('Li with message present in DOM', () => {
    render(<MessagesList messages={[{ id: '123', user: 'USER', message: 'I work' }]} />);
    expect(screen.getByText(/user/i)).toBeInTheDocument();
    screen.debug();
  });
});
