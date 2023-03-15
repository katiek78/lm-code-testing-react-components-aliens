import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const PlanetName: React.FC<PlanetNameProps> = ({planetName, onChangePlanetName}) => {        

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate: (userInput: string) => string | undefined = (userInput) => {
        //check length
        if (userInput.length < 2 || userInput.length > 49) return "Input must be between 2 and 49 characters.";

        //check that only numbers and letters are used        
        const regex = (/^(\p{L}|\p{N})+$/u);
        if (!regex.test(userInput)) return "No special characters are allowed."
      
        return undefined;
    };

    return (
        <>
            <label htmlFor='planetNameInput'>Planet Name: </label>
            <input id='planetNameInput' type='text' value={planetName} onChange={(e) => {
				const errorMessage = validate(e.target.value);
				setErrorMessage(errorMessage);
				onChangePlanetName(e);
            }} />
            <ErrorMessage message={errorMessage} />
        </>
	);
};

interface PlanetNameProps { 
	planetName: string;
	onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;		
}

export default PlanetName;