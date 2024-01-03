"""Go through the stocks dataset to identify penny stocks.


Creates an output dataset that looks like:

const data = {
    "Apple": {start: "1982-07-08", end: "2020-04-01", multiplier: 1226.45},
    ...
    ...
}

Data source: https://www.kaggle.com/datasets/jacksoncrow/stock-market-dataset
"""
import os

import pandas as pd
from tqdm import tqdm

files = os.listdir("data/stocks/")
files.sort()
print(files[:10])

# Debug version that keeps files within 10 items.
# files = files[:10]

dict_output = {}

# for f in tqdm(files):
for f in files:
    print(f)
    # Get the min value ever of a file.
    df = pd.read_csv(f"data/stocks/{f}")
    df = df.dropna()
    if len(df) < 100:
        continue

    min_val = min(list(df["Close"]))
    # Only continue if the min value is less than 1.
    if min_val >= 1:
        continue

    # Get the latest date. Only continue if the date is at least 2020's.
    latest_date = max(list(df["Date"]))
    if latest_date < "2020-01-01":
        continue

    # Now we can get the start, end, and multiplier.
    start = df.loc[df["Close"] == min_val]
    end = df.loc[df["Date"] == latest_date]

    start_val = start.iloc[-1]["Close"].item()
    end_val = end.iloc[-1]["Close"].item()
    # We don't want that divide by zero error.
    if start_val == 0:
        continue

    multiplier = end_val / start_val

    # It's only interesting if the multiplier is big enough.
    if multiplier < 10:
        continue


    # Then get start and end dates.
    start_date = start.iloc[-1]["Date"]
    end_date = end.iloc[-1]["Date"]

    stock_name = f.split(".")[0]
    # print(f"{stock_name}: {start_date}, {end_date}, {multiplier}")
    dict_output[stock_name] = {"start": start_date, "end": end_date, "multiplier": multiplier}

# Dump the json in a formatted way.
import json
with open('data/penny_stocks.json', 'w') as fp:
    json.dump(dict_output, fp, indent=2)

