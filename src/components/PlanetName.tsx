import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const PlanetName: React.FC<PlanetNameProps> = ({planetName, onChangePlanetName, validate}) => {        

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

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

export interface PlanetNameProps { 
	planetName: string;
	onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;	
    validate: (userInput: string) => string | undefined;	
}

export default PlanetName;