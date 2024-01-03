"""In case we don't have enough time, generate a csv that can be dumped in a spreadsheet.

The CSV file would have the following columns:
- Stock ticker
- Company name
- Start date
- End date
- 1 penny becomes... (USD)
- 1 penny becomes... (British Pound)
"""
import json

import pandas as pd


# Import json into a dictionary. First import the stock ticker to company name
# mapping.
with open("data/ticker_mapping.json") as f:
    dict_tickers = json.load(f)

with open("data/penny_stocks.json") as f:
    dict_stocks = json.load(f)

for k, v in dict_stocks.items():
    if k in dict_tickers:
        dict_stocks[k]["company_name"] = dict_tickers[k]
    else:
        dict_stocks[k]["company_name"] = "Unknown"

# Turn the dictionary into a pandas dataframe.
df = pd.DataFrame.from_dict(dict_stocks, orient="index")
print(df.head())
# Save it to a csv file.
df.to_csv("data/penny_stocks.csv")
