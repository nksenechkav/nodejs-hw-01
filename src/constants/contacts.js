import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file path in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PATH_DB = path.join(__dirname, '../db/db.json');
