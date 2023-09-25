import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from './Button';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('Button must be Functional Component', () => {
    expect(Button).toBeInstanceOf(Function);
  });
  it('Button have text', () => {
    render(<Button name={'click'} disabled />);
    expect(screen.getByText(/click/)).toBeInTheDocument();
  });
  it('Button disabled', () => {
    render(<Button name={'click'} disabled />);
    expect(screen.getByText('click')).toBeDisabled();
  });
  it('Button is active', () => {
    render(<Button name={'click'} disabled={false} />);
    expect(screen.getByRole('button')).not.toBeDisabled();
  });
  it('If Button not disabled the onClick function is active', () => {
    const ButtonOnClick = jest.fn();
    render(<Button name={'click'} disabled={false} click={ButtonOnClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(ButtonOnClick).toBeCalled();
  });
  it('If Button disabled the onClick function no active', () => {
    const ButtonOnClick = jest.fn();
    render(<Button name={'click'} disabled={true} click={ButtonOnClick} />);
    userEvent.click(screen.getByRole('button'));
    expect(ButtonOnClick).not.toBeCalled();
  });
  it('Button clickable', () => {
    const ButtonOnClick = jest.fn();
    render(<Button name={'click'} disabled={false} click={ButtonOnClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(ButtonOnClick).toBeCalledTimes(1);
  });
  it('Button no clickable', () => {
    const ButtonOnClick = jest.fn();
    render(<Button name={'click'} disabled={true} click={ButtonOnClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(ButtonOnClick).not.toHaveBeenCalledTimes(1);
  });
});
