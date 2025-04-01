import { MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/redux';
import { setNewlanguage } from '@/redux/state';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {};

const LanguageDropdown = (props: Props) => {
	const currentLanguage = useAppSelector((state) => state.global.language);
	const dispatch = useAppDispatch();
	const handleChangeLanguage = (e: SelectChangeEvent) => {
		dispatch(setNewlanguage(e.target.value as string));
	};

	const t = useTranslation();
	return (
		<Select
			labelId="select-language-label"
			id="select-language"
			value={currentLanguage}
			onChange={handleChangeLanguage}
			className="text-gray-500"
		>
			<MenuItem value={'bg'}>
				<span className="text-gray-500">{t.switchLanguage.bg}</span>
			</MenuItem>
			<MenuItem value={'en'}>
				<span className="text-gray-500">{t.switchLanguage.en}</span>
			</MenuItem>
		</Select>
	);
};

export default LanguageDropdown;
