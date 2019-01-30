window.onload = () => {
	var mymap = L.map('mapDiv').setView([22.282, 114.154], 17);
	L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    		attribution: `&copy;
			<a href="https://www.openstreetmap.org/copyright">
				OpenStreetMap
			</a>`,
    		subdomains: ['a','b','c']
	}).addTo( mymap );

	var triangle = L.polygon([
		[22.28366, 114.15095],
		[22.27983, 114.15420],
		[22.28413, 114.15649]
	]).addTo(mymap);
}
