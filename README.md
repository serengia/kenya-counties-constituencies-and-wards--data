# Kenya Counties, Constituencies and Wards data

This repository contains a collection of data for all 47 counties in Kenya, including their respective constituencies and wards. The data is provided in JSON format and is ready to use for anyone looking to build applications, conduct research or analyze data related to Kenya's political subdivisions.

## 📅 Data Structure

The data is organized hierarchically, with each county having multiple constituencies, and each constituency containing multiple wards. Here is an example of the structure of the data:

```
{
  "county": "Nairobi",
  "constituencies": [
    {
      "name": "Westlands",
      "wards": [
        {
          "name": "Kitisuru"
        },
        {
          "name": "Parklands/Highridge"
        },
        {
          "name": "Karura"
        },
        {
          "name": "Kangemi"
        }
      ]
    },
    {
      "name": "Dagoretti South",
      "wards": [
        {
          "name": "Mutu-ini"
        },
        {
          "name": "Ngando"
        },
        {
          "name": "Karen"
        },
        {
          "name": "Mugumo-ini"
        }
      ]
    }
  ]
}

```

The `county` field contains the name of the county, while the `constituencies` field is an array of objects, with each object representing a constituency. Each constituency object contains the name field as well as an array of `wards`, with each ward object containing the name field.

## 💻 Usage

The data is provided for anyone to use, free of charge. Simply download or clone the repository to access the data in JSON format.

## 🤝 Contributing

If you notice any errors or omissions in the data, please feel free to submit a pull request with the corrected information.
