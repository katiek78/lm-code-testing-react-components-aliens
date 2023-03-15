import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({numberOfBeings, onChangeNumberOfBeings, validate}) => {        

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

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
    validate: (userInput: string) => string | undefined;	
}

export default NumberOfBeings;