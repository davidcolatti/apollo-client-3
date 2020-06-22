import React, { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";

const ALL_STARSHIPS = gql`
  {
    starships {
      id
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(ALL_STARSHIPS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops... something is wrong!</p>;

  return (
    <Fragment>
      <h2>Star Wars Spaceships</h2>
      {data.starships.map((starship, id) => {
        return <p key={id}>{starship.name}</p>;
      })}
    </Fragment>
  );
}

export default App;
