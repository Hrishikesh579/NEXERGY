import random
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, r2_score
import joblib

# Generate synthetic thermal energy data
def generate_synthetic_thermal_data(n=1000):
    data = []

    for _ in range(n):
        temperature = round(random.uniform(-10, 45), 2)   # Celsius
        humidity = round(random.uniform(20, 100), 2)      # %
        wind_speed = round(random.uniform(0, 20), 2)      # m/s

        # Approximation of thermal efficiency
        thermal_output = (
            max(0, (temperature - 10)) * 0.6 -        # warmer air = more usable thermal energy
            humidity * 0.2 -                          # more humidity = less dry heat
            wind_speed * 0.3 +                        # more wind = more heat loss
            random.uniform(-2, 2)
        )

        thermal_output = max(thermal_output, 0)

        data.append({
            "temperature": temperature,
            "humidity": humidity,
            "wind_speed": wind_speed,
            "thermal_output": round(thermal_output, 2)
        })

    return pd.DataFrame(data)

# Generate & save data
df = generate_synthetic_thermal_data()
df.to_csv("synthetic_thermal_data.csv", index=False)
print("✅ Synthetic thermal data saved.")

# Train model
X = df[["temperature", "humidity", "wind_speed"]]
y = df["thermal_output"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print(f"📊 MAE: {mean_absolute_error(y_test, y_pred):.2f}")
print(f"📈 R² Score: {r2_score(y_test, y_pred):.2f}")

# Save model
joblib.dump(model, "thermal_model.pkl")
print("✅ Thermal model saved as 'thermal_model.pkl'")
