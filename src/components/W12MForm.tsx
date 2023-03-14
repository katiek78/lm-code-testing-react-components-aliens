import { useState } from 'react';
import SpeciesName from './SpeciesName';

import W12MHeader from './W12MHeader';

const W12MForm = () => {
	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName />
			{/* <PlanetName />
			<NumberOfBeings />
			<WhatIs2And2 />
			<ReasonForSparing /> */}
		</section>
	);
};

export default W12MForm;
