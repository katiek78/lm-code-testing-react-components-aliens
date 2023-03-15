import { useState } from 'react';

const PlanetName: React.FC<PlanetNameProps> = ({planetName, onChangePlanetName}) => {        

    return (
        <>
            <label htmlFor='planetNameInput'>Planet Name: </label>
            <input id='planetNameInput' type='text' value={planetName} onChange={onChangePlanetName} />
        </>
	);
};

interface PlanetNameProps { 
	planetName: string;
	onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;		
}

export default PlanetName;