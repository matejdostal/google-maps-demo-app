import { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

// -------------------------------------------------------------------

let loaderOptions = {};
let defaultMapOptions = {};

const instances = [];

const initializeApi = (
    _loaderOptions, // https://googlemaps.github.io/js-api-loader/interfaces/loaderoptions.html
    _defaultMapOptions // https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
) => {
    loaderOptions = _loaderOptions;
    defaultMapOptions = _defaultMapOptions || {};
};

const createInstance = () => {
    const element = document.createElement("div");
    element.style.width = "100%";
    element.style.height = "100%";
    return new window.google.maps.Map(element, defaultMapOptions);
};

const getInstance = () => {
    return instances.length > 0 ? instances.pop() : createInstance();
};

const getInstanceAsync = async () => {
    return new Loader(loaderOptions).load().then(() => getInstance());
};

const releaseInstance = (instance) => {
    instances.push(instance);
};

const destroyInstance = (instance) => {
    instance = null;
};

export { initializeApi };

// -------------------------------------------------------------------

const GoogleMap = ({ onCreate, onDestroy, mapOptions }) => {
    const [map, setMap] = useState(null);
    const wrapperElRef = useRef(null);

    useEffect(() => {
        if (!map) {
            getInstanceAsync().then((instance) => setMap(instance));
        } else {
            if (wrapperElRef.current) {
                wrapperElRef.current.appendChild(map.getDiv());
                if (mapOptions) {
                    map.setOptions(mapOptions);
                }
                onCreate(map);
            }
        }
        return () => {
            if (map) {
                if (map.getDiv() && map.getDiv().parentElement) {
                    map.getDiv().parentElement.removeChild(map.getDiv());
                }
                onDestroy(map);
                releaseInstance(map);
            }
        };
    }, [map, wrapperElRef]);

    return <div style={{ width: "100%", height: "100%" }} ref={wrapperElRef}></div>;
};

export default GoogleMap;
