const contacts = require("./db/contacts");
console.log("REREaqwe");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.getAll();
      return console.table(allContacts);
  }
};

invokeAction({ action: "read" });
