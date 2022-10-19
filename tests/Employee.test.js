const Employee = require("../lib/Employee");

test("Init Employee instance", () => {
    const Empl = new Employee();
    expect(typeof (Empl)).toBe("object");
});
test("Get name via constructor arguments", () => {
    const name = "Javier";
    const Empl = new Employee(name);
    expect(Empl.name).toBe(name);
});

test("Get id via constructor argument", () => {
    const testValue = 100;
    const Empl = new Employee("thing", testValue);
    expect(Empl.id).toBe(testValue);
});

test("Get email via constructor argument", () => {
    const testValue = "test@test.com";
    const Empl = new Employee("thing", 1, testValue);
    expect(Empl.email).toBe(testValue);
});

test("Get name via getName()", () => {
    const testValue = "Javier";
    const Empl = new Employee(testValue);
    expect(Empl.getName()).toBe(testValue);
});

test("Get id via getId()", () => {
    const testValue = 500;
    const Empl = new Employee("thing", testValue);
    expect(Empl.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const Empl = new Employee("thing", 1, testValue);
    expect(Empl.getEmail()).toBe(testValue);
});