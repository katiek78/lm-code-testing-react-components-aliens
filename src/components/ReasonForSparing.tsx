import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({reasonForSparing, onChangeReasonForSparing, validate}) => {            

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();  

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

export interface ReasonForSparingProps { 
	reasonForSparing: string;
	onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;		
    validate: (userInput: string) => string | undefined
}

export default ReasonForSparing;