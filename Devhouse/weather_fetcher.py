import requests
import pandas as pd
from datetime import datetime

# === CONFIGURATION ===
API_KEY = "616107c709501269e5b1b67dc37c1ec9"
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

print("🌦️  Weather Checker")
print("Type 'exit' to stop.\n")

while True:
    city = input("🔍 Enter the city name: ")

    if city.lower() == "exit":
        print("👋 Exiting weather checker.")
        break

    params = {
        "q": city,
        "appid": API_KEY,
        "units": "metric"
    }

    response = requests.get(BASE_URL, params=params)

    if response.status_code == 200:
        data = response.json()

        # Handle rain or snow
        precipitation = 0
        if "rain" in data:
            precipitation = data["rain"].get("1h", 0)
        elif "snow" in data:
            precipitation = data["snow"].get("1h", 0)

        weather_data = {
            "datetime": datetime.utcfromtimestamp(data["dt"]),
            "city": data["name"],
            "temperature (°C)": data["main"]["temp"],
            "humidity (%)": data["main"]["humidity"],
            "precipitation (mm)": precipitation,
            "wind speed (m/s)": data["wind"]["speed"]
        }

        df = pd.DataFrame([weather_data])
        print("\n✅ Weather Data Retrieved:")
        print(df)

    else:
        print(f"❌ Could not retrieve data for '{city}':", response.status_code, response.text)
