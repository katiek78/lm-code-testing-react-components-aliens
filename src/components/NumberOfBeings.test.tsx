import { render, screen } from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings';

test('renders input element', () => {
	const { container } = render(<NumberOfBeings />);

    const numberOfBeingsLabel = screen.getByLabelText(/Number of Beings:/i,{selector: 'input'});
    expect(numberOfBeingsLabel).toBeInTheDocument();   
});