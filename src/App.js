import { useState } from "react";
import GoogleMap, { initializeApi } from "./GoogleMap";

initializeApi(
    {
        // loaderOptions - https://googlemaps.github.io/js-api-loader/interfaces/loaderoptions.html
        // apiKey: "{GOOGLE_MAPS_JS_API_KEY}"
    },
    {
        // defaultMapOptions - https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
    }
);

const SCREENS_COUNT = 5;

const App = () => {
    const [screenIndex, setScreenIndex] = useState(0);

    const createMapHandler = (map) => {
        // console.log("createMapHandler", map);
        if (screenIndex === 1) {
            // map.setOptions({
            //     center: { lat: 48, lng: 17 },
            //     zoom: 8,
            //     mapTypeId: "hybrid",
            // });
        }
        if (screenIndex === 3) {
            // map.setOptions({
            //     center: { lat: 50, lng: 15 },
            //     zoom: 12,
            //     mapTypeId: "roadmap",
            // });
        }
    };

    const destroyMapHandler = (map) => {
        // console.log("destroyMapHandler", map);
    };

    const mapOptions = {
        center: { lat: 50, lng: 15 },
        zoom: 12,
    };

    const menuButtons = [];
    for (let i = 0; i < SCREENS_COUNT; i++) {
        menuButtons.push(
            <button key={i} className="menu-button" onClick={() => setScreenIndex(i)} disabled={i === screenIndex}>
                Screen #{i}
            </button>
        );
    }
    const currentScreen = (
        <div className="screen">
            <h3>Screen #{screenIndex}</h3>
            {screenIndex % 2 === 1 && (
                <div style={{ width: 600, height: 400, border: "1px solid black" }}>
                    <GoogleMap
                        key={screenIndex}
                        onCreate={createMapHandler}
                        onDestroy={destroyMapHandler}
                        mapOptions={mapOptions}
                    />
                </div>
            )}
        </div>
    );
    return (
        <div className="app-container">
            <div className="menu-container">{menuButtons}</div>
            <div className="screen-container">{currentScreen}</div>
        </div>
    );
};

export default App;
