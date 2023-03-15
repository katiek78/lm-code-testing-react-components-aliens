import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({numberOfBeings, onChangeNumberOfBeings}) => {        

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate: (userInput: string) => string | undefined = (userInput) => {
        const inputNumber = parseInt(userInput);        
        
        //check that it is a number
        if (isNaN(inputNumber)) return "Input must be a number.";
        
        //check that it is at least 1,000,000,000       
        if (inputNumber < 1000000000) return "Number must be at least 1,000,000,000.";

        return undefined;
    };


    return (
        <>
            <label htmlFor='numberOfBeingsInput'>Number of Beings: </label>
            <input id='numberOfBeingsInput' type='text' value={isNaN(numberOfBeings) ? '' : numberOfBeings.toString()} onChange={(e) => {
				const errorMessage = validate(e.target.value);
				setErrorMessage(errorMessage);
				onChangeNumberOfBeings(e);
            }} />
            <ErrorMessage message={errorMessage} />
        </>
	);
};

export interface NumberOfBeingsProps { 
	numberOfBeings: number;
	onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;		
}

export default NumberOfBeings;