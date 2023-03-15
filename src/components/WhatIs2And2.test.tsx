import { render, screen } from '@testing-library/react';
import WhatIs2And2 from './WhatIs2And2';

test('renders select element', () => {
	const { container } = render(<WhatIs2And2 whatIs2And2='4' onChangeWhatIs2And2={() => {return;}} />);

    const whatIs2And2Label = screen.getByLabelText(/What is 2 \+ 2\?/i,{selector: 'select'});
    expect(whatIs2And2Label).toBeInTheDocument();   
});