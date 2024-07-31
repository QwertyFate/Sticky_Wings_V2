import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import '../Pages/Menu.css'
import SampleData from "../Utils/data";


const MenuPage = () => {


    const GetList = SampleData.map(sample => {
        return(
        <li className="cardItem">
            {sample.Picture}
            <h2>{sample.Category}</h2>
        </li>
        );
    });
 

    return (
        <ul className="cardList">
            {GetList}
        </ul>
    );
};

export default MenuPage;