import React from "react";
import { Link, useParams } from "react-router-dom";
import ApiStatus from "../ApiStatus";
import { currencyFormatter } from "../config";
import { useDeleteHouse, useFetchHouseById } from "../hooks/HouseHook";
import defaultPhoto from "./defaultPhoto";
import Bids from "../bids/Bids";

export const HouseDetail = () => {
  const { id } = useParams();
  if (!id) throw Error("House id is not provided");
  const houseId = parseInt(id);

  const { data, isSuccess, status } = useFetchHouseById(houseId);
  const deleteHouseMutation = useDeleteHouse();

  if (!isSuccess) return <ApiStatus status={status} />;
  if (!data) return <div>House not found</div>;

  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          <img
            src={data.photo ?data.photo: defaultPhoto}
            alt={data.description}
            className="img-fluid w-60 h-60"
          />
        </div>
        <div className="row mt-3">
          <div className="col-2">
            <Link className="btn btn-primary w-100" to={`/house/update/${data.id}`}>Edit</Link>
          </div>
          <div className="col-2">
            <button className="btn btn-danger w-100" onClick={()=>{
              if(window.confirm("Are you sure you want to delete this house?")){
                deleteHouseMutation.mutate(data);
              }
            }}>Delete</button>
          </div>
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
        <Bids house={data} />
      </div>
    </div>
  );
};
