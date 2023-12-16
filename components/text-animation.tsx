'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const texts = [
	'Vi har ikke åpningstider, men vi er tilgjengelige 24/7',
	'Vi viser frem biler til alle døgnets tider, men kun etter avtale',
	'Vi har brukthandelbevilling, utstedt av Politiet',
	// ... more texts
];

export default function TextAnimation() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % texts.length);
		}, 4500);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='mt-8 flex items-center justify-center overflow-hidden relative w-[95%] h-[1.5em]'>
			<AnimatePresence>
				<motion.span
					key={index}
					initial={{ y: '100%' }}
					animate={{ y: 0 }}
					exit={{ y: '-100%' }}
					transition={{ duration: 1 }}
					className='absolute w-full text-center'
				>
					{texts[index]}
				</motion.span>
			</AnimatePresence>
		</div>
	);
}
