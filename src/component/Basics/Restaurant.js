import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import MenuCard from './MenuCard'

const uniqueList = [
    ...new Set(Menu.map((currElem) => {
        return currElem.category;
    })
    ), 
    "All",
];

const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu);

    /*const filterItem = (category) => {
        const updatedList = Menu.filter((currElem) => {
            return currElem.category === category;
        });

        setMenuData(updatedList);
    }*/

    const filterItem = (category) => {

        if(category === "All"){
            setMenuData(Menu);
            return;
        }

        const checkCategory = (currItem) => {
            return currItem.category === category;
        }

        const updatedList = Menu.filter(checkCategory);

        setMenuData(updatedList);
    }

    return (
        <>
            <nav className="navbar-top">
                <div className="btn-group">
                    {
                        uniqueList.map((currElem) => {
                            return(
                                <button className="btn-group__item" onClick={() => filterItem(currElem)}> 
                                    {currElem} 
                                </button>
                            );
                        })
                    }
                </div>
            </nav>

            <div className="bg-image">
                <MenuCard menuData={menuData} />
            </div>

            <nav className="navbar-bottom">
                <div className="nav-bottom-left">
                    Fiestra
                    <div className="nav-bottom-left-subtext">A Premium Restaurant</div>
                </div>
                <div className="nav-bottom-center">
                    Location : <br /> Esplanade, Kolkata
                </div>
                <div className="nav-bottom-right">
                    Contact Details: <br /> +91 1234-5678
                </div>
            </nav>
        </>
    )
}

export default Restaurant