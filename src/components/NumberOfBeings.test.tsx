import { render, screen, fireEvent } from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings';

test('renders input element', () => {
	const { container } = render(<NumberOfBeings numberOfBeings={0} onChangeNumberOfBeings={() => {return;}}/>);

    const numberOfBeingsLabel = screen.getByLabelText(/Number of Beings:/i,{selector: 'input'});
    expect(numberOfBeingsLabel).toBeInTheDocument();   
});

test('input element has value from props', () => {
	const { container } = render(<NumberOfBeings numberOfBeings={1} onChangeNumberOfBeings={() => {return;}}/>);

    const numberOfBeingsElement = screen.getByLabelText(/Number of Beings:/i,{selector: 'input'});
    expect(numberOfBeingsElement).toHaveValue('1');
});
test('onChange function is called with correct parameters if value changes', () => {
	const mockChange = jest.fn();    
    const { container } = render(<NumberOfBeings numberOfBeings={1} onChangeNumberOfBeings={mockChange}/>);

    const numberOfBeingsElement = screen.getByLabelText(/Number of Beings:/i,{selector: 'input'});
    fireEvent.change(numberOfBeingsElement, {target: {value: '2'}});
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
            id: 'numberOfBeingsInput'
        })
    }));    
});