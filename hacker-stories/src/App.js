
const list = [
  {
    title: 'React',
    url: 'https://react.dev/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
 
  return (
    <div>
      <h1> 
        My Hacker Stories
      </h1>

      <label htmlFor="search">Search</label>
      <input id="search" type="text" />
      
      <h2> {list[0].title} {list[0].url} </h2>
      <h2> {list[1].title} {list[1].url} </h2>
    </div>
  );
}

export default App;
