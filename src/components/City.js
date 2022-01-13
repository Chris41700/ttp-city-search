import React from 'react'

function City({ city }) {
    return (
        <>
            {city.map((cityState) => {
                return (
                    <div>
                        <li>{ cityState }</li>
                    </div>
                  )
            })}
        
    </>
    )
}

export default City