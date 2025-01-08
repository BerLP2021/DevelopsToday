import React, { Suspense } from 'react';
import Loading from '../Loading/Loading';

type Props = Readonly<{
    data: {
        models: CarModelItem[],
        makeId: string,
        year: string
    }
}>

function ResultPage({ data: { models, makeId, year } }: Props) {
    return (
        <div className="flex flex-col items-start justify-start pt-16 p-4 flex-1">
            <h1 className="text-2xl font-bold mb-4">
                Models for {models[0].Make_Name} (make id: {makeId}) ({year} year of development)
            </h1>
            <Suspense fallback={<Loading />}>
                <ul className="list-disc list-inside">
                    {models.map((model) => (
                        <li key={model.Model_ID}>{model.Model_Name}</li>
                    ))}
                </ul>
            </Suspense>
        </div>
    )
}

export default ResultPage;