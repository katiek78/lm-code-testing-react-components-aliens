import { render, screen, fireEvent } from '@testing-library/react';
import PlanetName from './PlanetName';

test('renders input element', () => {
	const { container } = render(<PlanetName planetName={''} onChangePlanetName={() => {return;}}/>);

    const planetNameLabel = screen.getByLabelText(/Planet Name:/i,{selector: 'input'});
    expect(planetNameLabel).toBeInTheDocument();   
});

test('input element has value from props', () => {
	const { container } = render(<PlanetName planetName={'x'} onChangePlanetName={() => {return;}}/>);

    const planetNameElement = screen.getByLabelText(/Planet Name:/i,{selector: 'input'});
    expect(planetNameElement).toHaveValue('x');
});
test('onChange function is called with correct parameters if value changes', () => {
	const mockChange = jest.fn();    
    const { container } = render(<PlanetName planetName={'x'} onChangePlanetName={mockChange}/>);

    const planetNameElement = screen.getByLabelText(/Planet Name:/i,{selector: 'input'});
    fireEvent.change(planetNameElement, {target: {value: 'y'}});
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
            id: 'planetNameInput'
        })
    }));    
});