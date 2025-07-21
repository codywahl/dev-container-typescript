// Extend the ImportMeta interface for tools like tsx, bun, etc.
interface ImportMeta {
  /**
   * True if this module is being executed directly (not imported).
   * Provided by runtimes like `tsx`, `bun`, or `deno`.
   */
  readonly main?: boolean;
}
