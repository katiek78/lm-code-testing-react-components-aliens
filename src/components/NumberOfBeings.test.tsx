import { render, screen, fireEvent } from '@testing-library/react';
import NumberOfBeings, { NumberOfBeingsProps } from './NumberOfBeings';
import { validateNumberOfBeings } from '../validation/validation_W12MForm';

test('renders input element', () => {
	render(<NumberOfBeings numberOfBeings={0} onChangeNumberOfBeings={jest.fn()} validate={jest.fn()} />);

    const numberOfBeingsElement = screen.getByLabelText(/Number of Beings:/i,{selector: 'input'});
    expect(numberOfBeingsElement).toBeInTheDocument();   
});

test('input element has value from props', () => {
	render(<NumberOfBeings numberOfBeings={1} onChangeNumberOfBeings={jest.fn()} validate={jest.fn()}/>);

    const numberOfBeingsElement = screen.getByLabelText(/Number of Beings:/i,{selector: 'input'});
    expect(numberOfBeingsElement).toHaveValue('1');
});
test('onChange function is called with correct parameters if value changes', () => {
	const mockChange = jest.fn();    
    render(<NumberOfBeings numberOfBeings={1} onChangeNumberOfBeings={mockChange} validate={jest.fn()}/>);

    const numberOfBeingsElement = screen.getByLabelText(/Number of Beings:/i,{selector: 'input'});
    fireEvent.change(numberOfBeingsElement, {target: {value: '2'}});
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
            id: 'numberOfBeingsInput'
        })
    }));    
});

it(`Displays no error message when valid data is entered`, () => {
		const requiredProps : NumberOfBeingsProps =  {
            numberOfBeings: 100000000,
		    onChangeNumberOfBeings: jest.fn(),
            validate: validateNumberOfBeings
		};

    	render(<NumberOfBeings {...requiredProps} />);

        //fire event so validation is triggered and we can verify that error message is not shown
        const numberOfBeingsElement = screen.getByLabelText(/Number of Beings:/i,{selector: 'input'});
        fireEvent.change(numberOfBeingsElement, {target: {value: '1000000000'}});

    	expect(
    		screen.queryByRole("ErrorMessage")
    	).not.toBeInTheDocument();
    });


    it(`Displays the appropriate error message when number of beings is less than 1000000000`, () => {
	const requiredProps : NumberOfBeingsProps =  {
            numberOfBeings: 1000000000,
		    onChangeNumberOfBeings: jest.fn(),
            validate: validateNumberOfBeings
		};
    
    render(<NumberOfBeings {...requiredProps} />);
    
    //fire event so validation is triggered and error message is shown
    const numberOfBeingsElement = screen.getByLabelText(/Number of Beings:/i,{selector: 'input'});
    fireEvent.change(numberOfBeingsElement, {target: {value: '100000000'}});

    expect(
        screen.getByText("Number must be at least 1,000,000,000.")
    ).toBeInTheDocument();
    
    });