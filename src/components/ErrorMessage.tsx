import { useState } from 'react';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {       
   
    return (
        <>
            {message && <p style={{color:'#FF0000'}}>ERROR: {message}</p>} 
        </>
	);
};

interface ErrorMessageProps { 
	message: string | undefined;	
}

export default ErrorMessage;