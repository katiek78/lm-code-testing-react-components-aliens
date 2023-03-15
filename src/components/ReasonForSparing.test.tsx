import { render, screen, fireEvent } from '@testing-library/react';
import ReasonForSparing, { ReasonForSparingProps } from './ReasonForSparing';
import { validateReasonForSparing } from '../validation/validation_W12MForm';

test('renders textarea element', () => {
	render(<ReasonForSparing reasonForSparing={''} onChangeReasonForSparing={jest.fn()} validate={jest.fn()} />); 

    const reasonForSparingLabel = screen.getByLabelText(/Reason For Sparing:/i,{selector: 'textarea'});
    expect(reasonForSparingLabel).toBeInTheDocument();   
});

test('textarea element has value from props', () => {
	render(<ReasonForSparing reasonForSparing={'x'} onChangeReasonForSparing={jest.fn()} validate={jest.fn()} />);

    const reasonForSparingElement = screen.getByLabelText(/Reason For Sparing:/i,{selector: 'textarea'});
    expect(reasonForSparingElement).toHaveValue('x');
});
test('onChange function is called with correct parameters if value changes', () => {
	const mockChange = jest.fn();    
    render(<ReasonForSparing reasonForSparing={'x'} onChangeReasonForSparing={mockChange} validate={jest.fn()} />);

    const reasonForSparingElement = screen.getByLabelText(/Reason For Sparing:/i,{selector: 'textarea'});
    fireEvent.change(reasonForSparingElement, {target: {value: 'y'}});
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
            id: 'reasonForSparingTextArea'
        })
    }));    
});

it(`Displays no error message when valid data is entered`, () => {
		const requiredProps : ReasonForSparingProps =  {
            reasonForSparing: 'A reason.',
		    onChangeReasonForSparing: () => {},
            validate: validateReasonForSparing
		};

    	render(<ReasonForSparing {...requiredProps} />);

        //fire event so validation is triggered and we can verify that error message is not shown
        const reasonForSparingElement = screen.getByLabelText(/Reason For Sparing:/i,{selector: 'textarea'});
        fireEvent.change(reasonForSparingElement, {target: {value: 'Here is a valid reason.'}});

    	expect(
    		screen.queryByRole("ErrorMessage")
    	).not.toBeInTheDocument();
    });

it(`Displays the appropriate error message when input length is less than 17`, () => {
    const requiredProps : ReasonForSparingProps =  {
        reasonForSparing: 'Here is a valid reason.',
        onChangeReasonForSparing: jest.fn(),
        validate: validateReasonForSparing
    };

    render(<ReasonForSparing {...requiredProps} />);

    //fire event so validation is triggered and error message is shown
    const reasonForSparingElement = screen.getByLabelText(/Reason For Sparing:/i,{selector: 'textarea'});
    fireEvent.change(reasonForSparingElement, {target: {value: 'A reason.'}});
    
    expect(
        screen.getByText("ERROR: Input must be between 17 and 153 characters.")
    ).toBeInTheDocument();

});

it(`Displays the appropriate error message when input length is greater than 153`, () => {
    const requiredProps : ReasonForSparingProps =  {
        reasonForSparing: 'Here is a valid reason.',
        onChangeReasonForSparing: jest.fn(),
        validate: validateReasonForSparing
    };

    render(<ReasonForSparing {...requiredProps} />);

    //fire event so validation is triggered and error message is shown
    const reasonForSparingElement = screen.getByLabelText(/Reason For Sparing:/i,{selector: 'textarea'});
    fireEvent.change(reasonForSparingElement, {target: {value: 'A reason. A reason. A reason. A reason. A reason. A reason. A reason. A reason. A reason. A reason. A reason. A reason. A reason. A reason. A reason. ABCD'}});
    
    expect(
        screen.getByText("ERROR: Input must be between 17 and 153 characters.")
    ).toBeInTheDocument();

});