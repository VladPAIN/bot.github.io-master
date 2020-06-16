const urlParams = new URLSearchParams(window.location.search);
const myTable = urlParams.get('tables');
const myPlace = urlParams.get('places');

document.getElementById("table").innerHTML = myTable;
document.getElementById("place").innerHTML = myPlace;
