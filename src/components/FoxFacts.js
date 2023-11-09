import React from 'react';

function FoxFacts() {
 const facts = [
   'Foxes can see sounds!',
   'The scientific name for a fox is Vulpes vulpes.',
   'Foxes communicate using a complex network of sounds.',
   'A group of foxes is called a "vulpine".',
   'The fox is the national animal of India.',
   'A vixen is a female fox.',
   'Foxes are related to the wolf and the domestic dog.',
   'A fox has 34 teeenths!',
   'A fox has 5 sets of toes on its hind feet and 4 sets on its front feet.',
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