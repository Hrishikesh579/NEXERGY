import requests
import pandas as pd
import joblib

# === API & Model Config ===
API_KEY = "616107c709501269e5b1b67dc37c1ec9"
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

# === Load hydro energy prediction model ===
model = joblib.load("hydro_model.pkl")

print("💧 Hydro Energy Predictor (type 'exit' to quit)")

while True:
    city = input("\n📍 Enter city name: ")

    if city.lower() == "exit":
        print("👋 Exiting hydro energy prediction.")
        break

    params = {
        "q": city,
        "appid": API_KEY,
        "units": "metric"
    }

    try:
        response = requests.get(BASE_URL, params=params)
        response.raise_for_status()
        data = response.json()

        temperature = data["main"]["temp"]
        humidity = data["main"]["humidity"]

        # Handle precipitation (rain/snow) safely
        precipitation = 0
        if "rain" in data and "1h" in data["rain"]:
            precipitation = data["rain"]["1h"]
        elif "snow" in data and "1h" in data["snow"]:
            precipitation = data["snow"]["1h"]

        features = pd.DataFrame([{
            "precipitation": precipitation,
            "humidity": humidity,
            "temperature": temperature
        }])

        hydro_output = model.predict(features)[0]
        print(f"🌊 Estimated Hydro Energy Output for {city}: {hydro_output:.2f} kWh/m²/day")

    except requests.exceptions.RequestException as e:
        print(f"❌ Request error: {e}")
    except Exception as e:
        print(f"⚠️ Something went wrong: {e}")
