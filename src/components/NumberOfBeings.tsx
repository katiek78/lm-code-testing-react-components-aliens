import { useState } from 'react';

const NumberOfBeings: React.FC = () => {    
    const [numberOfBeings, setNumberOfBeings] = useState<number>(0);	    

    return (
        <>
            <label htmlFor='numberOfBeingsInput'>Number of Beings: </label>
            <input id='numberOfBeingsInput' type='text' value={numberOfBeings > 0 ? numberOfBeings.toString() : ""} onChange={(e) => setNumberOfBeings(parseInt(e.target.value))} />
        </>
	);
};

export default NumberOfBeings;