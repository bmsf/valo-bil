import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import TextAnimation from '@/components/text-animation';
import FilterContainer from '@/components/filter-container';

export default function Home() {
	return (
		<section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
			<div className='inline-block max-w-lg text-center justify-center'>
				<h1 className={title()}>Oppdag&nbsp;</h1>
				<h1 className={title()}>kvalitets</h1>
				<br />
				<h1 className={title()}>bruktbiler&nbsp;</h1>
				<h1 className={title()}>hos Valo Bil</h1>
				<h2 className={subtitle({ class: 'mt-4' })}>
					Vi hjelper deg med din neste bil
				</h2>
			</div>

			<div className='flex gap-3'>
				<Link
					href={'#'}
					className={buttonStyles({
						color: 'primary',
						radius: 'full',
						variant: 'shadow',
					})}
				>
					Om oss
				</Link>
				<Link
					// isExternal
					className={buttonStyles({ variant: 'bordered', radius: 'full' })}
					href={'#'}
					// href={siteConfig.links.github}
				>
					{/* <GithubIcon size={20} /> */}
					Lokasjon
				</Link>
			</div>
			<TextAnimation />
			<FilterContainer />
			
		</section>
	);
}
