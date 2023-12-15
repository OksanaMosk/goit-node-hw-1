const contacts = require("./db/contacts");
console.log("REREaqwe");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      const oneContactById = await contacts.listContacts(id);
      return console.log(oneContactById);
  }
};

invokeAction({ action: "list" });
invokeAction({ action: "get", id: "drsAJ4SHPYqZeG-83QTVW" });
