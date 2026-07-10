//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Rodrigo';
  const age = 24;
  var hobbies = ['Soccer, Basketball, VideoGames, Coding'];
  return (
    <div>
      {/* add JSX here */}
      <h1>My name is {name}</h1>
      <p>
        {' '}
        Hello I am {name} I am {age} years old and here are some of the hobbies
        I like to do in my free time.
      </p>
      <ul>
        {hobbies.map((fruit, index) => (
          <li key={index}>{hobbies}</li>
        ))}
      </ul>
    </div>
  );
}
