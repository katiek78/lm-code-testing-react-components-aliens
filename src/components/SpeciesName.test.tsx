import { render, screen, fireEvent } from '@testing-library/react';
import SpeciesName from './SpeciesName';
import { SpeciesNameProps } from './SpeciesName';
import { validateSpeciesName } from '../validation/validation_W12MForm';


test('renders input element', () => {
	render(<SpeciesName speciesName={'x'} onChangeSpeciesName={jest.fn()} validate={jest.fn()}/>);

    const speciesNameElement = screen.getByLabelText(/Species Name:/i,{selector: 'input'});    
    expect(speciesNameElement).toBeInTheDocument();   
});

test('input element has value from props', () => {
	render(<SpeciesName speciesName={'x'} onChangeSpeciesName={jest.fn()} validate={jest.fn()}/>);

    const speciesNameElement = screen.getByLabelText(/Species Name:/i,{selector: 'input'});
    expect(speciesNameElement).toHaveValue('x');
});
test('onChange function is called with correct parameters if value changes', () => {
	const mockChange = jest.fn();    
    render(<SpeciesName speciesName={'x'} onChangeSpeciesName={mockChange} validate={jest.fn()}/>);

    const speciesNameElement = screen.getByLabelText(/Species Name:/i,{selector: 'input'});
    fireEvent.change(speciesNameElement, {target: {value: 'y'}});
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
            id: 'speciesNameInput'
        })
    }));    
});

it(`Displays no error message when valid data is entered`, () => {
		const requiredProps : SpeciesNameProps =  {
            speciesName: 'H',
		    onChangeSpeciesName: jest.fn(),
            validate: validateSpeciesName
        };

    	render(<SpeciesName {...requiredProps} />);

        //fire event so validation is triggered and we can verify that error message is not shown
        const speciesNameElement = screen.getByLabelText(/Species Name:/i,{selector: 'input'});
        fireEvent.change(speciesNameElement, {target: {value: 'Humans'}});

    	expect(
    		screen.queryByRole("ErrorMessage")
    	).not.toBeInTheDocument();
    });

it(`Displays the appropriate error message when input length is less than 3`, () => {
    const requiredProps : SpeciesNameProps =  {
        speciesName: 'XYZ',
        onChangeSpeciesName: jest.fn(),
        validate: validateSpeciesName
    };

    render(<SpeciesName {...requiredProps} />);

    //fire event so validation is triggered and error message is shown
    const speciesNameElement = screen.getByLabelText(/Species Name:/i,{selector: 'input'});
    fireEvent.change(speciesNameElement, {target: {value: 'XY'}});
    
    expect(
        screen.getByText("Input must be between 3 and 23 characters.")
    ).toBeInTheDocument();

});