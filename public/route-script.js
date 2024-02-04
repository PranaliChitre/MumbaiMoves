document.addEventListener('DOMContentLoaded', function() {
    var startSelect = document.getElementById('startLocation');
    var endSelect = document.getElementById('endLocation');

    // Dummy data for bus stops
    var locations = ['COLABA BUS STATION, POST OFFICE', 'DHOBI GHAT (NAVY NAGAR)', 'DR. SHYAMAPRASAD MUKHERJEE CHOWK(MUSEUM)', 'ELECTRIC HOUSE, COLABA DEPOT', 'WADALA BUS DEPOT'];

    // Populate dropdowns with bus stops
    locations.forEach(function(name) {
        var startOption = document.createElement('option');
        startOption.value = name;
        startOption.textContent = name;
        startSelect.appendChild(startOption);

        var endOption = document.createElement('option');
        endOption.value = name;
        endOption.textContent = name;
        endSelect.appendChild(endOption);
    });

    // Initialize and configure the Leaflet map
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Handle form submission
    document.getElementById('routeForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var startLocation = startSelect.value;
        var endLocation = endSelect.value;

        // Replace with your actual backend API endpoint
        fetch('http://yourbackendapi.com/route', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                start: startLocation,
                end: endLocation
            }),
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('routeResult').innerHTML = 'Shortest Route: ' + data.route;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
