const socket = io();

// Listen for real-time data
socket.on('sensorData', data => {
    document.getElementById('gps-speed').innerText = data.gps.speed;
    document.getElementById('gps-location').innerText = data.gps.location;
    document.getElementById('gps-direction').innerText = data.gps.direction;
    document.getElementById('internal-temp').innerText = data.temperature.internal;
    document.getElementById('external-temp').innerText = data.temperature.external;
    document.getElementById('battery-percentage').innerText = `${data.battery.percentage}%`;
    document.getElementById('battery-health').innerText = data.battery.health;
    document.getElementById('camera-status').innerText = data.camera.status;
    document.getElementById('camera-snapshot').innerText = data.camera.snapshot;
    document.getElementById('lidar-point-cloud').innerText = data.lidar.pointCloud;
    document.getElementById('acc-x').innerText = data.accelerometer.x;
    document.getElementById('acc-y').innerText = data.accelerometer.y;
    document.getElementById('acc-z').innerText = data.accelerometer.z;
});

// Listen for alerts
socket.on('alert', message => {
    const alertBox = document.getElementById('alert');
    alertBox.innerText = message;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 5000); // Alert disappears after 5 seconds
});
