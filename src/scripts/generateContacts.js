import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  try {
    // Читаємо поточний вміст файлу db.json
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    // Генеруємо нові контакти
    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    // Записуємо оновлений масив контактів назад у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

    console.log(`${number} new contacts have been added successfully.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

// Викликаємо функцію generateContacts з переданим аргументом
await generateContacts(5);
