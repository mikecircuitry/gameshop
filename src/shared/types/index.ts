export type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: unknown; status?: number };
