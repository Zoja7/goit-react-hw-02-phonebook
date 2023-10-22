import Contacts from 'components/ContactItem/ContactItem';
export default function ContactsList({ contacts }) {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {' '}
        {contacts.map(contact => {
          return <Contacts key={contact.id} contact={contact} />;
        })}
      </ul>
    </div>
  );
}
