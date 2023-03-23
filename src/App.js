import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const everyone_else = people.filter(
    (person) => person.profession != "chemist"
  );
  const listItems = everyone_else.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  const chemists = people.filter((person) => person.profession == "chemist");
  const chemistsItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Chemists</h1>
      <ul>{chemistsItems}</ul>
      <h1>Everyone Else</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
