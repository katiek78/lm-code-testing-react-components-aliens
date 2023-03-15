import { useState } from 'react';

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {       

    return (
        <>
            <label htmlFor='speciesNameInput'>Species Name: </label>
            <input id='speciesNameInput' type='text' value={speciesName} onChange={onChangeSpeciesName} />
        </>
	);
};

interface SpeciesNameProps { 
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;		
}

export default SpeciesName;