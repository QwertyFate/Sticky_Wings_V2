import React from "react";
import "./location.css"
import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import markerPic from './pics/Mascots/Flag.png';
import BuildingPic from "./pics/building.png";
import AddressIcon from "./pics/map.png";
import FacebookIcon from "./pics/facebook.gif";
import InstagramIcon from "./pics/Instagram.gif";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { Link } from "react-router-dom";

    const LocationSection = () => {
        const position = {lat:14.808920678568441, lng:120.52575880298981};
        const positionMarker = {lat:14.808859243047836, lng:120.5257609942156}

        return(
            <div className="divider">
                <div className="LocationInfo">
                    <Animator animation={ZoomIn(0.5, 1)}>
                        <p className="ContactUs"> <img className="contactPic" src={AddressIcon} />Contact Us</p>
                    </Animator>
                    <div className="LocationDivider">
                        <img className="BuildingPic" src={BuildingPic} />
                        <div className="DescriptionsforContact">
                            <Animator animation={ZoomIn(0.8, 1)}>
                            <Link to={"https://www.google.com/maps/uv?pb=!1s0x339669326ef65137%3A0xef3bbbc5784cc7a2!3m1!7e115!4s%2Fmaps%2Fplace%2Fsticky%2Bwings%2Bph%2Bgoogle%2Bmap%2F%4014.8088434%2C120.5257348%2C3a%2C75y%2C36.9h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sU-H9fuPdu0uez3ntIJDZQA*212e0*214m2*213m1*211s0x339669326ef65137%3A0xef3bbbc5784cc7a2%3Fsa%3DX%26ved%3D2ahUKEwidluKB39CHAxXwsVYBHd9aC5MQpx96BAhAEAA!5ssticky%20wings%20ph%20google%20map%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sU-H9fuPdu0uez3ntIJDZQA&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111"} className="GoogleMap">   <div className="DescriptionforContact"><img className="AddressIcon" src={markerPic} /><p className="Address">: 235 Leona Subdivision Orani Bataan</p></div></Link>
                            </Animator>
                            <Animator animation={ZoomIn(0.8, 1)}>
                               <Link to={"https://www.facebook.com/stickywingsph/"} className="facebookLink"> <div className="Description2forContact"><img className="facebookIcon" src={FacebookIcon} /><p className="atSticky">:@STICKYWINGSPH</p></div></Link>
                            </Animator>
                            <Animator animation={ZoomIn(0.8, 1)}>
                               <Link to={"https://www.instagram.com/stickywingsph/"} className="InstagramLink"> <div className="Description3forContact"><img className="InstagramIcon" src={InstagramIcon} /><p className="Instagramlink">:@STICKYWINGSPH</p></div></Link>
                            </Animator>
                            <div>Telephone Number</div>
                        </div>
                    </div>
                </div>
                <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <div className="GoogleMap">
                    <Map defaultZoom={19}
                    defaultCenter={position}
                    mapId={"d10d65dc3e02388"}
                    fullscreenControl={false}
                    >
                        <AdvancedMarker position={positionMarker}>
                            <img src={markerPic} width={70} height={50} />
                        </AdvancedMarker>
                    </Map>
                </div>
                </APIProvider>
                
            </div>
            
        );
    };


export default LocationSection;