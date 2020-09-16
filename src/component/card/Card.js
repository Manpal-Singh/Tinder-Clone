import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./Card.css";
import database from "../../firebase";

function Card() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database.collection("people").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });
    // return () => {
    //     unsubscribe();
    // }
  }, []);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <div>
      <div className="tinder-card">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              onSwipe={onSwipe}
              onCardLeftScreen={() => onCardLeftScreen("fooBar")}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
