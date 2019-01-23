/* opens the sites dropdown navbar */
openSites = () => {
	document.getElementById("sites").style.height = '25px';
	document.getElementById("sites").style.padding = '5px 0';
	document.getElementById("sites").style.zIndex = '1';
	document.getElementById("sites-btn").href = 'javascript:closeSites()';
	document.getElementById("sites-tai-kwun").style.visibility = "visible";
	document.getElementById("sites-pmq").style.visibility = "visible";
	document.getElementById("sites-cm").style.visibility = "visible";
}

/* closes the sites dropdown navbar */
closeSites = () => {
	document.getElementById("sites-tai-kwun").style.visibility = "hidden";
	document.getElementById("sites-pmq").style.visibility = "hidden";
	document.getElementById("sites-cm").style.visibility = "hidden";
	document.getElementById("sites").style.height = '0px';
	document.getElementById("sites").style.padding = '0';
	document.getElementById("sites").style.zIndex = '-1';
	document.getElementById("sites-btn").href = 'javascript:openSites()';
}
