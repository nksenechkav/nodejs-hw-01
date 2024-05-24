import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    // Read the content of the db.json file
    const data = await fs.readFile(PATH_DB, 'utf8');
    // Parse the JSON data to a JavaScript array
    const contacts = JSON.parse(data);
    // Return the number of contacts
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    return 0;
  }
};

// Log the result of countContacts function
console.log(await countContacts());
