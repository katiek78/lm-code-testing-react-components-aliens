import { render, screen, fireEvent } from '@testing-library/react';
import ReasonForSparing, { ReasonForSparingProps } from './ReasonForSparing';

test('renders textarea element', () => {
	render(<ReasonForSparing reasonForSparing={''} onChangeReasonForSparing={() => {return;}} />); 

    const reasonForSparingLabel = screen.getByLabelText(/Reason For Sparing:/i,{selector: 'textarea'});
    expect(reasonForSparingLabel).toBeInTheDocument();   
});

test('textarea element has value from props', () => {
	render(<ReasonForSparing reasonForSparing={'x'} onChangeReasonForSparing={() => {return;}}/>);

    const reasonForSparingElement = screen.getByLabelText(/Reason For Sparing:/i,{selector: 'textarea'});
    expect(reasonForSparingElement).toHaveValue('x');
});
test('onChange function is called with correct parameters if value changes', () => {
	const mockChange = jest.fn();    
    render(<ReasonForSparing reasonForSparing={'x'} onChangeReasonForSparing={mockChange}/>);

    const reasonForSparingElement = screen.getByLabelText(/Reason For Sparing:/i,{selector: 'textarea'});
    fireEvent.change(reasonForSparingElement, {target: {value: 'y'}});
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
            id: 'reasonForSparingTextArea'
        })
    }));    
});

it(`Given valid input,
		When the component is rendered,
		no error message is shown`, () => {
		const requiredProps : ReasonForSparingProps =  {
            reasonForSparing: 'Here is a valid reason.',
		    onChangeReasonForSparing: () => {}
		};

    	render(<ReasonForSparing {...requiredProps} />);

    	expect(
    		screen.queryByRole("ErrorMessage")
    	).not.toBeInTheDocument();
    });