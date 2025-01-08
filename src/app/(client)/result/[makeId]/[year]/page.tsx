import { Metadata } from "next";

import { getModelsByMakeIdYear, getMakes } from "@/actions/getModels";
import { getYears } from "@/helpers/getYears";
import ResultPage from "@/components/Pages/ResultPage";


export const metadata: Metadata = {
    title: "Car Dealer App | Models list",
    description: "Test assessment created by Dude",
};
export const revalidate = 86400;

export const dynamicParams = true;

export async function generateStaticParams() {
    const makes = await getMakes();

    const years = getYears(2015, new Date().getFullYear());

    const params = [];

    for (const make of makes) {
        for (const year of years) {
            params.push({ makeId: make.MakeId.toString(), year });
        }
    }
    return params;
}

type Props = Readonly<{ params: { makeId: string; year: string } }>;

export default async function page({ params: { makeId, year } }: Props) {
    const models = await getModelsByMakeIdYear(makeId, year);
    const makes = await getMakes();
    const make = makes.find((make) => make.MakeId.toString() === makeId);

    if (models.length === 0) {
        return (
            <div className="flex flex-col items-center justify-start pt-16 p-4 flex-1 text-2xl font-bold mb-4">
                No models found for {make?.MakeName} ({year} year of development)
            </div>
        );
    }

    return (
        <ResultPage data={{ models, makeId, year }} />
    );
}
