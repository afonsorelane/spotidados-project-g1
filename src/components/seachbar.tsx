import { useState } from "react"

export const SeachBar=()=>{
    const [search, setSearch]= useState("")
    return (
        <div>
            <input type="seach"  placeholder="seach" value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <ul>

            </ul>
        </div>
    )
}