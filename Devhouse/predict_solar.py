import requests
import pandas as pd
import joblib

# === CONFIG ===
API_KEY = "616107c709501269e5b1b67dc37c1ec9"
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

# === Load the trained model ===
model = joblib.load("solar_model.pkl")

print("🔮 Solar Energy Predictor (type 'exit' to quit)")

while True:
    city = input("\n📍 Enter city name: ")

    if city.lower() == "exit":
        print("👋 Exiting solar prediction tool.")
        break

    # Fetch weather from API
    params = {
        "q": city,
        "appid": API_KEY,
        "units": "metric"
    }

    response = requests.get(BASE_URL, params=params)

    if response.status_code == 200:
        data = response.json()

        temp = data["main"]["temp"]
        humidity = data["main"]["humidity"]
        wind_speed = data["wind"]["speed"]

        # Precipitation fallback
        precipitation = 0
        if "rain" in data:
            precipitation = data["rain"].get("1h", 0)
        elif "snow" in data:
            precipitation = data["snow"].get("1h", 0)

        # Prepare features
        features = pd.DataFrame([{
            "temperature": temp,
            "humidity": humidity,
            "wind_speed": wind_speed,
            "precipitation": precipitation
        }])

        # Predict
        solar_output = model.predict(features)[0]

        print(f"🌞 Estimated Solar Energy Output for {city}: {solar_output:.2f} kWh/m²/day")

    else:
        print(f"❌ Error fetching weather data for {city}. Status: {response.status_code}")
