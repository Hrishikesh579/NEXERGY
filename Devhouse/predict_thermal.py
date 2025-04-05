import requests
import pandas as pd
import joblib

# === API & Model Config ===
API_KEY = "616107c709501269e5b1b67dc37c1ec9"
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

# === Load thermal energy prediction model ===
model = joblib.load("thermal_model.pkl")

print("🔥 Thermal Energy Predictor (type 'exit' to quit)")

while True:
    city = input("\n📍 Enter city name: ")

    if city.lower() == "exit":
        print("👋 Exiting thermal energy prediction.")
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
        wind_speed = data["wind"]["speed"]

        features = pd.DataFrame([{
            "temperature": temperature,
            "humidity": humidity,
            "wind_speed": wind_speed
        }])

        thermal_output = model.predict(features)[0]
        print(f"🔥 Estimated Thermal Energy Output for {city}: {thermal_output:.2f} kWh/m²/day")

    except requests.exceptions.RequestException as e:
        print(f"❌ Request error: {e}")
    except Exception as e:
        print(f"⚠️ Something went wrong: {e}")
