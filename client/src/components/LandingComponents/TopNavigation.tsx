'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTranslation } from '@/hooks/useTranslation';
import { Switch } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/redux';
import { setIsDarkMode, toggleLanguage } from '@/redux/state';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';
import { Bell, Moon, Settings, Sun } from 'lucide-react';

export default function TopNavigation() {
	// const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const t = useTranslation();
	const dispatch = useAppDispatch();
	const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

	const currentLanguage = useAppSelector((state) => state.global.language);
	const toggleDarkMode = () => {
		dispatch(setIsDarkMode(!isDarkMode));
	};

	const setNewLanguage = () => {
		dispatch(toggleLanguage(!currentLanguage));
	};

	const label = { inputProps: { 'aria-label': 'Switch language' } };
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<div className="fixed inset-x-0 top-0 z-10 border-b border-gray-950/5 dark:border-white/10">
				<div className="bg-grey-400 ">
					<div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
						<div className="flex items-center gap-4">
							<div className="relative text-xl text-gray-600">
								{t.erp.toUpperCase()} |
							</div>
							<div className="relative">
								<button
									type="button"
									className="text-xl text-cool-gray-400"
									onClick={handleClick}
								>
									<h1>{t.landingPage.modules}</h1>
								</button>
								<Menu
									id="basic-menu"
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
								>
									<MenuItem onClick={handleClose}>
										<Link href="/modules/inventory/dashboard" color="primary">
											{t.inventoryModule}
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose} disabled>
										<Link href="/">{t.distributorModule}</Link>
									</MenuItem>
									<MenuItem onClick={handleClose} disabled>
										<Link href="">{t.crmModule}</Link>
									</MenuItem>
								</Menu>
							</div>
						</div>

						<div className="flex items-center gap-6 max-md:hidden">
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
								<label>{t.switchLanguage}</label>
								<Switch
									{...label}
									defaultChecked
									onChange={setNewLanguage}
									color="default"
								/>
								<Button color="inherit">| Login</Button>
							</div>
						</div>
						<div className="flex items-center gap-2.5 md:hidden"></div>
					</div>
				</div>
			</div>
		</Box>
	);
}
