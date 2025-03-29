'use client';

import { useGetUsersQuery } from '@/redux/state/api';
import Header from '@/components/Header';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTranslation } from '@/hooks/useTranslation';

const columns: GridColDef[] = [
	{ field: 'userId', headerName: 'ID', width: 90 },
	{ field: 'name', headerName: 'Name', width: 200 },
	{ field: 'email', headerName: 'Email', width: 200 }
];

const Users = () => {
	const { data: users, isError, isLoading } = useGetUsersQuery();
	const t = useTranslation();

	if (isLoading) {
		return <div className="py-4">{t.loading}</div>;
	}

	if (isError || !users) {
		return (
			<div className="text-center text-red-500 py-4">
				{t.failedToFetchUsers}
			</div>
		);
	}

	return (
		<div className="flex flex-col">
			<Header name={t.users} />
			<DataGrid
				rows={users}
				columns={columns}
				getRowId={(row) => row.userId}
				checkboxSelection
				className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
			/>
		</div>
	);
};

export default Users;
