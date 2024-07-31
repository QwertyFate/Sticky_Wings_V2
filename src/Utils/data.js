import React from "react"
import ClassicPicture from "../Components/pics/GameBoy_Classic_Flavors.png"
import PremiumPicture from "../Components/pics/deliveryFooter.jpg";


const SampleData = [{
    Category: "Classic Flavor",
    Picture: <img className="flavorPic" src= {ClassicPicture} />
},
{
    Category:"Premium Flavors",
    Picture: <img className="flavorPic" src= {PremiumPicture} />
}]

export default SampleData;