# Type Narrowing in TypeScript

**Introduction:** Type narrowing is an often used technique in TypeScript that allows developers to narrow down to a more precise type when working with a broader type. Developers commonly use type narrowing to verify that a value has the correct type or not. Here are some examples of ways to utilize type narrowing in TypeScript.

## Common Techniques to use Type Narrowing:

**1. Using `typeof` operator (Type Guard):** Using `typeof` we are able to distinguish between simple types like string, number, boolean.

```ts
const processInput = (input: string | number) => {
    if (typeof input === "string") {
        console.log(input.toLowerCase());
    } else {
        console.log(input.toFixed(2));
    }
}
```

**2. Truthiness Checks:** We can check the value exists or not to narrow the type to a truthy value.

```ts
type User = {
    name: string;
    age: number;
} | null

const processName = (user: User) => {
    if (user) {
        console.log(user.name);
    } else {
        console.log("User not found");
    }
}
```

**3. Using `in` operator:** We can use the `in` operator to check if the property exists on an object or not to narrow down to a specific type.

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim();
    } else {
        animal.fly();
    }
}
```

**4. Using `instanceof` guard:** We can check if a variable is instance of any class or not using the `instanceof` operator to narrow down to a specific type.

```ts
function logDate(date: Date | string) {
    if (date instanceof Date) {
        console.log(date.getDay());
    } else {
        console.log(new Date(date).getDay());
    }
}
```

## Conclusion:

Type narrowing allows TypeScript to determine a more specific type within a section of code, depending upon the runtime checks that you create. This produces safer code which is easier to maintain due to the fact that errors will be detected during the compilation phase rather than causing a crash during execution.