const Engineer = require("../lib/Engineer");

test("Get github account with constructor", () => {
    const testValue = "github";
    const Empl = new Engineer("thing", 1, "email@test.com", testValue);
    expect(Empl.github).toBe(testValue);
});

test("Get gitHub username with getgithub()", () => {
    const testValue = "github";
    const Empl = new Engineer("thing", 1, "email@test.com", testValue);
    expect(Empl.getgithub()).toBe(testValue);
});

test("getRole() should return Engineer", () => {
    const testValue = "Engineer";
    const Empl = new Engineer("thing", 1, "email@test.com", "github");
    expect(Empl.getRole()).toBe(testValue);
});

