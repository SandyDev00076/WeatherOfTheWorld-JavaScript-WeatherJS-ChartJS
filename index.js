// global vars
let selectedCountry;
let degreeType;

// dummy data
let dummyData = [
    {
        date: '16-02-2019',
        high: '25',
        low: '18',
        average: '20',
        comments: 'cloudy'
    },
    {
        date: '17-02-2019',
        high: '27',
        low: '17',
        average: '22',
        comments: 'sunny'
    },
    {
        date: '18-02-2019',
        high: '23',
        low: '18',
        average: '19',
        comments: 'cloudy'
    },
    {
        date: '19-02-2019',
        high: '25',
        low: '18',
        average: '20',
        comments: 'rainy'
    },
    {
        date: '20-02-2019',
        high: '29',
        low: '20',
        average: '23',
        comments: 'sunny'
    }
]

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

function celciusToFarenheit(num) {
    return num*(9/5) + 32;
}

function getForecast() {
    let loc = document.getElementById('loc').value;

    let labels = [];
    let highSet = [];
    let lowSet = [];
    let averageSet = [];
    let highlabel = `High ${degreeType} of the day`;
    let lowLabel = `Low ${degreeType} of the day`;
    let averageLabel = `Average ${degreeType} of the day`;

    dummyData.forEach(dt => {
        labels.push(dt.date);

        if(degreeType == 'C') {
            highSet.push(dt.high);
            lowSet.push(dt.low);
            averageSet.push(dt.average);
        }
        else {
            highSet.push(celciusToFarenheit(dt.high));
            lowSet.push(celciusToFarenheit(dt.low));
            averageSet.push(celciusToFarenheit(dt.average));
        }
    });

    // axios.get(`http://samples.openweathermap.org/data/2.5/forecast?zip=94040&appid=b6907d289e10d714a6e88b30761fae22`).then((data) => {
    //     console.log('Data Recieved');
    //     console.log(data);
    // }, reason => {
    //     console.log('Request Rejected');
    // });

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: highlabel,
                data: highSet,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: lowLabel,
                data: lowSet,
                backgroundColor: [
                    'rgba(144, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(144,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: averageLabel,
                data: averageSet,
                backgroundColor: [
                    'rgba(175, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(175,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}