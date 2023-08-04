import PropTypes from 'prop-types';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { deleteContact } from 'redux/contactsSlice';
import { Item, Span } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Span>
      <Item>
        {name}: {number}
      </Item>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </Span>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
