import { AxiosError } from "axios"
import { Problem } from "./types/problem"

type Args={
    error:AxiosError<Problem>
}
const ValidationSummary = ({error}:Args) => {
    if(error.response?.status!==400) return <></>
    const errors= error.response.data.errors;

  return (
    <div className="text-danger">
        Please fix the following errors:
        <ul>
            {Object.entries(errors).map(([key, value])=>{
                return <li key={key}>{value.join(', ')}</li>
            })}
        </ul>
    </div>
  )
}

export default ValidationSummary