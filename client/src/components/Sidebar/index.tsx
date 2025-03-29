'use client';

import { useAppDispatch, useAppSelector } from '@/redux/redux';
import { setIsSidebarCollapsed } from '@/redux/state';
import {
	Archive,
	CircleDollarSign,
	Clipboard,
	Layout,
	LucideIcon,
	Menu,
	SlidersHorizontal,
	User
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { useTranslation } from '@/hooks/useTranslation';

interface SidebarLinkProps {
	href: string;
	icon: LucideIcon;
	label: string;
	isCollapsed: boolean;
}

const SidebarLink = ({
	href,
	icon: Icon,
	label,
	isCollapsed
}: SidebarLinkProps) => {
	const pathname = usePathname();
	const isActive =
		pathname === href || (pathname === '/' && href === '/dashboard');

	return (
		<Link href={href}>
			<div
				className={`cursor-pointer flex items-center ${
					isCollapsed ? 'justify-center py-4' : 'justify-start px-8 py-4'
				}
        hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
					isActive ? 'bg-blue-200 text-white' : ''
				}
      }`}
			>
				<Icon className="w-6 h-6 !text-gray-700" />
				<span
					className={`${
						isCollapsed ? 'hidden' : 'block'
					} font-medium text-gray-700`}
				>
					{label}
				</span>
			</div>
		</Link>
	);
};

const Sidebar = () => {
	const t = useTranslation();
	const dispatch = useAppDispatch();
	const isSidebarCollapsed = useAppSelector(
		(state) => state.global.isSidebarCollapsed
	);

	const toggleSidebar = () => {
		dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
	};

	const sidebarClassNames = `fixed flex flex-col ${
		isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'
	} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

	return (
		<div className={sidebarClassNames}>
			{/* TOP LOGO */}
			<div
				className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
					isSidebarCollapsed ? 'px-5' : 'px-8'
				}`}
			>
				<SvgIcon>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="size-10"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
						/>
					</svg>
				</SvgIcon>
				<h1
					className={`${
						isSidebarCollapsed ? 'hidden' : 'block'
					} font-extrabold text-2xl`}
				>
					{t.inventoryModule}
				</h1>

				<button
					className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
					onClick={toggleSidebar}
				>
					<Menu className="w-4 h-4" />
				</button>
			</div>

			{/* LINKS */}
			<div className="flex-grow mt-8">
				<SidebarLink
					href="/modules/inventory/dashboard"
					icon={Layout}
					label={t.dashboard}
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink
					href="/modules/inventory/inventory"
					icon={Archive}
					label={t.inventory}
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink
					href="/modules/inventory/products"
					icon={Clipboard}
					label={t.products}
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink
					href="/modules/inventory/users"
					icon={User}
					label={t.users}
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink
					href="/modules/inventory/settings"
					icon={SlidersHorizontal}
					label={t.settings}
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink
					href="/modules/inventory/expenses"
					icon={CircleDollarSign}
					label={t.expenses}
					isCollapsed={isSidebarCollapsed}
				/>
			</div>

			{/* FOOTER */}
			<div className={`${isSidebarCollapsed ? 'hidden' : 'block'} mb-10`}>
				<p className="text-center text-xs text-gray-500">
					{t.footer.year} {t.inventoryModule} <br />
					{t.footer.author}
				</p>
			</div>
		</div>
	);
};

export default Sidebar;
