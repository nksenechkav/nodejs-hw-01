import path from 'path';
import { fileURLToPath } from 'url';

// Отримання поточного шляху в ES-модулі
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PATH_DB = path.join(__dirname, '../db/db.json');
