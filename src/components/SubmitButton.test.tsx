import { render, screen, fireEvent } from '@testing-library/react';
import SubmitButton from './SubmitButton';

test('renders Submit button', () => {
	const { container } = render(<SubmitButton onClickSubmitButton={() => {return;}}/>);

    const submitButton = screen.getByText(/Submit/i,{selector: 'button'});
    expect(submitButton).toBeInTheDocument();   
});

test('onClick function is called with correct parameters if button clicked', () => {
	const mockClick = jest.fn();    
    const { container } = render(<SubmitButton onClickSubmitButton={mockClick}/>);

    const submitButton = screen.getByText(/Submit/i,{selector: 'button'});
    fireEvent.click(submitButton);
    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(mockClick).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
            id: 'submitButton'
        })
    }));    
});