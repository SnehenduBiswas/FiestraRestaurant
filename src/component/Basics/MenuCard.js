import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <>
            <section className="main-card--container">
                { menuData.map((currElem) => {

                    const { id, name, category, image, description } = currElem;
                    
                    return(
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle"> {id} </span>
                                        <span className="card-author"> {category} </span>               
                                        <h2 className="card-title"> {name} </h2>
                                        <span className="class-description"> {description} </span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={image} alt="images" className="card-media"/>

                                    <div className="card-tag">Order Now !</div>
                                </div>
                            </div>
                        </>
                    );
                }) }
            </section>
        </>
    )
}

export default MenuCard