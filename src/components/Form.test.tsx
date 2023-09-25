import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from './Form';

describe('Form', () => {
  it('Form is a function', () => {
    expect(Form).toBeInstanceOf(Function);
  });
  it('The button is not active if the input is empty', () => {
    render(<Form />);
    expect(screen.getByRole('textbox')).toHaveValue('');
    screen.debug();
    expect(screen.getByText('click')).toBeDisabled();
  });
  it('The button is active if the input contains several words', () => {
    render(<Form />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'some words' } });
    expect(screen.getByRole('textbox')).toHaveValue('some words');
    screen.debug();
    expect(screen.getByText('click')).not.toBeDisabled();
  });
  it('Toggle Button is in the DOM', () => {
    render(<Form />);
    expect(screen.getByText(/Hide/i)).toBeInTheDocument();
  });
  it('Toggle Button change name to SHOW', () => {
    render(<Form />);
    fireEvent.click(screen.getByText('Hide'));
    // screen.debug();
    expect(screen.getByText(/Show/i)).toBeInTheDocument();
  });
  it('Toggle Button change name to HIDE when press again', () => {
    render(<Form />);
    fireEvent.click(screen.getByText(/Hide/i));
    // screen.debug();
    fireEvent.click(screen.getByText(/Show/i));
    // screen.debug();
    expect(screen.getByText(/Hide/i)).toBeInTheDocument();
  });
  it('MessageList render', async () => {
    render(<Form />);
    // expect(screen.queryByText('textbox')).toBeNull(); // The 1st variant
    expect(screen.queryByDisplayValue('')).toBeEmptyDOMElement(); //The last variant with the new toBeEmptyDOMElement (toBeEmpty - old)
    // screen.debug()
    fireEvent.input(screen.getByDisplayValue(''), { target: { value: 'some words' } });
    fireEvent.click(screen.getByText(/click/i));
    expect(await screen.findByText(/some words/i)).toBeInTheDocument();
    expect(await screen.findByText(/I`m BOT/i)).toBeInTheDocument();
    screen.debug();
  });
});
