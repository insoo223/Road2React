
const numbers = [1, 4, 9, 16];

function App() {
 
  return (
    <div>
      <h1> 
        My Hacker Stories
      </h1>

      <label htmlFor="search">Search</label>
      <input id="search" type="text" />
      <hr/>
      <h2> {number} </h2>
      <h2> {numbers.map(function(n) {
              return <div>{n*2}</div>;
              })
           } </h2>
      
    </div>
  );
}

export default App;
