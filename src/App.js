//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Search from './Search';

// const title = 'React';

// const welcome = {
//   greeting: "Hey",
//   title: "React"
// };

// function getTitle(title){
//   return title;
// }


const App = () => {

  const stories = [
    {
      title: 'React',
      author: 'Someone Very Smart',
      objectId: 0
    },
    {
      title: 'JS',
      author: 'Someone Else Very Smart',
      objectId: 1
    },
    {
      title: 'Book 3',
      author: 'Smarty Pants',
      objectId: 2
    },
    {
      title: 'Book 4',
      author: 'Elon Musk',
      objectId: 3
    },
    {
      title: 'Book 5',
      author: 'Literally Einstein',
      objectId: 4
    }
  ]

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

  const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = React.useState(
      localStorage.getItem(key) || initialState
    );

    React.useEffect(() => {
      localStorage.setItem('key', value);
      }, [value, key]);

    return[value, setValue];
  }

  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  };

  const searchedStories = stories.filter(story => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const List = ({ list }) => 
    list.map(item => <Item key={item.objectId} item={item} />); 

  const Item = ({ item }) => (
    <div>
      <span> {item.title} </span>
      <span> {item.author} </span>
    </div>
  )

  return (
    <div>
      <h1> My Hacker Stories </h1>
      <Search search={searchTerm} onSearch={handleSearch}/>
      <hr />
      <List list={searchedStories}/>
    </div>
  );
}





export default App;
