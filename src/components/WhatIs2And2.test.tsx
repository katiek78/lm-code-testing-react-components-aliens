import { render, screen, fireEvent } from '@testing-library/react';
import WhatIs2And2, {WhatIs2And2Props} from './WhatIs2And2';
import { validateWhatIs2And2 } from '../validation/validation_W12MForm';

test('renders select element', () => {
	render(<WhatIs2And2 whatIs2And2='4' onChangeWhatIs2And2={jest.fn()} validate={jest.fn()} />);

    const whatIs2And2Label = screen.getByLabelText(/What is 2 \+ 2\?/i,{selector: 'select'});
    expect(whatIs2And2Label).toBeInTheDocument();   
});

test('input element has value from props', () => {
	render(<WhatIs2And2 whatIs2And2={'4'} onChangeWhatIs2And2={jest.fn()}  validate={jest.fn()}/>);

    const whatIs2And2Element = screen.getByLabelText(/What is 2 \+ 2\?/i,{selector: 'select'});
    expect(whatIs2And2Element).toHaveValue('4');
});
test('onChange function is called with correct parameters if value changes', () => {
	const mockChange = jest.fn();    
    render(<WhatIs2And2 whatIs2And2={'4'} onChangeWhatIs2And2={mockChange}  validate={jest.fn()}/>);

    const whatIs2And2Element = screen.getByLabelText(/What is 2 \+ 2\?/i,{selector: 'select'});
    fireEvent.change(whatIs2And2Element, {target: {value: 'Not 4'}});
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
            id: 'whatIs2And2Select'
        })
    }));    
});

it(`Displays no error message when valid data is entered`, () => {
		const requiredProps : WhatIs2And2Props =  {
            whatIs2And2: 'Not 4',
		    onChangeWhatIs2And2: jest.fn(),
            validate: validateWhatIs2And2
		};

        render(<WhatIs2And2 {...requiredProps} />);

        //fire event so validation is triggered and we can verify that error message is not shown
        const whatIs2And2Element = screen.getByLabelText(/What is 2 \+ 2\?/i,{selector: 'select'});
        fireEvent.change(whatIs2And2Element, {target: {value: '4'}});

    	expect(
    		screen.queryByRole("ErrorMessage")
    	).not.toBeInTheDocument();
    });

it(`Displays the appropriate error message when 'Not 4' is chosen`, () => {
    const requiredProps : WhatIs2And2Props =  {
        whatIs2And2: '4',
        onChangeWhatIs2And2: jest.fn(),
        validate: validateWhatIs2And2
    };

    render(<WhatIs2And2 {...requiredProps} />);

    //fire event so validation is triggered and error message is shown
    const whatIs2And2Element = screen.getByLabelText(/What Is 2 \+ 2\?/i,{selector: 'select'});
    fireEvent.change(whatIs2And2Element, {target: {value: 'Not 4'}});
    
    expect(
        screen.getByText("ERROR: Input must be '4'.")
    ).toBeInTheDocument();

});