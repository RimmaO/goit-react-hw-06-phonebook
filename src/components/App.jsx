import { Toaster } from 'react-hot-toast';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const createContact = ({ name, number }) => {
  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     return toast.error(`${name} is already in contacts`);
  //   }
  //   const newContact = {
  //     name,
  //     number,
  //     id: nanoid(),
  //   };

  //   setContacts(contacts => [newContact, ...contacts]);
  // };

  // const handleChangeFilter = event => {
  //   setFilter(event.target.value);
  // };

  return (
    <>
      <Toaster />
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
