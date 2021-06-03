Reusable \<GoogleMap /\> component for React apps...

```

import GoogleMap, { initializeApi } from "./GoogleMap";


// api initialization
initializeApi(
    {
        // loaderOptions - https://googlemaps.github.io/js-api-loader/interfaces/loaderoptions.html
        // apiKey: "{GOOGLE_MAPS_JS_API_KEY}"
    },
    {
        // defaultMapOptions - https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
    }
);


// component usage
const createMapHandler = (map) => { ... }
const destroyMapHandler = (map) => { ... }
const mapOptions = { ... }

//...

<GoogleMap onCreate={createMapHandler} onDestroy={destroyMapHandler} mapOptions={mapOptions} />

```
