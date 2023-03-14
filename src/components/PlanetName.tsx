import { useState } from 'react';

const PlanetName: React.FC = () => {    
    const [planetName, setPlanetName] = useState<string>('');	    

    return (
        <>
            <label htmlFor='planetNameInput'>Planet Name: </label>
            <input id='planetNameInput' type='text' value={planetName} onChange={(e) => setPlanetName(e.target.value)} />
        </>
	);
};

export default PlanetName;