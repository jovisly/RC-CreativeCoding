import json

REST_LOG = "rest_log.json"

def update_rest_log(rest_log, last_rest_str):
    try:
        data_dict = json.loads(last_rest_str)
        rest_log.append(data_dict)
        # Save to file.
        with open(REST_LOG, "w") as f:
            json.dump(rest_log, f, indent=4)

    except Exception as e:
        print(e)
        return None
