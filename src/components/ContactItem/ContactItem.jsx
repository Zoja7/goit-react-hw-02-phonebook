export default function ContactItem({ contact }) {
  return (
    <li>
      {contact.name}: {contact.number}
    </li>
  );
}
