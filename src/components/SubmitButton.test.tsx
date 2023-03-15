import { render, screen } from '@testing-library/react';
import SubmitButton from './SubmitButton';

test('renders Submit button', () => {
	const { container } = render(<SubmitButton onClickSubmitButton={() => {return;}}/>);

    const submitButton = screen.getByText(/Submit/i,{selector: 'button'});
    expect(submitButton).toBeInTheDocument();   
});