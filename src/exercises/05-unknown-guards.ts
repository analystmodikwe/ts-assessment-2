/* ============================================================
 * EXERCISE 5 — unknown & User-Defined Type Guards
 * ============================================================
 * The safe alternative to `any`. No `any`. Run `npm run typecheck`.
 * ============================================================ */

export interface User {
  id: number;
  email: string;
}

/* ---- 5a. Type guard ----
 * `isUser` is a type guard: given an `unknown` value, it returns
 * `value is User` and checks at runtime that value is an object with a
 * numeric `id` and a string `email`.
 *
 * You may NOT cast with `as User`. Narrow properly. */

// TODO: return type must be `value is User`
// returns true if value is an object with numeric id and string email, false otherwise
export function isUser(value: unknown):value is User{
  // TODO: check typeof object, not null, and the two fields' types
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const obj = value as Record<string, unknown>;
  return (
    typeof obj.id === "number" &&
    typeof obj.email === "string"
  );
}

/* ---- 5b. Safe parse ----
 * `parseUser` takes an `unknown` (e.g. the result of JSON.parse) and
 * returns a User if it is one, or null otherwise. Use isUser. */

// TODO: returns User | null
// returns the value if it is a user, or null otherwise
export function parseUser(value: unknown):User | null{
  // TODO
  return isUser(value) ? value : null;
}

/* ---- 5c. assertNever-style guard on a primitive union ----
 * `toInt` accepts string | number and returns a number.
 *   - number -> returned as-is
 *   - string -> parsed with Number(); if NaN, throw an Error
 * Narrow with typeof; do not use `any`. */

// TODO
// returns the number if value is a number, or parses the string to a number, throwing an error if it is not a valid number
export function toInt(value: string | number): number {
  // TODO
   if (typeof value === "number") {
    return value;
  }

  const result = Number(value);

  if (Number.isNaN(result)) {
    throw new Error("Invalid number");
  }

  return result;
}

// These run in the test harness:
export const sample: unknown = { id: 1, email: "a@b.com" };
