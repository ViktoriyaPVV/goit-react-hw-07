import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  // selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
// import { selectFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  // const phonebooks = useSelector(selectContacts);
  // const searchFilter = useSelector(selectFilter);
  // const filteredData = phonebooks.filter((phonebook) =>
  //   phonebook.name
  //     .toLowerCase()
  //     .trim()
  //     .includes(searchFilter.toLowerCase().trim())
  // );

  return (
    <ul className={s.list}>
      {filteredContacts.map((item) => (
        <Contact
          key={item.id}
          name={item.name}
          number={item.number}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
