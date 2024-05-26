import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    // Write an empty array to the db.json file
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf8');
    console.log('All contacts have been removed successfully.');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

// Execute the removeAllContacts function when the script is run
await removeAllContacts();
