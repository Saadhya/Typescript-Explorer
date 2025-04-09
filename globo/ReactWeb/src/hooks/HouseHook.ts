import { House } from "../types/house";
import config from "../config";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const useFetchHouses = () => {
  return useQuery<House[], AxiosError>({
    queryKey: ["houses"],
    queryFn: () =>
      axios
        .get(`${config.baseApiUrl}/houses`)
        .then((resp) => resp.data)
        .catch((error) => {
          console.error("Error fetching houses:", error); // Handle errors more visibly
          throw error;
        }),
  });
  // queryFn: async () => {
  //     const rsp = await axios.get(`${config.baseApiUrl}/houses`);
  //     return rsp.data;
  // }
};
export default useFetchHouses;
