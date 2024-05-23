import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    // Read the content of the db.json file
    const data = await fs.readFile(PATH_DB, 'utf8');
    // Parse the JSON data to a JavaScript array
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};

// Log the result of getAllContacts function
console.log(await getAllContacts());
