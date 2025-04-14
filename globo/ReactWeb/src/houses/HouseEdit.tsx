import { useParams } from "react-router-dom";
import { useFetchHouseById, useUpdateHouse } from "../hooks/HouseHook";
import ApiStatus from "../ApiStatus";
import HouseForm from "./HouseForm";
import ValidationSummary from "../ValidationSummary";

const HouseEdit = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) throw Error("House id is not provided");
  const houseId = parseInt(id);
  if (isNaN(houseId)) throw Error("House id is not a number");
  const { data, status, isSuccess } = useFetchHouseById(houseId);
  const updateHouseMutation = useUpdateHouse();

  if (!isSuccess) return <ApiStatus status={status} />;

  return (
    <>
    {updateHouseMutation.isError && (<ValidationSummary error={updateHouseMutation.error}/>)}
    <HouseForm
      house={data}
      submitted={(house) => {
        updateHouseMutation.mutate(house);
      }}
    />
    </>
    
  );
};

export default HouseEdit;
