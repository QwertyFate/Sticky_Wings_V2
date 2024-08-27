import React, { useEffect, useState } from "react";
import { AllData } from "../Utils/AllData";
import { useParams } from "react-router-dom";
import "./SlugPage.css"
import { WingsClassicData } from "../Utils/WingsMenu";
import { WingsPremiumData } from "../Utils/WingsMenu";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

const SlugPage = () => {
    const [detail, setDetail] = useState([]);
    const { slug } = useParams();
    const [itemPrice, setItemPrice] = useState(0)
    const [nameChange, setNameChange] = useState("")
    const [selectedFlavors, setSelectedFlavors] = useState([])
    const [maxFlavors, setMaxFlavors] = useState(1)
    const [image, setImage] = useState("")
    const [variantselected, setVariantSelected] = useState(false);
    const [variantClicked, setVariantClicked] = useState('');
    const availableFlavor = maxFlavors - selectedFlavors.length;
    const [popUpTrigger, setPopUpTrigger] = useState(false);

    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const realName = `${nameChange} ${detail.category === "wings" || detail.category === "pasta" || detail.category === "wingsbox" ? `(${selectedFlavors})` : ""}`

    let ClassicFlavorsWings = null;
    let PremiumFlavorsWings = null;
    let VariationType;
    console.log(carts);
    useEffect (() => {
        const ObtainedData = AllData.filter(data => data.slug === slug);
        if (ObtainedData.length > 0 ) {
            setDetail(ObtainedData[0]);
            setNameChange(ObtainedData[0].name);
            setImage(ObtainedData[0].image);
            if(ObtainedData[0].price){
            setItemPrice(ObtainedData[0].price);
            };
        }
 
    },[slug]);

    const handleAddToCart = () => {
        dispatch(addToCart({
            ItemName: realName,
            quantity: 1,
            price: itemPrice,
            picture: image
        }))
        setPopUpTrigger(true);
    setTimeout(() => {
        setPopUpTrigger(false);
    }, 2000);
    }

    useEffect(() =>{
        if (detail.category === "wingsbox") {
            setMaxFlavors(3);
        }
    },[detail])


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
        setVariantSelected(true);
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
                <div className="VariationContainer">
                <motion.button className={`variationButton ${variantClicked === "Solo" ? "selected" : ""}`} onClick={() => (setItemPrice(detail.soloPrice), setSelectedFlavors(["Solo"]), setVariantSelected(true), setVariantClicked("Solo"))}
                whileHover={{scale:"1.2"}}
                whileTap={{scale:"0.8"}}
                >
                    <h2>Solo</h2>
                </motion.button>
                <motion.button className={`variationButton ${variantClicked === "Sharing" ? "selected" : ""}` }onClick={() => (setItemPrice(detail.sharingPrice), setSelectedFlavors(["Sharing"]), setVariantSelected(true), setVariantClicked("Sharing"))}
                whileHover={{scale:"1.2"}}
                whileTap={{scale:"0.8"}}
                >
                    <h2>Sharing</h2>
                </motion.button>
                </div>

    if (detail.category === "wings") {
        VariationType =
                <div className="VariationContainer">
                <motion.button className={`variationButton ${variantClicked === "Clutch(6pcs)" ? "selected" : ""}`} onClick={() => (handleChange("Clutch Wings(6pcs)", detail.clutchPrice), setMaxFlavors(1), setVariantClicked("Clutch(6pcs)"))}
                whileHover={{scale:"1.2"}}
                whileTap={{scale:"0.8"}}
                >
                    <h2>Clutch(6pcs)</h2>
                </motion.button>
                <motion.button className={`variationButton ${variantClicked === "Peeps(10pcs)" ? "selected" : ""}`} onClick={() => (handleChange("Peep Wings(10pcs)", detail.peepPrice), setMaxFlavors(2), setVariantClicked("Peeps(10pcs)"))}
                whileHover={{scale:"1.2"}}
                whileTap={{scale:"0.8"}}
                >
                    <h2>Peeps(10pcs)</h2>
                </motion.button>
                <motion.button className={`variationButton ${variantClicked === "Flock(12pcs)" ? "selected" : ""}`} onClick={() => (handleChange("Flock Wings(12pcs)", detail.flockPrice), setMaxFlavors(2), setVariantClicked("Flock(12pcs)"))}
                whileHover={{scale:"1.2"}}
                whileTap={{scale:"0.8"}}
                >
                    <h2>Flock(12pcs)</h2>
                </motion.button>
                </div>
    
    }
    if (detail.category === "wings" || detail.category === "wingsbox") {

       

        ClassicFlavorsWings = 
        <div className="FlavorsContainerDetails">
            <h1 className="NameWingsFlavors"> {availableFlavor == 1 ?  "You can choose 1 more flavor" : `Choose ${availableFlavor} flavors`}</h1>
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
                <h1>{nameChange}</h1>
                <p>{selectedFlavors.join(",")}</p>
                <p>{detail.description}</p>
                <h2>{`₱${itemPrice}`}</h2>
                {VariationType}
                
                
                <div>
                    {ClassicFlavorsWings}
                    {PremiumFlavorsWings}
                </div>
                {popUpTrigger? <p className="Popup">Item Added to Cart</p> : null}
                
                <motion.button
                 onClick={handleAddToCart} disabled={!variantselected && (detail.category === "wings" || detail.category === "pasta" )} className="addToCartButton"
                 whileTap={{scale: "0.8"}}>Add to Cart</motion.button>                
               

            </div>
        </div>
    );
}

export default SlugPage;