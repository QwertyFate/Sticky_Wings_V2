import React, { useCallback, useState } from "react";
import { GoogleMap, LoadScriptNext, MarkerF, Autocomplete} from "@react-google-maps/api";
import "./AddressLocator.css"


const MapLocateAddress = ({handleaddress}) => {

    const initialposition = {lat: 14.808920678568441, lng: 120.52575880298981};


    const containerStyle = {
        width: '500px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      };


    const [map, setMap] = useState(null);
    const [position, setPosition] = useState(initialposition);
    const [autocomplete, setAutocomplete] = useState(null);
    const [address, setAddress] = useState('');

    

    const onLoad = useCallback(function callback(map) {

        setMap(map); 
       map.panTo(initialposition)
    }, [initialposition])

    const onUnmount = useCallback(function callback() {
        setMap(null)
    }, [])

    const onAutocompleteLoad = (AutocompleteInstance) => {
        setAutocomplete(AutocompleteInstance);
    }

    const onPlaceChanged = () => {
        if(autocomplete) {
            const place = autocomplete.getPlace();
            if (place.geometry) {
                const newPosition = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };
                setPosition(newPosition);
                let newAddress= place.formatted_address;
                setAddress(newAddress);
                handleaddress(newAddress)
                if (map){
                    map.panTo(newPosition);
                }else {
                    console.log("No geometry data found for the place.")
                }
                
            }
        }
    }

    const onMarkerDragEnd = (event) => {
        const newPosition = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };
        
        setPosition(newPosition);
        // Update the address based on the new position
        fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${newPosition.lat},${newPosition.lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.results[0]) {
                    const newAddress = data.results[0].formatted_address
                    setAddress(newAddress);
                    handleaddress(newAddress)
                }
            })
            .catch((error) => console.error('Error fetching address:', error));
    };

    return  (
        <div>
        <div className="ContainerForTheWholeMap">
        <LoadScriptNext
         googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} 
         libraries={['places']}>
            <Autocomplete onLoad={onAutocompleteLoad} onPlaceChanged={onPlaceChanged}>
                <input className="InputBox" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter address" />
            </Autocomplete>
            <div className="GoogleMapContainer">
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={19}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <MarkerF position={position}
                        draggable
                        onDragEnd={onMarkerDragEnd} />
        </GoogleMap>
        </div>
      </LoadScriptNext>
      </div>
      </div>
  )
}
    

export default MapLocateAddress;