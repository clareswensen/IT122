const oysters = [
    {name : "Olympia", scientificName : "Ostrea lurida", origin : "Pacific Coast", flavor : "mushrooms and celery salt"},
    {name: "Kumamoto", scientificName: "Crassostrea sikamea", origin: "Southwest Japan", flavor: "sweet"},
    {name: "Pacific", scientificName: "Crassostrea gigas", origin: "Japan Pacific Coast", flavor: "cucumber and melon"},
    {name: "European Flat", scientificName: "Ostrea edulis", origin: "Europe", flavor: "smoke and metal"},
    {name: "Sydney Rock", scientificName: "Saccostrea glomerata", origin: "Australia", flavor: "sweet"}
];

// getAll method, returns all array items
export const getAll = (item) => {
    return(oysters);
};
//getItem method, returns a single item
export const getItem = (item) => {
    return(oysters[1]);
}

// Export getAll() and getItem()