import random
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, r2_score
import joblib

# Generate synthetic hydro energy data
def generate_synthetic_hydro_data(n=1000):
    data = []

    for _ in range(n):
        precipitation = round(random.uniform(0, 100), 2)  # mm/h
        humidity = round(random.uniform(30, 100), 2)      # %
        temperature = round(random.uniform(-10, 35), 2)   # Celsius

        # Hydro energy affected by rain, slightly by humidity & temp
        hydro_output = (
            precipitation * 0.5 +
            humidity * 0.2 -
            abs(temperature - 15) * 0.3 +
            random.uniform(-2, 2)
        )
        hydro_output = max(hydro_output, 0)

        data.append({
            "precipitation": precipitation,
            "humidity": humidity,
            "temperature": temperature,
            "hydro_output": round(hydro_output, 2)
        })

    return pd.DataFrame(data)

# Generate data
df = generate_synthetic_hydro_data()
df.to_csv("synthetic_hydro_data.csv", index=False)
print("✅ Synthetic hydro data saved.")

# Train model
X = df[["precipitation", "humidity", "temperature"]]
y = df["hydro_output"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print(f"📊 MAE: {mean_absolute_error(y_test, y_pred):.2f}")
print(f"📈 R² Score: {r2_score(y_test, y_pred):.2f}")

# Save model
joblib.dump(model, "hydro_model.pkl")
print("✅ Hydro model saved as 'hydro_model.pkl'")
