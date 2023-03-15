import { useState } from 'react';

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClickSubmitButton }) => {       

    return (
        <button id='submitButton' onClick={onClickSubmitButton}>Submit</button>
	);
};

interface SubmitButtonProps { 	
	onClickSubmitButton: () => void;		
}

export default SubmitButton;