'use client';

import React from 'react'
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type Props = Readonly<{
    data: {
        makes: {
            MakeId: number;
            MakeName: string;
        }[];
        years: string[];
    }
}>;

const btnClasses = {
    active: "opacity-100 animate-fade-in cursor-pointer",
    disabled: "opacity-30 cursor-default hover:bg-primary/100"
};

export default function FilterPage({ data }: Props) {
    const [selectedMake, setSelectedMake] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const { push } = useRouter();

    const isFormValid = selectedMake && selectedYear;

    const handleNext = () => {
        if (isFormValid) {
            push(`/result/${selectedMake}/${selectedYear}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-start pt-16 p-4 flex-1">
            <h1 className="text-2xl font-bold mb-4">Car Dealer Filter</h1>

            <Select
                onValueChange={(value) => setSelectedMake(value)}
                value={selectedMake}
            >
                <SelectTrigger className="w-[100%] md:w-[500px] mb-4">
                    <SelectValue placeholder={data.makes.length > 0 ? "Select Make" : "No makes found. Please try again"} />
                </SelectTrigger>
                <SelectContent className="w-[90vw] md:w-[500px] mb-4">
                    {data.makes.map((make) => (
                        <SelectItem key={make.MakeId} value={make.MakeId.toString()}>
                            {make.MakeName}
                        </SelectItem>
                    ))}

                </SelectContent>
            </Select>

            <Select
                onValueChange={(value) => setSelectedYear(value)}
                value={selectedYear}
            >
                <SelectTrigger className="w-[100%] md:w-[500px] mb-4">
                    <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent className="w-[90vw] md:w-[500px] mb-4">
                    {data.years.map((year) => (
                        <SelectItem key={year} value={year}>
                            {year}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <TooltipProvider>
                <Tooltip >
                    <TooltipTrigger asChild>
                        <Button
                            onClick={handleNext}
                            className={`mt-4 ${isFormValid ? btnClasses.active : btnClasses.disabled}`}
                        >
                            Next
                        </Button>
                    </TooltipTrigger>
                    {
                        !isFormValid && (
                            <TooltipContent>
                                <p>First select a make and year</p>
                            </TooltipContent>
                        )
                    }
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}