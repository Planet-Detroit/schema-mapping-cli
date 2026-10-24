import path from 'path';

/**
 * Where the SQLite progress database for an output file lives: next to it, same name, `.db`.
 * Kept in its own module (no SQLite import) so configuration code can use it without loading
 * the native database driver.
 */
export function deriveDatabasePath(outputPath: string): string {
  const dir = path.dirname(outputPath);
  const basename = path.basename(outputPath, path.extname(outputPath));
  return path.join(dir, `${basename}.db`);
}
