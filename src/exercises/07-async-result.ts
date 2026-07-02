/* ============================================================
 * EXERCISE 7 — Async Typing & a Result<T, E> wrapper
 * ============================================================
 * No `any`. Run `npm run typecheck` AND `npm test`.
 * ============================================================ */

/* ---- 7a. Result type ----
 * A Result is either an ok value or an err. Model it as a generic
 * discriminated union:
 *   { ok: true; value: T } | { ok: false; error: E } */

// TODO
// represent a result as a discriminated union of two shapes: ok and err
export type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };

// Helpers:
// TODO: return { ok: true, value }
// returns a result with ok shape
export function ok<T>(value: T): Result<T, never> {
  // TODO
   return {
    ok: true,
    value,
  };
}
// TODO: return { ok: false, error }
// return a result with err shape
export function err<E>(error: E): Result<never, E> {
  // TODO
  return {
    ok: false,
    error,
  };
}

/* ---- 7b. Safe division returning a Result ----
 * `divide` returns ok(a/b), or err("division by zero") when b === 0.
 * Return type: Result<number, string>. */

// TODO
// safe division function that returns a Result type
export function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return err("division by zero");
  }

  return ok(a / b);
}

/* ---- 7c. Async: typed fetch simulation ----
 * `loadOrder` is async. Given an id, it resolves to a Result:
 *   - if id > 0  -> ok({ id, total: id * 10 })
 *   - otherwise  -> err("invalid id")
 * The success shape is { id: number; total: number }.
 * Type the return as Promise<Result<{ id: number; total: number }, string>>. */

// TODO: async, correct Promise<Result<...>> return type
export async function loadOrder(id: number): Promise<Result<{ id: number; total: number }, string>>{
  // TODO
 //  this function simulates an async fetch operation that returns a Result type
  if (id > 0) {
    return ok({
      id,
      total: id * 10,
    });
  }
  return err("invalid id");
}
