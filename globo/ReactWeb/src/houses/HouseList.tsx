import { House } from "../types/house";
import useFetchHouses from "../hooks/HouseHook";
import { currencyFormatter } from "../config";
import ApiStatus from "../ApiStatus";

const HouseList = () => {
  const { data, status, isSuccess } = useFetchHouses();

  //   const [houses, setHouses] = useState<House[]>([]);
  //   const fetchHouses = async () => {
  //     const rsp = await fetch(`${config.baseApiUrl}/houses`);
  //     const houses = await rsp.json();
  //     setHouses(houses);
  //   };
  //   useEffect(() => {
  //     fetchHouses();
  //   }, [0]);
  if (!isSuccess) {
    return <ApiStatus status={status} />;
  }
  return (
    <div>
      <div className="row mb-2">
        <h5 className="themeFontColor text-warning text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">country</th>
            <th scope="col">description</th>
            <th scope="col">address</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((house: House) => (
              <tr key={house.id}>
                <th scope="row">{house.id}</th>
                <td>{house.desciption}</td>
                <td>{house.country}</td>
                <td>{house.address}</td>
                <td>{currencyFormatter.format(house.price)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default HouseList;
