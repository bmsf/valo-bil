import React from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
	Button,
} from '@nextui-org/react';
import { SiTesla } from 'react-icons/si';

import teslaY from '@/public/tesla-y.jpeg';
import kia from '@/public/kia.jpeg';

export default function GridContainer() {
	return (
		<div className='m-12 rounded-md grid gap-3 grid-cols-fluid w-full'>
			<Card isFooterBlurred className='bg-primary h-[500px]'>
				<CardHeader className='absolute z-10 top-1 flex-col items-start'>
					{/* <p className='text-tiny text-white/60 uppercase font-bold'>
						Your day your way
					</p> */}
					{/* <h4 className='text-white/90 font-medium text-xl mt-2'>
						Tesla Model Y Long Range
					</h4> */}
				</CardHeader>
				<Image
					removeWrapper
					alt='Relaxing app background'
					className='z-0 w-full h-full object-cover'
					src={teslaY.src}
				/>
				<CardFooter className='absolute bg-primary/70 bottom-0 z-12 rounded-b-none'>
					{/* <SiTesla /> */}
					<div className='flex flex-grow gap-2 items-center'>
						<div className='flex flex-col'>
							<h4 className='text-white/90 font-medium text-xl'>
								Tesla Model Y
							</h4>
							<p className='text-tiny text-white/80'>
								2023 - 19 500km - 509 990kr
							</p>
						</div>
					</div>
					{/* <Button radius='full' size='sm' className='bg-primary uppercase'>
						Visning
					</Button> */}
					<SiTesla className='text-2xl' />
				</CardFooter>
			</Card>

			<Card isFooterBlurred className='h-[500px] bg-primary'>
				{/* <CardHeader className='absolute z-10 top-1 flex-col items-start'>
					<p className='text-tiny text-white/60 uppercase font-bold'>
						Your day your way
					</p>
					<h4 className='text-white/90 font-medium text-xl'>Kia E-Niro</h4>
				</CardHeader> */}
				<Image
					removeWrapper
					alt='Relaxing app background'
					className='z-0 w-full h-full object-cover'
					src={kia.src}
				/>
				<CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
					<div className='flex flex-grow gap-2 items-center'>
						<div className='flex flex-col'>
							<h4 className='text-white/90 font-medium text-xl'>Kia E-Niro</h4>
							<p className='text-tiny text-white/80'>
								2020 - 63 000km - 289 000kr
							</p>
						</div>
					</div>
					<Button radius='full' size='sm' className='bg-primary uppercase'>
						Visning
					</Button>
				</CardFooter>
			</Card>

			<Card isFooterBlurred className='bg-primary h-[500px]'>
				<CardHeader className='absolute z-10 top-1 flex-col items-start'>
					{/* <p className='text-tiny text-white/60 uppercase font-bold'>
						Your day your way
					</p> */}
					{/* <h4 className='text-white/90 font-medium text-xl mt-2'>
						Tesla Model Y Long Range
					</h4> */}
				</CardHeader>
				<Image
					removeWrapper
					alt='Relaxing app background'
					className='z-0 w-full h-full object-cover'
					src={teslaY.src}
				/>
				<CardFooter className='absolute bg-primary/70 bottom-0 z-12 rounded-b-none'>
					{/* <SiTesla /> */}
					<div className='flex flex-grow gap-2 items-center'>
						<div className='flex flex-col'>
							<h4 className='text-white/90 font-medium text-xl'>
								Tesla Model Y
							</h4>
							<p className='text-tiny text-white/80'>
								2023 - 19 500km - 509 990kr
							</p>
						</div>
					</div>
					{/* <Button radius='full' size='sm' className='bg-primary uppercase'>
						Visning
					</Button> */}
					<SiTesla className='text-2xl' />
				</CardFooter>
			</Card>

			<Card isFooterBlurred className='h-[500px]bg-primary'>
				{/* <CardHeader className='absolute z-10 top-1 flex-col items-start'>
					<p className='text-tiny text-white/60 uppercase font-bold'>
						Your day your way
					</p>
					<h4 className='text-white/90 font-medium text-xl'>Kia E-Niro</h4>
				</CardHeader> */}
				<Image
					removeWrapper
					alt='Relaxing app background'
					className='z-0 w-full h-full object-cover'
					src={kia.src}
				/>
				<CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
					<div className='flex flex-grow gap-2 items-center'>
						<div className='flex flex-col'>
							<h4 className='text-white/90 font-medium text-xl'>Kia E-Niro</h4>
							<p className='text-tiny text-white/80'>
								2020 - 63 000km - 289 000kr
							</p>
						</div>
					</div>
					<Button radius='full' size='sm' className='bg-primary uppercase'>
						Visning
					</Button>
				</CardFooter>
			</Card>
			<Card isFooterBlurred className='bg-primary h-[500px]'>
				<CardHeader className='absolute z-10 top-1 flex-col items-start'>
					{/* <p className='text-tiny text-white/60 uppercase font-bold'>
						Your day your way
					</p> */}
					{/* <h4 className='text-white/90 font-medium text-xl mt-2'>
						Tesla Model Y Long Range
					</h4> */}
				</CardHeader>
				<Image
					removeWrapper
					alt='Relaxing app background'
					className='z-0 w-full h-full object-cover'
					src={teslaY.src}
				/>
				<CardFooter className='absolute bg-primary/70 bottom-0 z-12 rounded-b-none'>
					{/* <SiTesla /> */}
					<div className='flex flex-grow gap-2 items-center'>
						<div className='flex flex-col'>
							<h4 className='text-white/90 font-medium text-xl'>
								Tesla Model Y
							</h4>
							<p className='text-tiny text-white/80'>
								2023 - 19 500km - 509 990kr
							</p>
						</div>
					</div>
					{/* <Button radius='full' size='sm' className='bg-primary uppercase'>
						Visning
					</Button> */}
					<SiTesla className='text-2xl' />
				</CardFooter>
			</Card>

			<Card isFooterBlurred className='h-[500px] bg-primary'>
				{/* <CardHeader className='absolute z-10 top-1 flex-col items-start'>
					<p className='text-tiny text-white/60 uppercase font-bold'>
						Your day your way
					</p>
					<h4 className='text-white/90 font-medium text-xl'>Kia E-Niro</h4>
				</CardHeader> */}
				<Image
					removeWrapper
					alt='Relaxing app background'
					className='z-0 w-full h-full object-cover'
					src={kia.src}
				/>
				<CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
					<div className='flex flex-grow gap-2 items-center'>
						<div className='flex flex-col'>
							<h4 className='text-white/90 font-medium text-xl'>Kia E-Niro</h4>
							<p className='text-tiny text-white/80'>
								2020 - 63 000km - 289 000kr
							</p>
						</div>
					</div>
					<Button
						radius='full'
						size='sm'
						className='bg-primary uppercase text-foreground'
					>
						Visning
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
