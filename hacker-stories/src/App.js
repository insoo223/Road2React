
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

function showList() {
  let totList='';
  for (let i=0; i<2; i++)
    if (totList == '')
      totList = list[i].title;  
    else
      totList = totList + ', ' + list[i].title;  
  return totList;
}

function App() {
 
  return (
    <div>
      <h1> 
        My Hacker Stories
      </h1>

      <label htmlFor="search">Search</label>
      <input id="search" type="text" />
      
      <h2> {showList()} </h2>
    </div>
  );
}

export default App;
