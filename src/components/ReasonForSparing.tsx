import { useState } from 'react';

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({reasonForSparing, onChangeReasonForSparing}) => {            

    return (
        <>
            <label htmlFor='reasonForSparingTextArea'>Reason For Sparing: </label>
            <textarea id='reasonForSparingTextArea' value={reasonForSparing} onChange={onChangeReasonForSparing} />
        </>
	);
};

interface ReasonForSparingProps { 
	reasonForSparing: string;
	onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;		
}

export default ReasonForSparing;