import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@mui/material';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
	const t = useTranslation();
	return (
		<footer className="from-gray-200 to-gray-100 bg-gradient-to-br position-absolute bottom-0 w-full h-100 p-5">
			<Container>
				<div className="flex w-full">
					<div className="flex-2 ">
						<p className="text-center text-xs text-gray-500">
							{t.footer.year} {t.inventoryModule} <br />
							{t.footer.author}
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
