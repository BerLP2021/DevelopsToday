import { start } from 'repl';

export const getYears = (startYear: number, endYear: number) => {
    const res = Array.from({ length: endYear - startYear + 1 }, (_, i) =>
        (startYear + i).toString(),
    );
    return res;
};
