import { useState } from 'react';

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({numberOfBeings, onChangeNumberOfBeings}) => {        

    return (
        <>
            <label htmlFor='numberOfBeingsInput'>Number of Beings: </label>
            <input id='numberOfBeingsInput' type='text' value={numberOfBeings > 0 ? numberOfBeings.toString() : ""} onChange={onChangeNumberOfBeings} />
        </>
	);
};

interface NumberOfBeingsProps { 
	numberOfBeings: number;
	onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;		
}

export default NumberOfBeings;