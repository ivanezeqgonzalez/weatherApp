import React from 'react';

const Clima = ({resultado}) => {
    const { name, main } = resultado;
    if(!name) return null;
    
    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {parseInt(main.temp - kelvin, 10)} &deg;C
                </p>
                <p>Temperatura Max: {parseInt(main.temp_max - kelvin, 10) } &deg;C</p>
                <p>Temperatura Min: {parseInt(main.temp_min - kelvin, 10) } &deg;C</p>
            </div>
        </div>
    )
} 

export default Clima;