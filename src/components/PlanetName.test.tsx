import { render, screen } from '@testing-library/react';
import PlanetName from './PlanetName';

test('renders input element', () => {
	const { container } = render(<PlanetName planetName={''} onChangePlanetName={() => {return;}}/>);

    const planetNameLabel = screen.getByLabelText(/Planet Name:/i,{selector: 'input'});
    expect(planetNameLabel).toBeInTheDocument();   
});