import { useState } from 'react'

export const PersonsInfo = (person)=>{
    let [isExpanded, setIsExpanded] = useState(false)

    return <>
            <h1>{person.name}</h1>
            {!isExpanded && <button onClick={()=>{setIsExpanded(!isExpanded)}}>Pokaż</button>}
            {isExpanded && <>
            <div>
                <h3>Telefon: {person.phone}</h3>
                <h3>Miasto: {person.city}</h3>
            </div>
            </>}
        </>
}

//export const PersonsList = (data)=>(data.persons.map(PersonsInfo))