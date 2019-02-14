// global vars
let selectedCountry;
let degreeType;

// logic to create dropdown list
let countryList = [
    {
        country: 'India',
        code: 'IN'
    },
    {
        country: 'USA',
        code: 'US'
    },
    {
        country: 'China',
        code: 'CN'
    },
    {
        country: 'Nepal',
        code: 'NP'
    },
    {
        country: 'Bhutan',
        code: 'BT'
    }
];
var wrapper = document.getElementById('dropdown');
let myHTML = "";
countryList.forEach(c => myHTML += `<button class="dropdown-item" onclick="changeCountry(\'${c.country}\', \'${c.code}\')">` + c.country + '</button>');
wrapper.innerHTML = myHTML;

// functions
function changeMode(mode) {
    degreeType = mode;
}

function changeCountry(country, code) {
    document.getElementById('droptitle').innerHTML = country;
    selectedCountry = code;
}

function getForecast() {
    let loc = document.getElementById('loc').value;

    axios.get(`http://samples.openweathermap.org/data/2.5/forecast?zip=94040&appid=b6907d289e10d714a6e88b30761fae22`).then((data) => {
        console.log('Data Recieved');
        console.log(data);
    }, reason => {
        console.log('Request Rejected');
    });
}