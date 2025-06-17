import { useEffect, useState } from "react"

export function Skills(){
    const [progressVal, setProgressVal] = useState(0);
    useEffect(()=>{
        setProgressVal(40);
    },[])
    return(
        <>
         <div>
            <progress style={{width: '400px', height: '20px'}} value={progressVal} min={0} max={100}></progress>
         </div>
        </>
    )
}