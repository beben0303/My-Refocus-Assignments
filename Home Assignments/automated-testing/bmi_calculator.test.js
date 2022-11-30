const myfunction = require("./bmi_calculator");

test("Check if 60kg and 1.65m have BMI of 22.04", () => {
    expect(myfunction(60, 1.65)).toBe(`Your BMI is 22.04`);
});

test("Check if 58kg and 1.68m have BMI of 20.55", () => {
    expect(myfunction(58, 1.68)).toBe(`Your BMI is 20.55`);
});