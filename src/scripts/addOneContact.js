import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const addOneContact = async () => {
  try {
    // Read the current content of the db.json file
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    // Generate a new contact
    const newContact = createFakeContact();
    contacts.push(newContact);

    // Write the updated array of contacts back to the file
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

    console.log('One new contact has been added successfully.');
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

// Execute the addOneContact function when the script is run
await addOneContact();
