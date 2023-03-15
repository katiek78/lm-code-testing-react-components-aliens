import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {       

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate: (userInput: string) => string | undefined = (userInput) => {
        //check length
        if (userInput.length < 3 || userInput.length > 23) return "Input must be between 3 and 23 characters."
        

        //check that only letters are used        
        const regex = (/^\p{L}+$/u);
        if (!regex.test(userInput)) return "No numbers or special characters are allowed."
        
        return undefined;
    };

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

interface SpeciesNameProps { 
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;		
}

export default SpeciesName;