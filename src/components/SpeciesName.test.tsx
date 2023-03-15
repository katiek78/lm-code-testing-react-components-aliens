import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

test('renders input element', () => {
	const { container } = render(<SpeciesName speciesName={'x'} onChangeSpeciesName={() => {return;}}/>);

    const speciesNameLabel = screen.getByLabelText(/Species Name:/i,{selector: 'input'});
    expect(speciesNameLabel).toBeInTheDocument();   
});