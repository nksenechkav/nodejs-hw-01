import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  try {
    // Read the current content of the db.json file
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    // Generate new contacts
    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    // Write the updated array of contacts back to the file
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

    console.log(`${number} new contacts have been added successfully.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

// Call the generateContacts function with the provided argument
await generateContacts(5);
