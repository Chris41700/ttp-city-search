import REACT, { useEffect, useState } from 'react'
import City from "./City"

const CitySearch = () => {
    const [city, setCity] = useState([]);
    const [filteredData, setFilteredData] = useState("");

    const getCity = async () => {
        try {
            const response = await fetch(`http://ctp-zip-api.herokuapp.com/city/${filteredData}`)
            //const response = await fetch(`http://ctp-zip-api.herokuapp.com/city/SPRINGFIELD`)
            console.log(response)

            const jsonData = await response.json()
            console.log(jsonData)

            setCity(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getCity();
    }, [filteredData])

    return (
        <>
            <h1 className = "text-center mt-5">
                City Search
            </h1>
            
            <div>
                <h6>City: </h6>
            </div>
            <form>
                <input 
                    type = "text" 
                    className = "form-control"
                    placeholder = "MANHATTAN"
                    value = {filteredData}
                    onChange = {event => setFilteredData(event.target.value)}>
                </input>
            </form>

            <City city = { city } />
        </>
    )
}

export default CitySearch