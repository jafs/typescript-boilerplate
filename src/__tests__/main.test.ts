import { sayHi } from "../main";

describe("Main test", (): void => {
	test('should say "Hello, World"', (): void => {
		expect(sayHi()).toBe("Hello, World");
	});
});
