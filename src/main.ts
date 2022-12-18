const root = document.getElementById("root");

if (root) {
	root.innerHTML = "<h1>Welcome to TypeScript Boilerplate</h1>";
}

export function sayHi(): string {
	return "Hello, World";
}
