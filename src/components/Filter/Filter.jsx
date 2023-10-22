export default function Filter({ value, onChange }) {
  return (
    <label>
      <p>Filter contacts by name:</p>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
}
