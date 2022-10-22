const Employee = require("../lib/Employee");

test("Init Employee instance", () => {
    const Empl = new Employee();
    expect(typeof (Empl)).toBe("object");
});
test("Get name with constructor arguments", () => {
    const name = "Javier";
    const Empl = new Employee("role", name);
    expect(Empl.name).toBe(name);
});

test("Get id with constructor argument", () => {
    const testValue = 500;
    const Empl = new Employee("role", "thing", testValue);
    expect(Empl.id).toBe(testValue);
});

test("Get email with constructor argument", () => {
    const testValue = "email@test.com";
    const Empl = new Employee("role", "thing", 1, testValue);
    expect(Empl.email).toBe(testValue);
});

test("Get name with getName()", () => {
    const testValue = "Javier";
    const Empl = new Employee("role", testValue);
    expect(Empl.getName()).toBe(testValue);
});

test("Get id with getId()", () => {
    const testValue = 500;
    const Empl = new Employee("role", "thing", testValue);
    expect(Empl.getId()).toBe(testValue);
});

test("Can get email with getEmail()", () => {
    const testValue = "email@test.com";
    const Empl = new Employee("role", "thing", 1, testValue);
    expect(Empl.getEmail()).toBe(testValue);
});
test("getRole() should return Employee", () => {
    const testValue = "Employee";
    const Empl = new Employee("Employee", "Javier", 500, "email@test.com");
    expect(Empl.getRole()).toBe(testValue);
});