import { House } from "../types/house";
import config from "../config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

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
export const useFetchHouseById = (id: number) => {
  return useQuery<House, AxiosError>({
    queryKey: ["houses", id],
    queryFn: () =>
      axios
        .get(`${config.baseApiUrl}/house/${id}`)
        .then((resp) => resp.data)
        .catch((error) => {
          console.error("Error fetching house:", error); // Handle errors more visibly
          throw error;
        }),
  });
}
export const useAddHouse=()=>{
  const nav= useNavigate();
  const queryClient = useQueryClient();

  return useMutation<House, AxiosError, House>({
    mutationFn:(h) =>
      axios
        .post(`${config.baseApiUrl}/house`, h),
        onSuccess:()=>{
          queryClient.invalidateQueries({queryKey:['houses']});
          nav('/')
        }
  });


}
export const useUpdateHouse=()=>{
  const nav= useNavigate();
  const queryClient = useQueryClient();

  return useMutation<House, AxiosError, House>({
    mutationFn:(h) =>
      axios
        .put(`${config.baseApiUrl}/houses`, h),
        // axios res objet _ and 
        onSuccess:(_, house)=>{
          queryClient.invalidateQueries({queryKey:['houses']});
          nav(`/house/${house.id}`);
        }
  });
}
export const useDeleteHouse=()=>{
  const nav= useNavigate();
  const queryClient = useQueryClient();

  return useMutation<House, AxiosError, House>({
    mutationFn:(id) =>
      axios
        .delete(`${config.baseApiUrl}/houses/${id}`),
        onSuccess:()=>{
          queryClient.invalidateQueries({queryKey:['houses']});
          nav(`/`);
        }
  });
}
export default useFetchHouses;