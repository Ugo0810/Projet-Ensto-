// Fonction pour simuler la récuperation de données d'un capteur
async function fetchSensorData() {
    console.log("Mise à jour des données...");

// Dans un cas réel, vous utiliseriez fetch('https://api.votre-capteur.com/data')
// Ici, on simule des valeurs aléatoires
const mockData = {
    temperature: (Math.random() * (30 - 15) + 15).toFixed(1),
    humidity: Math.floor(Math.random() * (70 - 30) + 30),
    aqi: Math.floor(Math.random() * 100)
};

updateUI(mockData);
}

// Mise à jour de l'interface utilisateur
function updateUI(data) {
    document.getElementById('temp-val').innerText = data.temperature;
    document.getElementById('hum-val').innerText = data.humidity;
    document.getElementById('aqi-val').innerText = data.aqi;

    // Optionnel : Changer la couleur si l'AQI est mauvais
    const aqiCard = document.getElementById('aqi-card');
    if (data.aqi > 50) {
        aqiCard.style.borderTop = "5px solid #e74c3c";
    } else {
        aqiCard.style.borderTop = "5px solid #27ae60";
    }
}

// Événement sur le bouton
document.getElementById('refresh-btn').addEventListener('click', fetchSensorData);

// Mise à jour automatique toutes les 5 secondes
setInterval(fetchSensorData, 5000);

// Premier chargement 
window.onload = fetchSensorData;