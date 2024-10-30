import { NEVER, RefinementCtx, ZodIssueCode } from 'zod';
import { FormErrorMessage } from '@/lib/constants/form-error-message';

export const validateAge = (value: string, ctx: RefinementCtx): number => {
	const parsedValue = parseInt(value, 10);
	if (isNaN(parsedValue)) {
		ctx.addIssue({
			code: ZodIssueCode.custom,
			message: FormErrorMessage.Number(),
		});

		return NEVER;
	}

	if (parsedValue < 0) {
		ctx.addIssue({
			code: ZodIssueCode.custom,
			message: FormErrorMessage.PositiveNumber(),
		});

		return NEVER;
	}

	return parsedValue;
};
