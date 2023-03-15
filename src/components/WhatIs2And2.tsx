import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const WhatIs2And2: React.FC<WhatIs2And2Props> = ({whatIs2And2, onChangeWhatIs2And2}) => {        

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate: (userInput: string) => string | undefined = (userInput) => {
        //check length
        if (userInput !== '4') return "Input must be '4'."
        
        return undefined;
    };

    return (
        <>
            <label htmlFor='whatIs2And2Select'>What is 2 + 2?</label>
            <select id='whatIs2And2Select' onChange={(e) => {
				const errorMessage = validate(e.target.value);
				setErrorMessage(errorMessage);
				onChangeWhatIs2And2(e);
            }}>
                <option value="4">4</option>
                <option value="Not4">Not 4</option>
            </select>
            <ErrorMessage message={errorMessage} />
        </>
	);
};

export interface WhatIs2And2Props { 
	whatIs2And2: string;
	onChangeWhatIs2And2: (e: React.ChangeEvent<HTMLSelectElement>) => void;		
}

export default WhatIs2And2;