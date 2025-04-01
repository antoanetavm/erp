'use client';

import { useAppDispatch, useAppSelector } from '@/redux/redux';
import {
	setIsDarkMode,
	setIsSidebarCollapsed,
	setNewlanguage
} from '@/redux/state';
import { Bell, Menu, Moon, Settings, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';

const Navbar = () => {
	const dispatch = useAppDispatch();
	const isSidebarCollapsed = useAppSelector(
		(state) => state.global.isSidebarCollapsed
	);
	const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

	// const currentLanguage = useAppSelector((state) => state.global.language);

	const t = useTranslation();

	const toggleSidebar = () => {
		dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
	};

	const toggleDarkMode = () => {
		dispatch(setIsDarkMode(!isDarkMode));
	};

	const label = { inputProps: { 'aria-label': 'Switch language' } };
	return (
		<div className="flex justify-between items-center w-full mb-7">
			{/* LEFT SIDE */}
			<div className="flex justify-between items-center gap-5">
				<button
					className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
					onClick={toggleSidebar}
				>
					<Menu className="w-4 h-4" />
				</button>

				<div className="relative">
					<input
						type="search"
						placeholder={t.searchPlaceholder}
						className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
					/>

					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
						<Bell className="text-gray-500" size={20} />
					</div>
				</div>
			</div>

			{/* RIGHT SIDE */}
			<div className="flex justify-between items-center gap-5">
				<div className="hidden md:flex justify-between items-center gap-5">
					<Link href="/"> ERP system</Link>
					<div>
						<button onClick={toggleDarkMode}>
							{isDarkMode ? (
								<Sun className="cursor-pointer text-gray-500" size={24} />
							) : (
								<Moon className="cursor-pointer text-gray-500" size={24} />
							)}
						</button>
					</div>
					<div className="relative">
						<Bell className="cursor-pointer text-gray-500" size={24} />
						<span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
							3
						</span>
					</div>
					<div className="relative">
						<LanguageDropdown />
					</div>
					<hr className="w-0 h-7 border border-solid border-сl border-gray-300 mx-3" />
					<div className="flex items-center gap-3 cursor-pointer">
						<SvgIcon>
							{/* credit: cog icon from https://heroicons.com */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
								/>
							</svg>
						</SvgIcon>
						<span className="font-semibold">{t.inventoryModule}</span>
					</div>
				</div>
				<Link href="/modules/inventory/settings">
					<Settings className="cursor-pointer text-gray-500" size={24} />
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
