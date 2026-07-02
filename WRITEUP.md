<!-- - What does a generic constraint (`K extends keyof T`) buy you over `any`? -->

A generic constraint like K extends keyof T makes sure that only valid property names of an object can be used. This gives TypeScript enough information to check the code at compile time and infer the correct return types. For example, getField(product, "price") returns a number, while getField(product, "name") returns a string. If I try to access a property that doesn't exist, TypeScript reports an error before the code runs.

Using any removes these checks completely. TypeScript allows any property or value, which can lead to runtime errors that the compiler cannot detect.


<!-- - When would you use a mapped type vs a utility type like `Pick`? -->

I would use a utility type like Pick, Omit, or Partial when one of the built-in utility types already does exactly what I need. They make the code shorter and easier to read.

I would use a mapped type when I need to create a custom transformation that the built-in utility types cannot provide. For example, in the assessment I created custom types such as ReadOnly, Nullable, and Getters, where every property was transformed or renamed using mapped types.


<!-- - What is the difference between `unknown` and `any`, and why is a type guard safer than a cast? -->

The any type disables TypeScript's type checking, allowing any operation without validation. This makes it easy to introduce bugs because the compiler cannot warn about incorrect property access or invalid function calls.

The unknown type is much safer because TypeScript requires me to check what the value is before I can use it. A type guard performs runtime checks to verify that a value has the expected shape, allowing TypeScript to safely narrow its type. A cast (as) only tells the compiler to trust me—it does not actually verify the value at runtime, so it can hide bugs if the value is not what I expect.


<!-- - How does the `never` exhaustiveness check in the reducer protect you? -->

The never exhaustiveness check ensures that every possible action in a discriminated union is handled by the reducer. In the default branch, assigning the action to a variable of type never causes a compile-time error if a new action type is added but not handled in the switch statement.

This protects the reducer from missing cases and makes it easier to maintain because TypeScript immediately points out any unhandled actions during development instead of allowing unexpected behavior at runtime.