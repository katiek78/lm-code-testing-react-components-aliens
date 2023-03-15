import { useState } from 'react';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIs2And2 from './WhatIs2And2';
import ReasonForSparing from './ReasonForSparing';

import W12MHeader from './W12MHeader';

const W12MForm = () => {
	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName />
			<br />
			<PlanetName />
			<br />
			<NumberOfBeings />
			<br />
			<WhatIs2And2 />
			<br />
			<ReasonForSparing />						
		</section>
	);
};

export default W12MForm;
