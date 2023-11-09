import React from 'react';

function FoxFacts() {
 const facts = [
   'Foxes are great night-time predators',
   'Foxes are considered to be solitary animals',
   'Foxes can make over 40 different sounds',
   'Foxes make use of the earths magnetic field to hunt',
   'People used to fear foxes but they are actually considered friendly animals',
   'Foxes only reproduce once a year',
   'Baby foxes are unable to see, walk or thermoregulate when they are born',
   'Foxes dont just live in rural areas, they also live in cities',
   'Foxes have a very varied diet',
   'A fox is one of the few animals that can jump higher than it is tall.',
 ];

 return (
    <div>
      <h1>Fox Facts</h1>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
 );
}

export default FoxFacts;