import { useState } from 'react'

export const PersonsForm = ({onAddPerson})=>{
    let [isExpanded, setIsExpanded] = useState(false)

    let [name, setName] = useState("")
    let [phone, setPhone] = useState("")
    let [city, setCity] = useState("")

    return <>
        {!isExpanded && <button onClick={()=>{setIsExpanded(!isExpanded)}}>Dodaj</button>}
        {isExpanded && <>
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                //console.log(e)
                onAddPerson({name,phone,city})
                setIsExpanded(false)
            }}>
                <input onChange={(e)=>{setName(e.target.value)}} defaultValue={name} type="text" name="name" placeholder='Imię i nazwisko'/>
                <input onChange={(e)=>{setPhone(e.target.value)}} defaultValue={phone} type="text" name="phone" placeholder='Telefon'/>
                <input onChange={(e)=>{setCity(e.target.value)}} defaultValue={city} type="text" name="city" placeholder='Miasto'/>
                <button disabled={name.length==0 || phone.length==0}>Zapisz</button>
            </form>
        </div>
        </>}
    </>
}