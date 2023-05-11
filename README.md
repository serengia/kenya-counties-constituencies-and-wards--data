# Kenya Counties, Constituencies and Wards data

This repository contains a collection of data for all **47 counties** in Kenya, including their respective **constituencies** and **wards**. The data is provided in JSON format and is ready to use for anyone looking to build applications, conduct research or analyze data related to Kenya's political subdivisions.

## 📅 Data Structure

The data is organized hierarchically, with each county having multiple constituencies, and each constituency containing multiple wards.

The `county` field contains the name of the county, while the `constituencies` field is an array of objects, with each object representing a constituency. Each constituency object contains the name field as well as an array of `wards`, with each ward object containing the name field.

Here is an example of the structure of the data:

```
{
  "countyCode": 47,
  "name": "Nairobi",
  "constituencies": [
    {
      "name": "westlands",
      "wards": [
        "kitisuru",
        "parklands/highridge",
        "karura",
        "kangemi",
        "mountain view"
      ]
    },
    {
      "name": "dagoretti north",
      "wards": ["kilimani", "kawangware", "gatina", "kileleshwa", "kabiro"]
    },
    {
      "name": "dagoretti south",
      "wards": ["mutuini", "ngando", "riruta", "uthiru/ruthimitu", "waithaka"]
    },
    {
      "name": "langata",
      "wards": [
        "karen",
        "nairobi west",
        "mugumo-ini",
        "south-c",
        "nyayo highrise"
      ]
    },
    {
      "name": "kibra",
      "wards": [
        "laini saba",
        "lindi",
        "makina",
        "woodley/kenyatta golf",
        "sarangombe"
      ]
    },
    {
      "name": "roysambu",
      "wards": ["githurai", "kahawa west", "zimmerman", "roysambu", "kahawa"]
    },
    {
      "name": "kasarani",
      "wards": ["claycity", "mwiki", "kasarani", "njiru", "ruai"]
    },
    {
      "name": "ruaraka",
      "wards": [
        "baba dogo",
        "utalii",
        "mathare north",
        "lucky summer",
        "korogocho"
      ]
    },
    {
      "name": "embakasi south",
      "wards": [
        "imara daima",
        "kwa njenga",
        "kwa reuben",
        "pipeline",
        "kware"
      ]
    },
    {
      "name": "embakasi north",
      "wards": [
        "kariobangi north",
        "dandora area i",
        "dandora area ii",
        "dandora area iii",
        "dandora area iv"
      ]
    },
    {
      "name": "embakasi central",
      "wards": [
        "kayole north",
        "kayole central",
        "kayole south",
        "komarock",
        "matopeni"
      ]
    },
    {
      "name": "embakasi east",
      "wards": [
        "upper savannah",
        "lower savannah",
        "embakasi",
        "utawala",
        "mihango"
      ]
    },
    {
      "name": "embakasi west",
      "wards": ["umoja i", "umoja ii", "mowlem", "kariobangi south"]
    },
    {
      "name": "makadara",
      "wards": ["makongeni", "maringo/hamza", "harambee", "viwandani"]
    },
    {
      "name": "kamukunji",
      "wards": [
        "pumwani",
        "eastleigh north",
        "eastleigh south",
        "airbase",
        "california"
      ]
    },
    {
      "name": "starehe",
      "wards": [
        "nairobi central",
        "ngara",
        "ziwani/kariokor",
        "pangani",
        "landimawe",
        "nairobi south"
      ]
    },
    {
      "name": "mathare",
      "wards": [
        "hospital",
        "mabatini",
        "huruma",
        "ngei",
        "mlango kubwa",
        "kiamaiko"
      ]
    }
  ]
}
```

## 💪 Usage

The data is provided for anyone to use, free of charge. Simply download or clone the repository to access the data in JSON format.

## 🤝 Contributing

If you notice any errors or omissions in the data, please feel free to submit a pull request with the corrected information.

## 💻 Hire me for your project

To hire me for your project, reach out here => [James Serengia](http://github.com/serengia)
