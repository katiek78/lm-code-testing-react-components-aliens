import { useState } from 'react';

const SpeciesName: React.FC = () => {    
    const [speciesName, setSpeciesName] = useState<string>('');	    

    return (
        <>
            <label htmlFor='speciesNameInput'>Species Name: </label>
            <input id='speciesNameInput' type='text' value={speciesName} onChange={(e) => setSpeciesName(e.target.value)} />
        </>
	);
};

export default SpeciesName;