import React from 'react';

const Starships = ({starships}) => {
    return ( 
        <div className="align_style">
            {starships.results.map((starship, index) =>(
                    <div key={index} className="card_style">
                        <p className="name_style">{starship.name}</p>
                        <hr className="hr_ele_style" />
                        <div className="info_style">
                            <p>
                                <strong>Model: </strong>{starship.model}
                            </p>
                            <p>
                                <strong>Passengers: </strong>{starship.passengers}
                            </p>
                            <p>
                                <strong>Length: </strong>{starship.length}
                            </p>
                            <p>
                                <strong>Created: </strong>{starship.created}
                            </p>
                        </div>
                    </div>
            ))}
        </div>
     );
}
 
export default Starships;