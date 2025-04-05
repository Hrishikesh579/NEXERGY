import requests
import pandas as pd
import joblib

# === API & Model Config ===
API_KEY = "616107c709501269e5b1b67dc37c1ec9"
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

# === Load hydro energy prediction model ===
hmodel = joblib.load("hydro_model.pkl")
smodel = joblib.load("solar_model.pkl")
tmodel = joblib.load("thermal_model.pkl")
wmodel = joblib.load("wind_model.pkl")
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

        hydro_output = hmodel.predict(features)[0]
        print(f"🌊 Estimated Hydro Energy Output for {city}: {hydro_output:.2f} kWh/m²/day")

    except requests.exceptions.RequestException as e:
        print(f"❌ Request error: {e}")
    except Exception as e:
        print(f"⚠️ Something went wrong: {e}")



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
        solar_output = smodel.predict(features)[0]

        print(f"🌞 Estimated Solar Energy Output for {city}: {solar_output:.2f} kWh/m²/day")

    else:
        print(f"❌ Error fetching weather data for {city}. Status: {response.status_code}")

 

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

        thermal_output = tmodel.predict(features)[0]
        print(f"🔥 Estimated Thermal Energy Output for {city}: {thermal_output:.2f} kWh/m²/day")

    except requests.exceptions.RequestException as e:
        print(f"❌ Request error: {e}")
    except Exception as e:
        print(f"⚠️ Something went wrong: {e}")

    if city.lower() == "exit":
        print("👋 Exiting wind energy prediction.")
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

        wind_speed = data["wind"]["speed"]
        temperature = data["main"]["temp"]
        pressure = data["main"]["pressure"]

        features = pd.DataFrame([{
            "wind_speed": wind_speed,
            "temperature": temperature,
            "pressure": pressure
        }])

        wind_output = wmodel.predict(features)[0]
        print(f"💨 Estimated Wind Energy Output for {city}: {wind_output:.2f} kWh/m²/day")

    except requests.exceptions.RequestException as e:
        print(f"❌ Request error: {e}")
    except Exception as e:
        print(f"⚠️ Something went wrong: {e}")
