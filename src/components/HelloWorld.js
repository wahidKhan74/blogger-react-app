import React from "react";

function HelloWorld() {

  //data 
  const people = [{ name: "John" }, { name: "Mike" }, { name: "David" }];

  return (
    // view & logic
    <div>
      <h1>Hello John Smith</h1>
      <ol>
        { people.map((person) =>
          <li key={person.name}>{person.name}</li>
        )}
      </ol>
    </div>
  );
}

export default HelloWorld;
