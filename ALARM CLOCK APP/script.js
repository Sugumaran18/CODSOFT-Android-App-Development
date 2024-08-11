let alarms = [];

function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const date = now.toLocaleDateString();
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

setInterval(updateTime, 1000);
updateTime();

document.getElementById('alarmForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const time = document.getElementById('alarmTime').value;
    const tone = document.getElementById('alarmTone').value;
    const alarm = { time, tone, active: true };
    alarms.push(alarm);
    updateAlarmsList();
});

function updateAlarmsList() {
    const alarmsList = document.getElementById('alarmsList');
    alarmsList.innerHTML = '';
    alarms.forEach((alarm, index) => {
        alarmsList.innerHTML += `<div>
            <span>${alarm.time}</span>
            <button onclick="toggleAlarm(${index})">${alarm.active ? 'On' : 'Off'}</button>
            <button onclick="deleteAlarm(${index})">Delete</button>
        </div>`;
    });
}

function toggleAlarm(index) {
    alarms[index].active = !alarms[index].active;
    updateAlarmsList();
}

function deleteAlarm(index) {
    alarms.splice(index, 1);
    updateAlarmsList();
}

function checkAlarms() {
    const now = new Date().toTimeString().substr(0, 5);
    alarms.forEach(alarm => {
        if (alarm.time === now && alarm.active) {
            playAlarm(alarm.tone);
            document.getElementById('alarmActions').style.display = 'block';
        }
    });
}

function playAlarm(tone) {
    const audio = new Audio(tone);
    audio.play();
}

function snoozeAlarm() {
    // Snooze logic (e.g., delay by 5 minutes)
}

function dismissAlarm() {
    document.getElementById('alarmActions').style.display = 'none';
    // Dismiss logic (e.g., stop the alarm)
}

setInterval(checkAlarms, 1000);
