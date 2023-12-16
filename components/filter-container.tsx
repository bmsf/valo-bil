import { Button } from '@nextui-org/button';
import React from 'react';

export default function FilterContainer() {
	return (
		<div className='bg-primary w-full rounded-md mt-12 flex p-6 justify-around'>
			<Button className='bg-primary text-2xl uppercase'>Alle</Button>
			<Button className='bg-primary text-2xl uppercase'>Tesla</Button>
			<Button className='bg-primary text-2xl uppercase'>Kia</Button>
			<Button className='bg-primary text-2xl uppercase'>Bmw</Button>
			<Button className='bg-primary text-2xl uppercase'>Audi</Button>
		</div>
	);
}
