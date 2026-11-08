# Type vs Interface in TypeScript

**Introduction:** type and interface look so similar in TypeScript for defining the shape of an object, but they differ in capabilities. Here is a brief discussion about it.

## Discussion:

**1. Primary Purpose:** First of all interface can only define the shape of an object, but type can define shape of any variable, such as string, number, boolean, null etc.

```ts
interface Person {
    name: string;
    age: number;
}

type isAdult = boolean;
```

**2. Extension Syntax:** We can extend any interface same as OOP classes, but for types we rely on `&` operator.

```ts
interface IPerson {
    name: string;
    age: number;
}

interface IDeveloper extends IPerson {
    designation: 'frontend developer' | 'backend developer';
}

type TPerson = {
    name: string;
    age: number;
}

type TDeveloper = TPerson & { 
    designation: 'frontend developer' | 'backend developer';
}
```

**3. Declaration Merging:** As interface only accepts object shapes, it merges if there is any duplicate interface in the codebase. But we can't use any duplicate type in our codebase.

```ts
interface Person {
    name: string;
    age: number;
}

interface Person {
    height: number;
    weight: number;
}
```

**4. Union types:** We can't use union in interface itself, which we can use in type. But inside an interface any values can be a union type.

```ts
interface IPerson {
    name: string;
    age: number | undefined;
}

type TPerson = {
    name: string;
    age: number | undefined;
} | null;
```

## Conclusion:

So, both interface and types have their own use cases, we have to know when to use what. And it totally depends on what we want to implement. Such as, if we are fetching any data from an external API we can go for interface, and if we need to perform union types, literal options, or tuple configurations then we can go for type.