'use client';
import React from 'react';
import { Button, Grid2 } from '@mui/material';
import TopNavigation from '@/components/LandingComponents/TopNavigation';
import { Container } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import Footer from '@/components/LandingComponents/Footer';

export default function LandingPage() {
	const t = useTranslation();
	return (
		<>
			<TopNavigation />
			<section className="from-gray-200 to-gray-300 bg-gradient-to-brh-screen flex items-top justify-center text-center  mt-10">
				<Container>
					<div className="mainTop">
						<div className="absolute">
							<Grid2 container spacing={2}>
								<Grid2 size={{ xs: 12, sm: 6 }}>
									<div className=" pt-40 ">
										{t.landingPage.main}
										<div className="justify-center pt-10">
											<Button
												size="small"
												variant="contained"
												href={'/modules/inventory'}
											>
												{t.inventoryModule}
											</Button>
										</div>
									</div>
								</Grid2>
								<Grid2 size={{ xs: 12, sm: 6 }}>
									<div>
										<Image
											src={`/images/inventory_module.png`}
											alt={'product'}
											width={350}
											height={350}
											className="m-3 "
										/>
									</div>
								</Grid2>
							</Grid2>
						</div>
					</div>
				</Container>
			</section>
			<Footer />
		</>
	);
}
