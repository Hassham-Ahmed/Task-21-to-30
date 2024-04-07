// Create an object containing information about Pakistan and its cities
let pakistanInfo: { [key: string]: { population: number, area: number, famousFor: string } } = {
    "Pakistan": {
        population: 220892340,
        area: 881913,
        famousFor: "Cultural heritage, mountains, cuisine"
    },
    "Karachi": {
        population: 15741000,
        area: 591,
        famousFor: "Port city, financial hub"
    },
    "Lahore": {
        population: 12188000,
        area: 1772,
        famousFor: "Historical sites, gardens, food"
    },
    "Islamabad": {
        population: 1095064,
        area: 906,
        famousFor: "Capital city, greenery"
    },
    "Peshawar": {
        population: 1970042,
        area: 1251,
        famousFor: "Historical sites, culture"
    }
};

// Print information about Pakistan and its cities
for (let place in pakistanInfo) {
    console.log(`${place}:`);
    console.log(`Population: ${pakistanInfo[place].population}`);
    console.log(`Area (in square kilometers): ${pakistanInfo[place].area}`);
    console.log(`Famous for: ${pakistanInfo[place].famousFor}`);
    console.log("--------------------");
}