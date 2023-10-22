import Contacts from 'components/ContactItem/ContactItem';
export default function ContactsList({ filtered }) {
  return (
    <div>
      <ul>
        {' '}
        {filtered.map(contact => {
          return <Contacts key={contact.id} contact={contact} />;
        })}
      </ul>
    </div>
  );
}
