import { render, screen, fireEvent } from '@testing-library/react';
import SpeciesName from './SpeciesName';



test('renders input element', () => {
	const { container } = render(<SpeciesName speciesName={'x'} onChangeSpeciesName={() => {return;}}/>);

    const speciesNameElement = screen.getByLabelText(/Species Name:/i,{selector: 'input'});    
    expect(speciesNameElement).toBeInTheDocument();   
});

test('input element has value from props', () => {
	const { container } = render(<SpeciesName speciesName={'x'} onChangeSpeciesName={() => {return;}}/>);

    const speciesNameElement = screen.getByLabelText(/Species Name:/i,{selector: 'input'});
    expect(speciesNameElement).toHaveValue('x');
});
test('onChange function is called with correct parameters if value changes', () => {
	const mockChange = jest.fn();    
    const { container } = render(<SpeciesName speciesName={'x'} onChangeSpeciesName={mockChange}/>);

    const speciesNameElement = screen.getByLabelText(/Species Name:/i,{selector: 'input'});
    fireEvent.change(speciesNameElement, {target: {value: 'y'}});
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
            id: 'speciesNameInput'
        })
    }));    
});

