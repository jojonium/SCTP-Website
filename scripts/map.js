var fromProjection = new OpenLayers.Projection("EPSG:4326");
var toProjection   = new OpenLayers.Projection("EPSG:900913");
var extent = new OpenLayers.Bounds(114.145,22.275,114.16,22.29)
  .transform(fromProjection,toProjection);

window.onload = function() {
  var options = {
    restrictedExtent: extent,
    controls: [
      new OpenLayers.Control.Navigation(),
      new OpenLayers.Control.PanZoomBar()
    ]
  };

  map = new OpenLayers.Map("mapDiv", options);

  var newLayer = new OpenLayers.Layer.OSM();
  var position = new OpenLayers.LonLat(114.153, 22.283)
    .transform(fromProjection, toProjection);

  console.log(position);
  map.addLayer(newLayer);
  map.setCenter(position, 17);
}

