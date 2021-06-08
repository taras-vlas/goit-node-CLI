// contacts.js

//***Імпортуємо
const path = require('path');
//const fs = require('fs'); 
const fs = require('fs').promises; 

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */
const  contactsPath  = path.resolve('db', './contacts.json'); //  path.join('db', './contacts.json') -абсол.
console.log(__dirname);
console.log('contactsPath: ', contactsPath );

// TODO: задокументировать каждую функцию

    async function listContacts() {
        try{
            const data = await fs.readFile(contactsPath, 'utf8')
            //console.log('1....list Contacts:', JSON.parse(data)) //Вивести 
            return     JSON.parse(data);

        } catch (err) {
            console.warn(err)
        } 
    };

    async function getContactById(contactId) {
        //contactId = 2;
        try{
            const data = await listContacts()
            //console.log('2....get Contact:', data.find( ({ id }) => id === contactId))  //Вивести 
            return data.find(({ id }) => id === contactId)
    
            } catch (err) {
                console.warn(err)
            } 
        };


    async function removeContact(contactId) {   
        //contactId = 2;
        try{
           const data = await listContacts()   // getContactById - містить 1 контакт
           const remainContent = data.filter( ({ id }) => id !== contactId)  //?parseInt()?   все крім id = contactId
            //     console.log(`Contact with ID "${contactId}" not found and don't removed!`);
            //     return;
            
            await fs.writeFile(contactsPath, (JSON.stringify(remainContent, null, '\t')), 'utf8');
            console.log(`Contact deleted - id:${contactId} `);
            //console.log(remainContent);
            return;
        } catch (err) {
            console.warn(err)
        } 
    };


    async function addContact(name, email, phone) {
        
        try {
            const data = await listContacts();   // getContactById - містить 1 контакт
            //const data = await fs.readFile(contactsPath, 'utf8')
                //*** Метод  map    
            const arrayId = data.map(allData => allData.id)
            
                //*** Метод  Math.max()
            //console.log(Math.max(...arrayId))         
            const nextId = Math.max(...arrayId) + 1;
         
            //console.log('4.... nextId: ', nextId, name, email, phone);
            if (name === "undefined") return 'Undefined value!'; //=== "string"

            const contacts =
                [ ...data, { id: nextId, name, email, phone }];
            
            await fs.writeFile(contactsPath,  JSON.stringify(contacts, null,'\t'), 'utf8');
            console.log(`New contact added: ${name}`);
            return ;

        } catch (err) {
            console.warn(err)
        }       
    };


module.exports = {    //або  exports   для ECMOscript
    listContacts,
    getContactById,
    removeContact,
    addContact
};

