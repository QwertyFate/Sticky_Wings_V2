import React, { useEffect, useState } from "react";
import { AllData } from "../Utils/AllData";
import { useParams } from "react-router-dom";
import "./SlugPage.css"
import { WingsClassicData } from "../Utils/WingsMenu";
import { WingsPremiumData } from "../Utils/WingsMenu";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const SlugPage = () => {
    const [detail, setDetail] = useState([]);
    const { slug } = useParams();
    const [itemPrice, setItemPrice] = useState(0)
    const [nameChange, setNameChange] = useState("")
    const [selectedFlavors, setSelectedFlavors] = useState([])
    const [maxFlavors, setMaxFlavors] = useState(1)
    const carts = useSelector(store => store.cart.items);
    let ClassicFlavorsWings = null;
    let PremiumFlavorsWings = null;
    let VariationType;
    console.log(carts);
    useEffect (() => {
        const ObtainedData = AllData.filter(data => data.slug === slug);
        if (ObtainedData.length > 0 ) {
            setDetail(ObtainedData[0]);
            setNameChange(ObtainedData[0].name);
            if(ObtainedData[0].price){
            setItemPrice(ObtainedData[0].price);
            };
        }
 
    },[slug]);



    useEffect(() => {
        const updatePrice = () => {
            let basePrice = 0;
            if (detail.category == "wings") {
                if (nameChange.includes("Clutch")) basePrice = detail.clutchPrice;
                if (nameChange.includes("Peep")) basePrice = detail.peepPrice;
                if (nameChange.includes("Flock")) basePrice = detail.flockPrice;

                let premiumAdd = 0;
                selectedFlavors.forEach(flavor => {
                    if (WingsPremiumData.some(p => p.name === flavor)) {
                        premiumAdd = nameChange.includes("Clutch") ? 15 :
                                    nameChange.includes("Peep") ? 15 : 
                                    nameChange.includes("Flock") ? 25 : 0;
                    }
                });
                setItemPrice(basePrice + premiumAdd);
            };
    };

        updatePrice();
    }, [selectedFlavors, nameChange, detail]);

    const handleChange = (newName, newPrice) => {
        setNameChange(newName);
        setItemPrice(newPrice);
        setSelectedFlavors([]);
    };

    const handleFlavorSelection = (flavor) => {

        if (selectedFlavors.includes(flavor)) {
            setSelectedFlavors(selectedFlavors.filter((remain) => remain !== flavor));
        } else if (selectedFlavors.length < maxFlavors) {
            setSelectedFlavors([...selectedFlavors, flavor]);
        }
    }


    if (detail.category === "pasta")
        VariationType =
                <div>
                <button onClick={() => {setItemPrice(detail.soloPrice)}}><h2>Solo</h2></button>
                <button onClick={() => {setItemPrice(detail.sharingPrice)}}><h2>Sharing</h2></button>
                </div>

    if (detail.category === "wings") {
        VariationType =
                <div>
                <button onClick={() => (handleChange("Clutch Wings(6pcs)", detail.clutchPrice), setMaxFlavors(1))}><h2>Clutch(6pcs)</h2></button>
                <button onClick={() => (handleChange("Peep Wings(10pcs)", detail.peepPrice), setMaxFlavors(2))}><h2>Peeps(10pcs)</h2></button>
                <button onClick={() => (handleChange("Flock Wings(12pcs)", detail.flockPrice), setMaxFlavors(2))}><h2>Flock(12pcs)</h2></button>
                </div>
    
        

        ClassicFlavorsWings = 
        <div className="FlavorsContainerDetails">
            <h1 className="NameWingsFlavors">Classic Flavors</h1>
            <div className="flavorList">
                {WingsClassicData.map((data, index) => (
                <motion.h3
                whileHover={{scale:"1.1"}}
                whileTap={{scale:"0.9"}}
                 onClick={() => handleFlavorSelection(data.name)} className={`FlavorsSelect ${selectedFlavors.includes(data.name) ? "selected" : ""}`} key={index}>{data.name}</motion.h3>
                ))}
            </div>
        </div>

        PremiumFlavorsWings = 
        <div>
            <h1 className="NameWingsFlavors">Premium Flavors</h1>
            <div className="flavorList">
                {WingsPremiumData.map((data, index) => (
                <motion.h3
                whileHover={{scale:"1.1"}}
                whileTap={{scale:"0.9"}}
                 onClick={() => handleFlavorSelection(data.name)} className={`FlavorsSelect ${selectedFlavors.includes(data.name) ? "selected" : ""}`} key={index}>{data.name}</motion.h3>
                ))}
            </div>
        </div>
}   
      

    return(
        <div className="MainDetails">
            <img src={detail.image} className="SlugImage" />
            <div className="ProductDetails">
                 <h2>{`₱${itemPrice}`}</h2>
                <h1>{nameChange}</h1>
                {VariationType}
                <p>{selectedFlavors.join(",")}</p>
                <p>{detail.description}</p>
                <div>
                    {ClassicFlavorsWings}
                    {PremiumFlavorsWings}
                </div>
                
                
               

            </div>
        </div>
    );
}

export default SlugPage;