import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({reasonForSparing, onChangeReasonForSparing}) => {            

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate: (userInput: string) => string | undefined = (userInput) => {
        //check length
        if (userInput.length < 17 || userInput.length > 153) return "Input must be between 17 and 153 characters.";
        
        return undefined;
    };


    return (
        <>
            <label htmlFor='reasonForSparingTextArea'>Reason For Sparing: </label>
            <textarea id='reasonForSparingTextArea' value={reasonForSparing} onChange={(e) => {
				const errorMessage = validate(e.target.value);
				setErrorMessage(errorMessage);
				onChangeReasonForSparing(e);
            }} />
            <ErrorMessage message={errorMessage} />
        </>
	);
};

interface ReasonForSparingProps { 
	reasonForSparing: string;
	onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;		
}

export default ReasonForSparing;