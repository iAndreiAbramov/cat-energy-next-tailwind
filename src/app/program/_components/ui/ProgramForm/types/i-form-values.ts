export interface IFormValues {
	name: string;
	weightKg: number;
	ageYears: number;
	typeOfProgram: 'похудение' | 'набор массы' | 'не знаю';
	email: string;
	phone: string;
	comment: string;
	additional: string[];
}
