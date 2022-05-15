import { expect } from "chai";
import * as oyster from "../data.js";

describe("test data module", () => {
    
    // test getItem()
    it("return requested oyster", () => {
        let result = oyster.getItem("Pacific");
        expect(result).to.deep.equal(
            {name : "Pacific", scientificName : "Crassostrea gigas", 
            origin : "Japan Pacific Coast", flavor : "cucumber and melon"}
            );
    });

   it("Oyster not found", () => {
        let result = oyster.getItem("Kushi");
        expect(result).to.be.undefined;
    });

    // test additem()
    it("added oyster", () => {
        let result = oyster.addItem("Atlantic", "Crassostrea virginica", "Atlantic coast of North America", "briny, clean, mineraly", "savory finish");
        expect(result).to.be.true;
    });
 
    it("fails with duplicate oyster", () => {
        let result = oyster.addItem("Pacific");
        expect(result).to.be.false;
    });

    //test deleteItem()
    it("deletes oyster if found in array", () => {
        let result = oyster.deleteItem("Pacific");
        expect(result).to.be.true;
    });

    it("will not delete if oyster not found", () => {
        let result = oyster.deleteItem("Kushi");
        expect(result).to.be.false;
    });

});

