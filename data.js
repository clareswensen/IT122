const oysters = [
    { name : "Olympia", 
    scientificName : "Ostrea lurida", 
    origin : "Pacific Coast", 
    flavor : "mushrooms and celery salt"},

    { name : "Kumamoto", 
    scientificName : "Crassostrea sikamea", 
    origin: "Southwest Japan", 
    flavor: "sweet"},

    { name : "Pacific", 
    scientificName : "Crassostrea gigas", 
    origin : "Japan Pacific Coast", 
    flavor : "cucumber and melon"},

    { name : "European Flat", 
    scientificName : "Ostrea edulis", 
    origin : "Europe", 
    flavor: "smoke and metal"},
    
    { name : "Sydney Rock", 
    scientificName : "Saccostrea glomerata", 
    origin : "Australia", 
    flavor: "sweet"}
];

// getAll method, returns all array items
export const getAll = () => oysters;

//getItem method, returns a single item
export const getItem = (val) => {
    const findOyster = (oyster) => {
        return oyster.name.toLowerCase() === val.toLowerCase();
    }
        const result = oysters.find(findOyster);
        return result; 
    }; 

export const addItem = (name, scientificName, origin, flavor) => {
        let newOyster = {name, scientificName, origin, flavor};
        let index = oysters.findIndex(oyster => oyster.name === newOyster.name);
        if(index === -1){
            oysters.push(newOyster);
            return true;
        }else{
            return false;
        }
    }

//delete function
export const deleteItem = (name) => {
    let removeOyster = {name};
    let index = oysters.findIndex(oyster => oyster.name === removeOyster.name);
    if(index === -1){
        return false;
    } else {
        oysters.splice(removeOyster);
        return true;
    }
}