import { Oyster } from "../Oysters.js";

// return all records
Oyster.find({}).lean()
  .then((oysters) => {
    console.log(oysters);
  })
  .catch(err => next(err));