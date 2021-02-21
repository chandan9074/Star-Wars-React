import React from 'react';

const Species = ({species}) => {
    return ( 
        <div className="align_style">
            {species.results.map((specie, index) =>(
                    <div key={index} className="card_style">
                        <p className="name_style">{specie.name}</p>
                        <hr className="hr_ele_style" />
                        <div className="info_style">
                            <p>
                                <strong>Classification: </strong>{specie.classification}
                            </p>
                            <p>
                                <strong>Language: </strong>{specie.language}
                            </p>
                            <p>
                                <strong>Designation: </strong>{specie.designation}
                            </p>
                            <p>
                                <strong>Average Height: </strong>{specie.average_height}
                            </p>
                            <p>
                                <strong>Average Lifespan: </strong>{specie.average_lifespan}
                            </p>
                            <p>
                                <strong>Created: </strong>{specie.created}
                            </p>
                        </div>
                    </div>
            ))}
        </div>
     );
}
 
export default Species;