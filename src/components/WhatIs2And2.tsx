import { useState } from 'react';

const WhatIs2And2: React.FC = () => {    
    const [whatIs2And2, setWhatIs2And2] = useState<string>('');	    

    return (
        <>
            <label htmlFor='whatIs2And2Select'>What is 2 + 2?</label>
            <select id='whatIs2And2Select' onChange={(e) => setWhatIs2And2(e.target.value)}>
                <option value="4">4</option>
                <option value="Not4">Not 4</option>
            </select>
        </>
	);
};

export default WhatIs2And2;