import React from 'react';

//function List()
const List = (props) => {
  return props.list.map
  (
    //function(item) 
    item =>
    {
      return (
        <div key= {item.objectID}>
          <span> 
            <a href={item.url}> {item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </div>
      ); //return should have beginning parenthesis at the same line of code
    } //fuction(item)
  ) //list.map
} //function List()

/****** BE CAREFUL! 
onChange={props.onSearch}
***************************/
const Search = props => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" onChange={props.onSearch} />
    </div>
  );// return 
}//const Search

//function App() 
const App = () =>
{
  const stories = [
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
  ]; //const stories

  const [searchTerm, setSearchTerm] = React.useState('');
  
  //function handleSearch (event) {
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function(story){
    return story.title.includes(searchTerm);
  }); 
  
  return (
    <div>
      <h1> 
        My Hacker Stories
      </h1>

      <Search onSearch={handleSearch} />
 
      <hr/>

      <List list={searchedStories} /> 
    </div>
  ); //return
} // function App()

export default App;
