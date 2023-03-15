import { useState } from 'react';

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClickSubmitButton }) => {       

    return (
        <button onClick={onClickSubmitButton}>Submit</button>
	);
};

interface SubmitButtonProps { 	
	onClickSubmitButton: () => void;		
}

export default SubmitButton;