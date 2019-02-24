# blitzucker
A connected diabetes management platform, combining data from a range of sources to give you optimal 
control over your health. The ultimate goal is to use *machine learning* (🤮) to make predictions and spot trends better than your shitty brain can.

The project currently consists of 2 parts: this api and a [web frontend](https://github.com/oswalde-p/blitzucker-vue-client).

## api

An express server responsible for handling requests from various clients, fetching data from external sources and keeping the database up to date. You know, like an api.

It is currently hosted by openshift [here](https://blitzucker-api-blutzucker.1d35.starter-us-east-1.openshiftapps.com/api/~/liveness)

## Data sources

### Sensors + Medication
Entered manually through a UI client or automatically from things like NFC relay apps. Historical data can be imported from other diabetes logging apps.

### Drugs!

Go low as you get high? Find out! As far as I know, this is the first diabetes management product with support for recreational drugs. Now you'll finally be able to spot patterns of highs from the munchies, lows from not eating for 8 hours after that sugar cube, or whatever the fuck ketamine does...

### Activity
Fitbit and Google Fit APIs

### Banking
Used to detect realtionships between spending patterns and blood glucose events, in order to provide appropriate reminders
and warnings
