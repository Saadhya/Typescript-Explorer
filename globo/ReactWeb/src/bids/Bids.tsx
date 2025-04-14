import React, { useState } from "react";
import { House } from "../types/house";
import { useAddBids, useFetchBids } from "../hooks/BidHooks";
import { Bid } from "../types/bid";
import ApiStatus from "../ApiStatus";
import { currencyFormatter } from "../config";

type Args = {
  house: House;
};
const Bids = ({ house }: Args) => {
  const { data, status, isSuccess } = useFetchBids(house.id);
  const addBidMutation = useAddBids();

  const emptyBid = {
    id: 0,
    houseId: house.id,
    bidder: "",
    amount: 0,
    createdAt: new Date(),
  };
  const [bid, setBid] = useState<Bid>(emptyBid);
  if (!isSuccess) return <ApiStatus status={status} />;
  const onBidSubmit = (bid: Bid) => {
    addBidMutation.mutate(bid);
    setBid(emptyBid);
  };
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Bidder</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
            {data && data.map((bid)=>(
                <tr key={bid.id}>
                    <th scope="row">{bid.id}</th>
                    <td>{bid.bidder}</td>
                    <td>{currencyFormatter.format(bid.amount)}</td>
                </tr>
            ))}
        </tbody>
      </table>
            <h2>Add new bid</h2>
      <div className="row">
        <div className="col-4">
            <input type="text" placeholder="Bidder" className="form-control" value={bid.bidder} onChange={(e)=>setBid({...bid, bidder:e.target.value})}/>
        </div>
        <div className="col-4">
            <input type="number" placeholder="Amount" className="form-control" value={bid.amount} onChange={(e)=>setBid({...bid, amount:parseInt(e.target.value)})}/>
        </div>
        <div className="col-4">
            <button className="btn btn-primary" onClick={()=>onBidSubmit(bid)}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Bids;
