Reusable \<GoogleMap /\> component for React apps...

```

import GoogleMap, { initializeApi } from "./GoogleMap";


// api initialization
initializeApi(
    {
        // apiKey: "{GOOGLE_MAPS_JS_API_KEY}",
        // https://googlemaps.github.io/js-api-loader/interfaces/loaderoptions.html
    },
    {
        // https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
    }
);


// component usage
const createMapHandler = (map) => { ... }
const destroyMapHandler = (map) => { ... }
const mapOptions = { ... }

//...

<GoogleMap onCreate={createMapHandler} onDestroy={destroyMapHandler} mapOptions={mapOptions} />

```
