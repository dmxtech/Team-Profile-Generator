const Employeetest = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const Empl = new Employee();
    expect(typeof (Empl)).toBe("object");
});