import { useAppSelector } from '@/redux/redux';
import en from '@/dictionaries/en';
import bg from '@/dictionaries/bg';

const dictionaries = { en, bg };

export const useTranslation = () => {
	const language = useAppSelector((state) => state.global.language);
	return dictionaries[language as keyof typeof dictionaries];
};
