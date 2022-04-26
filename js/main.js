/*//////////////////////////////// 
///       Notifications        ///
////////////////////////////////*/

/*//////////////////////////////// 
///           Alert            ///
////////////////////////////////*/

const alertBox = document.getElementById('alertMsg');
const removeAlert = document.getElementById('removeAlert');

removeAlert.addEventListener('click', () => {
  alertBox.style.display = 'none';
});

/*//////////////////////////////// 
///       Traffic Charts       ///
////////////////////////////////*/

const dataHourly = [25, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20];
const labelsHourly = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

const dataDaily = [210, 350, 300, 150, 250, 450, 300, 250, 400, 350, 200];
const labelsDaily = ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const dataWeekly = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
const labelsWeekly = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26','27-3', '4-10', '11-17', '18-24', '25-31'];

const dataMonthly = [3250, 5250, 2000, 7000, 6500, 3450, 4000, 7450, 8000, 6250, 9250];
const labelsMonthly = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Hun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];


function addData(data1, data2) {
  trafficChart.data.datasets[0].data = data1;
  trafficChart.data.labels = data2;
  trafficChart.update();
}

let hourlyBtn = document.getElementById('hourly');
hourlyBtn.addEventListener('click', () => {
  addData(dataHourly, labelsHourly);
})

let dailyBtn = document.getElementById('daily');
dailyBtn.addEventListener('click', () => {
  addData(dataDaily, labelsDaily);
})

let weeklyBtn = document.getElementById('weekly');
weeklyBtn.addEventListener('click', () => {
  addData(dataWeekly, labelsWeekly);
})

let monthlyBtn = document.getElementById('monthly');
monthlyBtn.addEventListener('click', () => {
  addData(dataMonthly, labelsMonthly);
})


let traffic = document.getElementById('traffic-chart').getContext('2d');
let trafficChart = new Chart(traffic, {
    type: 'line',
    data: {
        labels: labelsHourly,
        datasets: [{
            label: 'Traffic',
            fill: true,
            fillColor: '',
            strokeColor: '#22c1c3',
            data: dataHourly,
            backgroundColor: [
              'rgba(34, 193, 195, 0.2)'
            ],
            borderColor: [
              'rgba(20, 115, 117, 0.8)'
            ],
            borderWidth: 1,
            cubicInterpolationMode: 'monotone',
        }]
    },
    options: {
      layout: {
        padding: 20
      },
      scales: {
          y: {
              beginAtZero: true
          }
      },
      plugins: {
        legend: {
          display: false
        }
      }  
    }
});

/*////////////////////////////////
///        Daily Chart         ///
////////////////////////////////*/

let daily = document.getElementById('daily-chart').getContext('2d');

let dailyChart = new Chart(daily, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'Daily Traffic',
            data: [75, 110, 175, 125, 225, 200, 100],
            backgroundColor: [
              'rgba(34, 193, 195, 0.2)'
            ],
            borderColor: [
              'rgba(20, 115, 117, 0.8)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        layout: {
          padding: 20
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
          legend: {
            display: false
          }
        }
    }
});

/*////////////////////////////////
///       Doughnut Chart       ///
////////////////////////////////*/

let mobile = document.getElementById('mobile-chart').getContext('2d');

let config = new Chart(mobile, {
  type: 'doughnut',
  data: {
    labels: [
      'Desktop',
      'Tablet',
      'Phones'
    ],
    datasets: [{
      label: 'Mobile Users',
      data: [270, 65, 65],
      backgroundColor: [
        '#22c1c3',
        '#ff7b00',
        'rgb(153, 102, 255)'
      ],
      borderColor: [
        'rgba(20, 115, 117, 0.8)'
      ],
      hoverOffset: 10
    }]
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: 20
    },
    plugins: {
      legend: {
        position: 'right'
      }
    }
  }
});

/*////////////////////////////////
///         Messenger          ///
////////////////////////////////*/

