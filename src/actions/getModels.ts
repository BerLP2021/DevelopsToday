const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function getModelsByMakeIdYear(makeId: string, year: string) {
    try {
        const response = await fetch(
            `${baseUrl}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.Results as unknown as CarModelItem[];
    } catch (error) {
        console.error('Failed to fetch models:', error);
        return [];
    }
}

export async function getMakes() {
    try {
        const response = await fetch(`${baseUrl}/GetMakesForVehicleType/car?format=json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const res = data.Results.map((make: CarMakeItem) => ({
            MakeId: make.MakeId,
            MakeName: make.MakeName,
        })) as unknown as Array<Pick<CarMakeItem, 'MakeId' | 'MakeName'>>;
        return res;
    } catch (error) {
        console.error('Failed to fetch makes:', error);
        return [];
    }
}
