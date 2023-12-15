const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const contacts = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
      break;
    case "get":
      const oneContactById = await contacts.getContactById(id);
      return console.log(oneContactById);
      break;
    case "add":
      const addNEwContact = await contacts.addContact({ name, email, phone });
      return console.log(addNEwContact);
      break;
    case "remove":
      const removeContactById = await contacts.removeContact(id);
      return console.log(removeContactById);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "list" });

// invokeAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6" });

// invokeAction({
//   action: "add",
//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// });

// invokeAction({ action: "remove", id: "drsAJ4SHPYqZeG-83QTVW" });

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
