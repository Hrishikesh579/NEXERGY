import random
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, r2_score
import joblib

# Generate synthetic wind energy data
def generate_synthetic_wind_data(n=1000):
    data = []

    for _ in range(n):
        wind_speed = round(random.uniform(1, 15), 2)  # m/s
        temperature = round(random.uniform(-5, 40), 2)  # Celsius
        pressure = round(random.uniform(950, 1050), 2)  # hPa

        # Wind power is proportional to cube of wind speed
        wind_output = (
            0.5 * wind_speed**3 +
            (pressure - 1000) * 0.1 -
            (temperature - 20) * 0.2 +
            random.uniform(-3, 3)
        )
        wind_output = max(wind_output, 0)

        data.append({
            "wind_speed": wind_speed,
            "temperature": temperature,
            "pressure": pressure,
            "wind_output": round(wind_output, 2)
        })

    return pd.DataFrame(data)

# Generate & save data
df = generate_synthetic_wind_data()
df.to_csv("synthetic_wind_data.csv", index=False)
print("✅ Synthetic wind data saved.")

# Train model
X = df[["wind_speed", "temperature", "pressure"]]
y = df["wind_output"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print(f"📊 MAE: {mean_absolute_error(y_test, y_pred):.2f}")
print(f"📈 R² Score: {r2_score(y_test, y_pred):.2f}")

# Save model
joblib.dump(model, "wind_model.pkl")
print("✅ Wind model saved as 'wind_model.pkl'")
