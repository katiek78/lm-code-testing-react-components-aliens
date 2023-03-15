import { render, screen, fireEvent } from '@testing-library/react';
import { validatePlanetName } from '../validation/validation_W12MForm';
import PlanetName, { PlanetNameProps } from './PlanetName';

test('renders input element', () => {
	render(<PlanetName planetName={''} onChangePlanetName={jest.fn()} validate={jest.fn()} />);

    const planetNameLabel = screen.getByLabelText(/Planet Name:/i,{selector: 'input'});
    expect(planetNameLabel).toBeInTheDocument();   
});

test('input element has value from props', () => {
	render(<PlanetName planetName={'Earth'} onChangePlanetName={jest.fn()} validate={jest.fn()} />);

    const planetNameElement = screen.getByLabelText(/Planet Name:/i,{selector: 'input'});
    expect(planetNameElement).toHaveValue('Earth');
});
test('onChange function is called with correct parameters if value changes', () => {
	const mockChange = jest.fn();    
    render(<PlanetName planetName={'Earth'} onChangePlanetName={mockChange} validate={jest.fn()} />);

    const planetNameElement = screen.getByLabelText(/Planet Name:/i,{selector: 'input'});
    fireEvent.change(planetNameElement, {target: {value: 'Jupiter'}});
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
            id: 'planetNameInput'
        })
    }));    
});

it(`Displays no error message when valid data is entered`, () => {
    const requiredProps : PlanetNameProps =  {
        planetName: 'E',
        onChangePlanetName: jest.fn(),
        validate: validatePlanetName
    };

    render(<PlanetName {...requiredProps} />);

    //fire event so validation is triggered and we can verify that error message is not shown
    const planetNameElement = screen.getByLabelText(/Planet Name:/i,{selector: 'input'});
    fireEvent.change(planetNameElement, {target: {value: 'Earth2'}});

    expect(
        screen.queryByRole("ErrorMessage")
    ).not.toBeInTheDocument();
});

it(`Displays the appropriate error message when input length is less than 2`, () => {
const requiredProps : PlanetNameProps =  {
    planetName: 'Ea',
    onChangePlanetName: jest.fn(),
    validate: validatePlanetName
};

render(<PlanetName {...requiredProps} />);

//fire event so validation is triggered and error message is shown
const planetNameElement = screen.getByLabelText(/Planet Name:/i,{selector: 'input'});
fireEvent.change(planetNameElement, {target: {value: 'E'}});

expect(
    screen.getByText("ERROR: Input must be between 2 and 49 characters.")
).toBeInTheDocument();

});

it(`Displays the appropriate error message when input length is greater than 49`, () => {
    const requiredProps : PlanetNameProps =  {
        planetName: 'Earth',
        onChangePlanetName: jest.fn(),
        validate: validatePlanetName
    };
    
    render(<PlanetName {...requiredProps} />);
    
    //fire event so validation is triggered and error message is shown
    const planetNameElement = screen.getByLabelText(/Planet Name:/i,{selector: 'input'});
    fireEvent.change(planetNameElement, {target: {value: 'Earrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrth'}});
    
    expect(
        screen.getByText("ERROR: Input must be between 2 and 49 characters.")
    ).toBeInTheDocument();
    
    });

    it(`Displays the appropriate error message when special characters are entered`, () => {
        const requiredProps : PlanetNameProps =  {
            planetName: 'Earth',
            onChangePlanetName: jest.fn(),
            validate: validatePlanetName
        };
        
        render(<PlanetName {...requiredProps} />);
        
        //fire event so validation is triggered and error message is shown
        const planetNameElement = screen.getByLabelText(/Planet Name:/i,{selector: 'input'});
        fireEvent.change(planetNameElement, {target: {value: 'Earth!'}});
        
        expect(
            screen.getByText("ERROR: No special characters are allowed.")
        ).toBeInTheDocument();
        
        });