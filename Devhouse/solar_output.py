import random
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score
import joblib

# Step 1: Generate synthetic solar data
def generate_synthetic_solar_data(n=1000):
    data = []

    for _ in range(n):
        temp = round(random.uniform(10, 45), 2)
        humidity = round(random.uniform(10, 90), 2)
        wind_speed = round(random.uniform(0.5, 10), 2)
        precipitation = round(random.uniform(0, 20), 2)

        # Simulate solar output
        solar_output = (
            (temp * 0.4) +
            ((100 - humidity) * 0.2) -
            (precipitation * 0.5) -
            (wind_speed * 0.1) +
            random.uniform(-2, 2)
        )

        solar_output = max(solar_output, 0)

        data.append({
            "temperature": temp,
            "humidity": humidity,
            "wind_speed": wind_speed,
            "precipitation": precipitation,
            "solar_output": round(solar_output, 2)
        })

    return pd.DataFrame(data)

# Step 2: Create and save the dataset
df = generate_synthetic_solar_data()
df.to_csv("synthetic_solar_data.csv", index=False)
print("✅ Synthetic data generated and saved as CSV")

# Step 3: Train the model
X = df[["temperature", "humidity", "wind_speed", "precipitation"]]
y = df["solar_output"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Step 4: Evaluate the model
y_pred = model.predict(X_test)
print(f"📊 MAE: {mean_absolute_error(y_test, y_pred):.2f}")
print(f"📈 R² Score: {r2_score(y_test, y_pred):.2f}")

# Step 5: Save the model
joblib.dump(model, "solar_model.pkl")
print("✅ Model saved as 'solar_model.pkl'")
