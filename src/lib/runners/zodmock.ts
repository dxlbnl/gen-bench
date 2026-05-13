import { generateMock } from '@anatine/zod-mock';
import { flatSchema3 } from '../schemas/flat';
import { nestedSchema3 } from '../schemas/nested';
import { arraySchema3 } from '../schemas/array';

type SchemaKey = 'flat' | 'nested' | 'array';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const g = generateMock as (schema: any) => unknown;
const generators: Record<SchemaKey, () => unknown> = {
	flat: () => g(flatSchema3),
	nested: () => g(nestedSchema3),
	array: () => g(arraySchema3)
};

export const runZodMock = {
	flat: () => generators.flat(),
	nested: () => generators.nested(),
	array: () => generators.array(),
	batch: (schema: SchemaKey, n: number) => Array.from({ length: n }, generators[schema])
};
