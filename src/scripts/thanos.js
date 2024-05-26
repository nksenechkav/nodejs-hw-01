import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    // Read the current content of the db.json file
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    // Filter the contacts with a 50% chance to remove each contact
    contacts = contacts.filter(() => Math.random() >= 0.5);

    // Write the updated array of contacts back to the file
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

    console.log('Thanos has snapped his fingers. Some contacts have been removed.');
  } catch (error) {
    console.error('Error performing the Thanos snap:', error);
  }
};

// Execute the thanos function when the script is run
await thanos();
