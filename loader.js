import { fileURLToPath, pathToFileURL } from "url";
import { dirname, resolve as pathResolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function resolve(specifier, context, nextResolve) {
  // Handle @/ imports
  if (specifier.startsWith("@/")) {
    const resolved = pathResolve(__dirname, "dist", specifier.slice(2));
    // Only add .js if it doesn't already end with .js
    const finalPath = resolved.endsWith(".js") ? resolved : resolved + ".js";
    return {
      url: pathToFileURL(finalPath).href,
      shortCircuit: true,
    };
  }

  
  return nextResolve(specifier);
}
