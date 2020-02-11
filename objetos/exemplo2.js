var empty_object = {};

var stooge = {
    "first-name": "Silvioclipper",
    "last-name": "Azevedo"
}

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {

            IATA: "SYD",
            time: "2004-09-22 14:55",
            city: "Sydney" 
    }
}

console.log(stooge["first-name"]);
console.log(flight.departure.IATA)
console.log(stooge["middle-name"]);
console.log(flight.status);
console.log(stooge["FIRST-NAME"]);

var middle = stooge["middle-name"] || "(none)";
console.log(middle);
var status = flight.status || "unknow";
console.log(status);

stooge['middle-name'] = 'Lester';
console.log(stooge['middle-name']);



