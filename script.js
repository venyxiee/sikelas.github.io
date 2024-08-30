function loadDetectedGestures() {
    fetch('/get_detected_gestures')
        .then(response => response.json())
        .then(data => {
            let tableBody = document.querySelector("#gesture-table tbody");
            tableBody.innerHTML = "";
            data.detected_gestures.forEach(gesture => {
                let row = `<tr><td>${gesture.timestamp}</td><td>${gesture.label}</td></tr>`;
                tableBody.innerHTML += row;
            });
        });
}

function loadSensorData() {
    fetch('/get_sensor_data')
        .then(response => response.json())
        .then(data => {
            let tableBody = document.querySelector("#sensor-table tbody");
            tableBody.innerHTML = "";
            data.sensor_data.forEach(sensor => {
                let row = `<tr><td>${sensor.timestamp}</td><td>${sensor.value}</td></tr>`;
                tableBody.innerHTML += row;
            });
        });
}

setInterval(() => {
    loadDetectedGestures();
    loadSensorData();
}, 3000); // Refresh setiap 3 detik

window.onload = () => {
    loadDetectedGestures();
    loadSensorData();
};
