import { render, screen, fireEvent } from '@testing-library/react';
import PlanetName, { PlanetNameProps } from './PlanetName';

test('renders input element', () => {
	render(<PlanetName planetName={''} onChangePlanetName={() => {return;}}/>);

    const planetNameLabel = screen.getByLabelText(/Planet Name:/i,{selector: 'input'});
    expect(planetNameLabel).toBeInTheDocument();   
});

test('input element has value from props', () => {
	render(<PlanetName planetName={'Earth'} onChangePlanetName={() => {return;}}/>);

    const planetNameElement = screen.getByLabelText(/Planet Name:/i,{selector: 'input'});
    expect(planetNameElement).toHaveValue('Earth');
});
test('onChange function is called with correct parameters if value changes', () => {
	const mockChange = jest.fn();    
    render(<PlanetName planetName={'Earth'} onChangePlanetName={mockChange}/>);

    const planetNameElement = screen.getByLabelText(/Planet Name:/i,{selector: 'input'});
    fireEvent.change(planetNameElement, {target: {value: 'Jupiter'}});
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
            id: 'planetNameInput'
        })
    }));    
});

it(`Given valid input,
		When the component is rendered,
		no error message is shown`, () => {
		const requiredProps : PlanetNameProps =  {
            planetName: 'Earth',
		    onChangePlanetName: () => {}
		};

    	render(<PlanetName {...requiredProps} />);

    	expect(
    		screen.queryByRole("ErrorMessage")
    	).not.toBeInTheDocument();
    });