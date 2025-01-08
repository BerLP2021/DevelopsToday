import FilterPage from "@/components/Pages/FilterPage";
import { getMakes } from "@/actions/getModels";
import { getYears } from "@/helpers/getYears";

export default async function page() {
  const years = getYears(2015, new Date().getFullYear());
  const makes = await getMakes();

  return (
    <FilterPage data={{ makes, years }} />
  )
}
