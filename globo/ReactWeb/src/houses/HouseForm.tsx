import React, { useState } from 'react'
import { House } from '../types/house';
import toBase64 from '../toBase64';
type Args={
    house:House;
    submitted:(house:House)=>void;
}
const HouseForm = ({house, submitted}:Args) => {
    const [houseState, setHouseState] = useState<House>({...house});
    const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async(e) => {
        e.preventDefault();
        submitted(houseState);
    }
    const onFileChanged = async(e:React.ChangeEvent<HTMLInputElement>)
        :Promise<void>=>{
            e.preventDefault();               
            e.target.files && e.target.files[0] &&  
            setHouseState({...houseState, photo:await toBase64(e.target.files[0])})
    }
    // const [errors, setErrors] = useState<{[key:string]:string}>({});
    // const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    //     const {name, value}= e.target;
    //     setHouseState({...houseState, [name]:value});
    // }
    // const handleSubmit=(e:React.FormEvent)=>{
    //     e.preventDefault();
    //     const errors: {[key:string]:string}={};
    //     if(houseState.address.trim().length===0){
    //         errors.address='Address is required';
    //     }
    //    
    //     if(Object.keys(errors).length>0){
    //         setErrors(errors);
    //         return;
    //     }
    //     submitted({...houseState});
    // }

  return (
    <div>
        <form className='mt-2'>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" name="address" value={houseState.address} onChange={(e)=>setHouseState({...houseState, address:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="country" className="form-label">Country</label>
                <input type="text" className="form-control" id="country" name="country" value={houseState.country} onChange={(e)=>setHouseState({...houseState, country:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" name="description" value={houseState.description} onChange={(e)=>setHouseState({...houseState, description:e.target.value})}></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" name="price" value={houseState.price} onChange={(e)=>setHouseState({...houseState, price:parseInt(e.target.value)})}/>
            </div>
            {/* add image input */}
            <div className="mb-3">
                <label htmlFor="photo" className="form-label">Image</label>
                <input type="file" className="form-control" id="photo" name="photo" onChange={onFileChanged}/>
            </div>
            <button type="submit" className="btn btn-primary" 
                onClick={onSubmit}
                disabled={!houseState.address}>
                Submit
            </button>
        </form>


    </div>
  )
}

export default HouseForm