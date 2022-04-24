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
///          Switches          ///
////////////////////////////////*/

// const switches = document.querySelector('.settings');

// switches.addEventListener('click', (e) => {
//   let sw = e.target;

//   if (sw.tagName === 'INPUT') {
//     if (sw.parentNode.className == "switch sw-on") {
//       sw.parentNode.className = "switch sw-off"
//     } else {
//       sw.parentNode.className = "switch sw-on"
//     }
//   }
// });

/*//////////////////////////////// 
///           Charts           ///
////////////////////////////////*/

let traffic = document.getElementById('traffic-chart').getContext('2d');
let trafficChart = new Chart(traffic, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
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
            y: {
                beginAtZero: true
            }
        }
    }
});

let daily = document.getElementById('daily-chart').getContext('2d');

let dailyChart = new Chart(daily, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
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
            y: {
                beginAtZero: true
            }
        }
    }
});

let mobile = document.getElementById('mobile-chart').getContext('2d');

let config = new Chart(mobile, {
  type: 'doughnut',
  data: {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  }
});

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
      options[i].setAttribute('selected');
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