let searchBar = document.getElementById('userSearch');
let dropdown = document.querySelector('.name-dropdown');
let userNames = document.querySelectorAll('.user-to-msg');
let textArea = document.getElementById('userMsg');


searchBar.addEventListener('click', () => {
  dropdown.style.display = 'block';
});

dropdown.addEventListener('click', (e) => {
  let selectedUser = e.target;
  searchBar.value = "";
  searchBar.setAttribute('placeholder', selectedUser.innerText);
  dropdown.style.display = 'none';
  sessionStorage.setItem('User-To-Message', selectedUser.textContent);
});

searchBar.addEventListener('keyup', () => {
  let userInput = searchBar.value.toUpperCase();
  for (let i=0; i<userNames.length; i++) {
    txtValue = userNames[i].innerText.toUpperCase();
    if (txtValue.includes(userInput) == false) {
      userNames[i].style.display = 'none';
    } else {
      userNames[i].style.display = 'block';
    }
  }
});

textArea.addEventListener('keyup', () => {
  sessionStorage.setItem('Msg-For-User', textArea.value);
})

/*////////////////////////////////
///          Storage           ///
////////////////////////////////*/

let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let s3 = document.getElementById('s3');
let options = document.querySelectorAll('option');
let save = document.getElementById('save-btn');
let cancel = document.getElementById('cancel-btn');

if (localStorage.getItem('firstTime') == undefined) {
  localStorage.setItem('firstTime', 'NO');
  localStorage.setItem('s1', 'OFF');
  localStorage.setItem('s2', 'OFF');
  localStorage.setItem('s3', 'default'); 
}

sessionStorage.setItem('s1', `${localStorage.getItem('s1')}`);
sessionStorage.setItem('s2', `${localStorage.getItem('s2')}`);
sessionStorage.setItem('s3', `${localStorage.getItem('s3')}`);

setSettings();

function setSettings() {

  // Send Email Notifications
  if (localStorage.getItem('s1') == 'OFF') {
    s1.className = "switch sw-off";
  } else {
    s1.className = "switch sw-on";
  }

  // Set Profile Privacy
  if (localStorage.getItem('s2') == 'OFF') {
    s2.className = "switch sw-off";
  } else {
    s2.className = "switch sw-on";
  }

  // Selected Timezone
  if (localStorage.getItem('s3') == 'default') {
    console.log(options[0]);
    options[0].selected = 'selected';
  } else {
    options[0].removeAttribute('selected');
  }
  
  for (let i=0; i<options.length; i++) {
    if (options[i].value == localStorage.getItem('s3')) {
      options[i].setAttribute('selected', 'selected');
    } else {
      options[i].removeAttribute('selected');
    }
  }

}

s1.addEventListener('click', () => {
  console.log('btn 1 click');
  if (sessionStorage.getItem('s1') == 'OFF') {
    sessionStorage.setItem('s1', 'ON');
    s1.className = "switch sw-on";
  } else {
    sessionStorage.setItem('s1', 'OFF');
    s1.className = "switch sw-off";
  }
});

s2.addEventListener('click', () => {
  console.log('btn 2 click');
  if (sessionStorage.getItem('s2') == 'OFF') {
    sessionStorage.setItem('s2', 'ON');
    s2.className = "switch sw-on";
  } else {
    sessionStorage.setItem('s2', 'OFF');
    s2.className = "switch sw-off";
  }
});

s3.addEventListener('click', (e) => {
  let option = e.target.value;
  if (option == '' || option == undefined) {
    sessionStorage.setItem('s3', 'default');
  } else {
    sessionStorage.setItem('s3', option);
  }
});

save.addEventListener('click', () => {
  for (const key in sessionStorage) {
    localStorage.setItem(`${key}`, `${sessionStorage[key]}`);
  }
  console.log('Settings Saved...');
})

cancel.addEventListener('click', () => {
  for (const key in localStorage) {
    sessionStorage.setItem(`${key}`, `${localStorage[key]}`);
    setSettings();
  }
  console.log('Changes Cancelled...');
})






