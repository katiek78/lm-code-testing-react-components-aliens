import { render, screen, fireEvent } from '@testing-library/react';
import SpeciesName from './SpeciesName';
import { SpeciesNameProps } from './SpeciesName';


test('renders input element', () => {
	render(<SpeciesName speciesName={'x'} onChangeSpeciesName={() => {return;}}/>);

    const speciesNameElement = screen.getByLabelText(/Species Name:/i,{selector: 'input'});    
    expect(speciesNameElement).toBeInTheDocument();   
});

test('input element has value from props', () => {
	render(<SpeciesName speciesName={'x'} onChangeSpeciesName={() => {return;}}/>);

    const speciesNameElement = screen.getByLabelText(/Species Name:/i,{selector: 'input'});
    expect(speciesNameElement).toHaveValue('x');
});
test('onChange function is called with correct parameters if value changes', () => {
	const mockChange = jest.fn();    
    render(<SpeciesName speciesName={'x'} onChangeSpeciesName={mockChange}/>);

    const speciesNameElement = screen.getByLabelText(/Species Name:/i,{selector: 'input'});
    fireEvent.change(speciesNameElement, {target: {value: 'y'}});
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
            id: 'speciesNameInput'
        })
    }));    
});

it(`Given valid input,
		When the component is rendered,
		no error message is shown`, () => {
		const requiredProps : SpeciesNameProps =  {
            speciesName: 'Human',
		    onChangeSpeciesName: () => {}
		};

    	render(<SpeciesName {...requiredProps} />);

    	expect(
    		screen.queryByRole("ErrorMessage")
    	).not.toBeInTheDocument();
    });