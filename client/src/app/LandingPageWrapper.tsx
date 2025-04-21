'use client';
import React, { useEffect } from 'react';
import StoreProvider, { useAppSelector } from '@/redux/redux';

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
	const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.add('light');
		}
	});

	return (
		<div
			className={`${
				isDarkMode ? 'dark' : 'light'
			} flex bg-gray-50 text-gray-900 w-full min-h-screen`}
		>
			<main className="flex flex-col w-full h-full">{children}</main>
		</div>
	);
};
export default function LandingPageWrapper({
	children
}: {
	children: React.ReactNode;
}) {
	return <LandingPageLayout>{children}</LandingPageLayout>;
}
