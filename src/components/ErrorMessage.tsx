import { useState } from 'react';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {       
   
    return (
        <>
            <p style={{color:'#FF0000'}}>{message}</p>
        </>
	);
};

interface ErrorMessageProps { 
	message: string | undefined;	
}

export default ErrorMessage;