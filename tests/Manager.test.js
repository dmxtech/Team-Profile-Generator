const Manager = require("../lib/Manager");

test("Get office number via constructor argument", () => {
    const testValue = "123";
    const Empl = new Manager("thing", 1, "email@test.com", testValue);
    expect(Empl.officenumber).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = "123";
    const Empl = new Manager("thing", 1, "email@test.com", testValue);
    expect(Empl.getofficenumber()).toBe(testValue);
});

test("getRole() should return Manager", () => {
    const testValue = "Manager";
    const Empl = new Manager("thing", 1, "email@test.com", "123");
    expect(Empl.getRole()).toBe(testValue);
});