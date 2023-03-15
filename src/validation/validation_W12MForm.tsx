export const validateSpeciesName: (userInput: string) => string | undefined = (userInput) => {
	//check length
	if (userInput.length < 3 || userInput.length > 23) return "Input must be between 3 and 23 characters."
	

	//check that only letters are used        
	const regex = (/^\p{L}+$/u);
	if (!regex.test(userInput)) return "No numbers or special characters are allowed."
	
	return undefined;
};    

export const validatePlanetName: (userInput: string) => string | undefined = (userInput) => {
    //check length
    if (userInput.length < 2 || userInput.length > 49) return "Input must be between 2 and 49 characters.";

    //check that only numbers and letters are used        
    const regex = (/^(\p{L}|\p{N})+$/u);
    if (!regex.test(userInput)) return "No special characters are allowed."
  
    return undefined;
};

export const validateNumberOfBeings: (userInput: string) => string | undefined = (userInput) => {
    const inputNumber = parseInt(userInput);        
    
    //check that it is a number
    if (isNaN(inputNumber)) return "Input must be a number.";
    
    //check that it is at least 1,000,000,000       
    if (inputNumber < 1000000000) return "Number must be at least 1,000,000,000.";

    return undefined;
};

export const validateReasonForSparing: (userInput: string) => string | undefined = (userInput) => {
    //check length
    if (userInput.length < 17 || userInput.length > 153) return "Input must be between 17 and 153 characters.";
    
    return undefined;
};

export const validateWhatIs2And2: (userInput: string) => string | undefined = (userInput) => {    
    if (userInput !== '4') return "Input must be '4'."    
    return undefined;
};