import { Button } from '@nextui-org/button';
import React from 'react';

export default function FilterContainer() {
	return (
		<div className='bg-primary w-full rounded-md mt-12 flex p-3 justify-around'>
			<Button className='bg-primary text-xl uppercase'>Alle</Button>
			<Button className='bg-primary text-xl uppercase'>Tesla</Button>
			<Button className='bg-primary text-xl uppercase'>Kia</Button>
			<Button className='bg-primary text-xl uppercase'>Bmw</Button>
			<Button className='bg-primary text-xl uppercase'>Audi</Button>
		</div>
	);
}
