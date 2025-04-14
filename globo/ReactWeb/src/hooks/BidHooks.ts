import axios, { AxiosError, AxiosResponse } from "axios";
import { Bid } from "../types/bid";
import { Problem } from "../types/problem";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import config from "../config";

export const useFetchBids=(houseId:number)=>{
    return useQuery<Bid[],AxiosError<Problem>>({
        queryKey:['bids',houseId],
        queryFn:()=>axios.get(`${config.baseApiUrl}/house/${houseId}/bids`).then(resp=>resp.data),
        // throwOnError:(error)=>{
        //     console.error('Error fetching bids:',error);
        // }
    })
}
export const useAddBids=() =>{
    const queryClient= useQueryClient();
    return useMutation<AxiosResponse, AxiosError<Problem>, Bid>({
        mutationFn:(bid:Bid)=>axios.post(`${config.baseApiUrl}/house/${bid.houseId}/bid`,bid).then(resp=>resp.data),
        onSuccess:(resp, bid)=>{
            queryClient.invalidateQueries({queryKey:['bids', bid.houseId]})
        }
    })

}