
const numbers = [1, 4, 9, 16];

const newNums = numbers.map( function(n) {
  return n*2;
})

function App() {
 
  return (
    <div>
      <h1> 
        My Hacker Stories
      </h1>

      <label htmlFor="search">Search</label>
      <input id="search" type="text" />
      
      <h2> {numbers} </h2>
      <h2> {newNums} </h2>
    </div>
  );
}

export default App;
