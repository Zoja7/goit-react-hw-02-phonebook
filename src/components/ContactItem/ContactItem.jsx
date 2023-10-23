export default function ContactItem({ contact, handleDeleteContact }) {
  return (
    <li>
      {contact.name}: {contact.number}
      <button
        type="button"
        onClick={() => {
          handleDeleteContact(contact.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
