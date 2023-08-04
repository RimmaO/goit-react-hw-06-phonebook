import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);
  const getFilterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul>
      {getFilterContacts &&
        getFilterContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
