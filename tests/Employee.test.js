const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('init', () => {
        // Positive test
        it("should create an object with a 'answers' property set to the 'answers' argument provided when called with the 'new' keyword", () => {
            // Arrange
            const answers = 'Employee name';

            // Act
            const obj = new Employee(answers);

            // Assert
            expect(obj.answers).toEqual(answers);
        });

        // Exception test
        it("should throw an error if not provided a 'answers' value", () => {
            // Arrange
            const cb = () => new Employee();
            const err = new Error(
                "Expected parameter 'answers' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
    });
});