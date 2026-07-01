/* ============================================================
 * EXERCISE 4 — Conditional Types & infer
 * ============================================================
 * No `any`. Run `npm run typecheck`.
 * ============================================================ */

/* ---- 4a. Flatten<T> ----
 * If T is an array, Flatten<T> is its element type; otherwise it is T.
 *   Flatten<string[]> = string
 *   Flatten<number>   = number
 * Use a conditional type with `infer`. */

// TODO: T extends (infer U)[] ? U : T
// this type will flatten an array type to its element type, or return the type itself if its not an array
export type Flatten<T> = T extends (infer U)[] ? U : T;

// Compile-time checks (these are type-level assertions):
export const f1: Flatten<string[]> = "hello";   // must be string
export const f2: Flatten<number> = 42;          // must be number

/* ---- 4b. UnwrapPromise<T> ----
 * If T is a Promise<U>, give U; otherwise T.
 *   UnwrapPromise<Promise<number>> = number
 *   UnwrapPromise<string> = string */

// TODO: T extends Promise<infer U> ? U : T
// this type will unwrap a promise type to its resolved value type, or return the type itself if its not a promise
export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export const u1: UnwrapPromise<Promise<boolean>> = true;   // boolean
export const u2: UnwrapPromise<string> = "x";              // string

/* ---- 4c. NonNullableFields<T> ----
 * Given an object type, produce a version where every field has null
 * and undefined removed from its type. Combine a mapped type with the
 * built-in NonNullable.
 *   NonNullableFields<{ a: string | null; b: number | undefined }>
 *     = { a: string; b: number } */

// TODO: { [K in keyof T]: NonNullable<T[K]> }
// this type will remove null and undefined from all fields of an object type T
export type NonNullableFields<T> = { [K in keyof T]: NonNullable<T[K]> };

type Raw = { a: string | null; b: number | undefined };
export const clean: NonNullableFields<Raw> = { a: "ok", b: 5 };
// @ts-expect-error a can no longer be null
export const bad: NonNullableFields<Raw> = { a: null, b: 5 };
