const MapViewModel = require("./map-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new MapViewModel();
}

exports.onNavigatingTo = onNavigatingTo;


// const mapbox = require("nativescript-mapbox");

function onMapReady(args) {
  // you can tap into the native MapView objects (MGLMapView for iOS and com.mapbox.mapboxsdk.maps.MapView for Android)
  const nativeMapView = args.ios ? args.ios : args.android;
  console.log(`Mapbox onMapReady for ${args.ios ? "iOS" : "Android"}, native object received: ${nativeMapView}`);

  // .. or use the convenience methods exposed on args.map, for instance:
  args.map.addMarkers([
    {
        lat: 41.224997,
        lng: -111.980996,
        title: "Ogden",
        subtitle: "2393 S. Wall Ave.",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { 
          // console.log("derp"); 
          // MapViewModel.frame.navigate("./modal/modal");
        }
      },
      {
        lat: 41.188679,
        lng: -112.039368,
        title: "Roy",
        subtitle: "4155 S. Sandridge Dr.",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { console.log("'derp2"); }
      },
      {
        lat: 41.094714,
        lng: -112.013816,
        title: "Clearfield",
        subtitle: "1250 S. State St.",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { console.log("'Nice location' marker callout tapped"); }
      },
      {
        lat: 41.056966,
        lng: -111.965069,
        title: "Layton",
        subtitle: "150 S. Main St.",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { console.log("'Nice location' marker callout tapped"); }
      },
      {
        lat: 40.987232,
        lng: -111.903571,
        title: "Farmington",
        subtitle: "450 N. 850 W.",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { console.log("'Nice location' marker callout tapped"); }
      },
      {
        lat: 40.881207,
        lng: -111.902819,
        title: "Woods Cross",
        subtitle: "750 S. 800 W.",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { console.log("'Nice location' marker callout tapped"); }
      },
      {
        lat: 40.772032,
        lng: -111.905237,
        title: "North Temple",
        subtitle: "500 W. North Temple",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { console.log("'Nice location' marker callout tapped"); }
      },
    {
      lat: 40.280155,
      lng: -111.726463,
      title: "Orem Central",
      subtitle: "Really really nice location",
      selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
      onCalloutTap: function() { console.log("'Nice location' marker callout tapped"); }
    },
    {
        lat: 40.224751,
        lng: -111.660579,
        title: "Provo Station",
        subtitle: "690 S. University Ave.",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { console.log("'Nice location' marker callout tapped"); }
      },
      {
        lat: 40.280084,
        lng: -111.726414,
        title: "Orem Station",
        subtitle: "1350 W. 900 S.",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { console.log("'Orem Selected'"); }
      },
      {
        lat: 40.373743,
        lng: -111.819200,
        title: "American Fork Station",
        subtitle: "782 W. 200 S.",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { console.log("'Nice location' marker callout tapped"); }
      },
      {
        lat: 40.425604,
        lng: -111.896179,
        title: "Lehi Station",
        subtitle: "3101 N. Ashton Blvd.",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { console.log("'Nice location' marker callout tapped"); }
      },
      {
        lat: 40.515122,
        lng: -111.905681,
        title: "Draper Station",
        subtitle: "12997 S. FrontRunner Blvd.",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { console.log("'Nice location' marker callout tapped"); }
      },
      {
        lat: 40.563423,
        lng: -111.901853,
        title: "South Jordan Station",
        subtitle: "10351 South Jordan Gateway",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { console.log("'Nice location' marker callout tapped"); }
      },
      {
        lat: 40.659775,
        lng: -111.896019,
        title: "Murray Central Station",
        subtitle: "140 W. Vine St.",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { console.log("'Nice location' marker callout tapped"); }
      },
      {
        lat: 40.760930,
        lng: -111.908707,
        title: "Salt Lake Central",
        subtitle: "250 S. 600 W.",
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
        onCalloutTap: function() { console.log("'Nice location' marker callout tapped"); }
      }
]
  );
}

exports.onMapReady = onMapReady;
