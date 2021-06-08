/***  index.js  */ 

            //*** Імпортуємо
            // const { listContacts,
            //         getContactById,
            //         removeContact,
            //         addContact } = require('./contacts');

            // //*** Визиваємо
            // console.log(`get current date function result: ${listContacts()}`);
            // console.log(`Id date function result: ${getContactById()}`);
            // console.log(`remove date function result: ${removeContact()}`);
            // console.log(`add date function result: ${addContact()}`);



const yargs = require('yargs');

const fncontacts = require("./contacts");

// const argv = require('yargs').argv;
const argv = yargs
  .string("action")
  .number("id")
  .string("name")
  .string("email")
  .string("phone").argv;
  
// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
   
    case 'list':
      // ... 
     //  fncontacts.listContacts();
      const contactList = await fncontacts.listContacts();
      console.table(contactList);
      break;

    case 'get':
      // ... id     
     //  fncontacts.getContactById(id);
      const contactById = await fncontacts.getContactById(id);
      console.log(contactById);
      break;

    case 'remove':
      // ... id
     //  fncontacts.removeContact(id);
      const contactRemove = await fncontacts.removeContact(id);
      console.table(contactRemove);      
      break;

    case 'add':
      // ... name email phone
      // fncontacts.addContact(name, email, phone);
      const contactAdd = await fncontacts.addContact(name, email, phone);
      console.table(contactAdd);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);





















// const { listContacts,
//         getContactById,
//         removeContact,
//         addContact } = require('./contacts.js');

// const { Command } = require("commander");
// const program = new Command();
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {

//     case "list":
//       listContacts().then((contacts) => console.table(contacts));
//       break;

//     case "get":    //?  Contacts.getContactById(id);
//       getContactById(id).then((data) => {
//         if (data) console.log([data]);
//         else console.warn(`No found contacts by id: ${id}`);
//       });
//       break;

//     case "remove":  //?  Contacts.removeContact(id);
//       removeContact(id).then((data) => {
//         if (data) console.table("Successfully removed");
//         else console.warn(`No removed data. Check the entered data.`);
//       });
//       break;

//     case "add":
//       addContact(name, email, phone).then((data) => {
//         if (data) console.table("Successfully added");
//         else console.warn(`No added data. Check the entered data.`);
//       });
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);
