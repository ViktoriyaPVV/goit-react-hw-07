import { FaUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";

import { deleteContactThunk } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <p className={s.text}>
        <FaUser />
        {name}
      </p>
      <p className={s.text}>
        <FaPhone />
        {number}
      </p>
      <button type="button" onClick={() => dispatch(deleteContactThunk(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
