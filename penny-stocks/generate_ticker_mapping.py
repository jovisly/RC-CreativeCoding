"""Creates a json file that maps the ticker to the company name."""
import pandas as pd

df = pd.read_csv("data/symbols_valid_meta.csv")

print(df.head())

symbols = list(df["Symbol"])
names = list(df["Security Name"])

print(symbols[:10])
print(names[:10])

# Goes through the two lists to construct a dictionary.
ticker_mapping = {}
for symbol, name in zip(symbols, names):
    ticker_mapping[symbol] = name

# Save it as a json file.
import json
with open('data/ticker_mapping.json', 'w') as fp:
    json.dump(ticker_mapping, fp)
