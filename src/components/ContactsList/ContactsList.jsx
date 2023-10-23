import ContactItem from 'components/ContactItem/ContactItem';
export default function ContactsList({ hasFiltered, handleDeleteContact }) {
  return (
    <div>
      <ul>
        {' '}
        {hasFiltered.map(contact => {
          return (
            <ContactItem
              handleDeleteContact={handleDeleteContact}
              key={contact.id}
              contact={contact}
            />
          );
        })}
      </ul>
    </div>
  );
}
