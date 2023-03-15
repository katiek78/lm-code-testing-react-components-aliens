import { render, screen, fireEvent } from '@testing-library/react';
import WhatIs2And2, {WhatIs2And2Props} from './WhatIs2And2';

test('renders select element', () => {
	render(<WhatIs2And2 whatIs2And2='4' onChangeWhatIs2And2={() => {return;}} />);

    const whatIs2And2Label = screen.getByLabelText(/What is 2 \+ 2\?/i,{selector: 'select'});
    expect(whatIs2And2Label).toBeInTheDocument();   
});

test('input element has value from props', () => {
	render(<WhatIs2And2 whatIs2And2={'4'} onChangeWhatIs2And2={() => {return;}}/>);

    const whatIs2And2Element = screen.getByLabelText(/What is 2 \+ 2\?/i,{selector: 'select'});
    expect(whatIs2And2Element).toHaveValue('4');
});
test('onChange function is called with correct parameters if value changes', () => {
	const mockChange = jest.fn();    
    render(<WhatIs2And2 whatIs2And2={'4'} onChangeWhatIs2And2={mockChange}/>);

    const whatIs2And2Element = screen.getByLabelText(/What is 2 \+ 2\?/i,{selector: 'select'});
    fireEvent.change(whatIs2And2Element, {target: {value: 'Not 4'}});
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
            id: 'whatIs2And2Select'
        })
    }));    
});

it(`Given valid input,
		When the component is rendered,
		no error message is shown`, () => {
		const requiredProps : WhatIs2And2Props =  {
            whatIs2And2: '4',
		    onChangeWhatIs2And2: () => {}
		};

    	render(<WhatIs2And2 {...requiredProps} />);

    	expect(
    		screen.queryByRole("ErrorMessage")
    	).not.toBeInTheDocument();
    });