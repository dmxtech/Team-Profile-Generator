const Intern = require("../lib/Intern");

test("Get school via constructor", () => {
    const testValue = "school";
    const Empl = new Intern("thing", 1, "email@test.com", testValue);
    expect(Empl.school).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "school";
    const Empl = new Intern("thing", 1, "email@test.com", testValue);
    expect(Empl.getschool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const Empl = new Intern("thing", 1, "email@test.com", "school");
    expect(Empl.getRole()).toBe(testValue);
});