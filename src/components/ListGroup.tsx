function ListGroup() {
  let items = ["New York", "Paris", "London", "Los Angeles", "Las Vegas"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <h1>No items found</h1>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
