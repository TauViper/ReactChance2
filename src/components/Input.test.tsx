import '@testing-library/jest-dom';
import { Input } from './Input';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Input', () => {
  it('Input must be Functional Component', () => {
    expect(Input).toBeInstanceOf(Function);
  });
  it('Input nave Onchange function', async () => {
    const Onchange = jest.fn();
    render(<Input value={''} change={Onchange} />);
    await screen.findByRole('textbox');
    expect(screen.queryByRole('textbox')).toBeEmptyDOMElement();
    await userEvent.type(screen.getByRole('textbox'), 'some words');
    screen.debug();
    expect(Onchange).toBeCalled();
  });
  it('Input have value', () => {
    render(<Input value={'123'} change={jest.fn} />);
    expect(screen.getByRole('textbox')).toHaveValue('123');
    screen.debug();
  });
  it('Input have focus', () => {
    render(<Input value={''} change={jest.fn} />);
    expect(screen.getByRole('textbox')).toHaveFocus();
    screen.debug();
  });
});
