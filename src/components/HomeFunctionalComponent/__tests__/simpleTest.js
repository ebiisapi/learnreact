import { dateToHuman } from "../../helpers/dateHelper";


// describe("Mathematical Sanity Check", () => {
//     test()
// });

describe("Date Helper Function Check", () => {
    test("05-07-2021 should be Friday, 07 May 2021", () => {
        expect(dateToHuman("05-07-2021")).toBe("Friday, 7 May 2021");
    })
});