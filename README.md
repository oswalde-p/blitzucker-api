# blitzucker
A connected diabetes management platform, combining data from a range of sources to give you optimal
control over your health. The ultimate goal is to use *machine learning* (🤮) to make predictions and spot trends better than your shitty brain can.

The project currently consists of 2 parts: this api and a [web frontend](https://github.com/oswalde-p/blitzucker-vue-client).

## development

Clone repo, then:

```
npm i
node src/fixture/populate-mock-data.js            # create test admin user { email: "admin@test.com", password: "test"}
npm run dev
```

## authorization

Uses passport and experss-session to manage and authenticate user sessions. There are three access levels for endpoints:
`user`, `admin` and `public`.

### Example login:
```
curl -X POST -H "Content-Type: application/json" -d '{ "email":"admin@test.com", "password":"test" }' http://localhost:3001/login -c "cookie.txt"
```
This saves your session id in `cookie.txt". Now you should be able to pass the cookie in future requests, eg

```
curl -X GET -H "Content-Type: application/json"  http://localhost:3001/history -v -b "cookie.txt"
```

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
