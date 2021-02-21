import React, { Component } from 'react';


const Characters = ({peoples}) => {
    return ( 
        <div className="align_style">
            {peoples.results.map((people, index) =>(
                    <div key={index} className="card_style">
                        <p className="name_style">{people.name}</p>
                        <hr className="hr_ele_style" />
                        <div className="info_style">
                            <p>
                                <strong>BirthDay: </strong>{people.birth_year}
                            </p>
                            <p>
                                <strong>Gender: </strong>{people.gender}
                            </p>
                            <p>
                                <strong>Height: </strong>{people.height}
                            </p>
                        </div>
                    </div>
            ))}
        </div>
     );
}
 
export default Characters;