import { useState } from 'react';

const WhatIs2And2: React.FC<WhatIs2And2Props> = ({whatIs2And2, onChangeWhatIs2And2}) => {        

    return (
        <>
            <label htmlFor='whatIs2And2Select'>What is 2 + 2?</label>
            <select id='whatIs2And2Select' onChange={onChangeWhatIs2And2}>
                <option value="4">4</option>
                <option value="Not4">Not 4</option>
            </select>
        </>
	);
};

interface WhatIs2And2Props { 
	whatIs2And2: string;
	onChangeWhatIs2And2: (e: React.ChangeEvent<HTMLSelectElement>) => void;		
}

export default WhatIs2And2;