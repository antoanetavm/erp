import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import DashboardWrapper from './dashboardWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'ERP Inventory module',
	description: 'ERP Invenory module'
};

export default function InventoryLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <DashboardWrapper>{children}</DashboardWrapper>;
}
