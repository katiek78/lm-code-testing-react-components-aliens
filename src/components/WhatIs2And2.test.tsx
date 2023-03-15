import { render, screen, fireEvent } from '@testing-library/react';
import WhatIs2And2 from './WhatIs2And2';

test('renders select element', () => {
	const { container } = render(<WhatIs2And2 whatIs2And2='4' onChangeWhatIs2And2={() => {return;}} />);

    const whatIs2And2Label = screen.getByLabelText(/What is 2 \+ 2\?/i,{selector: 'select'});
    expect(whatIs2And2Label).toBeInTheDocument();   
});

test('input element has value from props', () => {
	const { container } = render(<WhatIs2And2 whatIs2And2={'4'} onChangeWhatIs2And2={() => {return;}}/>);

    const whatIs2And2Element = screen.getByLabelText(/What is 2 \+ 2\?/i,{selector: 'select'});
    expect(whatIs2And2Element).toHaveValue('4');
});
test('onChange function is called with correct parameters if value changes', () => {
	const mockChange = jest.fn();    
    const { container } = render(<WhatIs2And2 whatIs2And2={'4'} onChangeWhatIs2And2={mockChange}/>);

    const whatIs2And2Element = screen.getByLabelText(/What is 2 \+ 2\?/i,{selector: 'select'});
    fireEvent.change(whatIs2And2Element, {target: {value: 'Not 4'}});
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
            id: 'whatIs2And2Select'
        })
    }));    
});