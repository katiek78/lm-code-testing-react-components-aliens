import { useState } from 'react';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIs2And2 from './WhatIs2And2';
import ReasonForSparing from './ReasonForSparing';

import W12MHeader from './W12MHeader';
import SubmitButton from './SubmitButton';
import { validateSpeciesName, validatePlanetName, validateNumberOfBeings, validateReasonForSparing, validateWhatIs2And2 } from '../validation/validation_W12MForm';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('');	   
	const [planetName, setPlanetName] = useState<string>('');	    
	const [numberOfBeings, setNumberOfBeings] = useState<number>(0);
	const [whatIs2And2, setWhatIs2And2] = useState<string>('');	    
	const [reasonForSparing, setReasonForSparing] = useState<string>('');	

	const displayFormData = () => {
		console.log(speciesName, planetName, numberOfBeings, whatIs2And2, reasonForSparing);
	}

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e: any) => setSpeciesName(e.target.value)} validate={validateSpeciesName} />
			<br />
			<PlanetName planetName={planetName} onChangePlanetName={(e: any) => setPlanetName(e.target.value)} validate={validatePlanetName} />
			<br />
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(e: any) => setNumberOfBeings(parseInt(e.target.value))} validate={validateNumberOfBeings} />
			<br />
			<WhatIs2And2 whatIs2And2={whatIs2And2} onChangeWhatIs2And2={(e: any) => setWhatIs2And2(e.target.value)} validate={validateWhatIs2And2} />
			<br />
			<ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={(e: any) => setReasonForSparing(e.target.value)} validate={validateReasonForSparing} />									
			<br />
			<SubmitButton onClickSubmitButton={displayFormData} />
		</section>
	);
};

export default W12MForm;
