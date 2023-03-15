import { render, screen } from '@testing-library/react';
import ReasonForSparing from './ReasonForSparing';

test('renders textarea element', () => {
	const { container } = render(<ReasonForSparing reasonForSparing={''} onChangeReasonForSparing={() => {return;}} />); 

    const reasonForSparingLabel = screen.getByLabelText(/Reason For Sparing:/i,{selector: 'textarea'});
    expect(reasonForSparingLabel).toBeInTheDocument();   
});