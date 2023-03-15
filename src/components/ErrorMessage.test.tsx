import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

test('renders error message element if a message exists', () => {
	render(<ErrorMessage message='x' />);

    const errorMessageElement = screen.getByText(/ERROR/i);
    expect(errorMessageElement).toBeInTheDocument();   
});