import { useState } from 'react';

const ReasonForSparing: React.FC = () => {    
    const [reasonForSparing, setReasonForSparing] = useState<string>('');	    

    return (
        <>
            <label htmlFor='reasonForSparingTextArea'>Reason For Sparing: </label>
            <textarea id='reasonForSparingTextArea' value={reasonForSparing} onChange={(e) => setReasonForSparing(e.target.value)} />
        </>
	);
};

export default ReasonForSparing;