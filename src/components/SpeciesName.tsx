import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName, validate }) => {       

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();    

    return (
        <>
            <label htmlFor='speciesNameInput'>Species Name: </label>
            <input id='speciesNameInput' type='text' value={speciesName} onChange={(e) => {
				const errorMessage = validate(e.target.value);
				setErrorMessage(errorMessage);
				onChangeSpeciesName(e);
            }} />
            <ErrorMessage message={errorMessage} />
        </>
	);
};

export interface SpeciesNameProps { 
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;	
    validate: (userInput: string) => string | undefined
}

export default SpeciesName;