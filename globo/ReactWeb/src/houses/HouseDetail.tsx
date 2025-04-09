import React from "react";
import { useParams } from "react-router-dom";
import ApiStatus from "../ApiStatus";
import { currencyFormatter } from "../config";
import { useFetchHouseById } from "../hooks/HouseHook";
import defaultPhoto from "./defaultPhoto";

export const HouseDetail = () => {
  const { id } = useParams();
  if (!id) throw Error("House id is not provided");
  const houseId = parseInt(id);

  const { data, isSuccess, status } = useFetchHouseById(houseId);
  console.log(data);
  
  if (!isSuccess) return <ApiStatus status={status} />;
  if (!data) return <div>House not found</div>;

  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          <img
          
            src={defaultPhoto}
            alt={data.description}
            className="img-fluid w-60 h-60"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="themeFontColor text-warning text-center">
            {data.country}
          </h5>
        </div>
        <div className="row ">
          <h5 className="themeFontColor text-warning text-center">
            {data.address}
          </h5>
        </div>
        <div className="row ">
          <h5 className="themeFontColor text-warning text-center">
            {currencyFormatter.format(data.price)}
          </h5>
        </div>
      </div>
    </div>
  );
};
