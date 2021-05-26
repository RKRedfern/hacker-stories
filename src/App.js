//import logo from './logo.svg';
import './App.css';
import Search from './Search'

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

  const handleSearch = (e) => {
    console.log(e.target.value)
  }

  return (
    <div>
      <h1> My Hacker Stories </h1>
      <Search handleSearch={handleSearch}/>
      <hr />
      <List list={stories}/>
    </div>
  );
}

const List = props => 
  props.list.map(function(item){
    return(
    <div key={item.objectId}>
      <br></br>
      <span>{item.title}</span>
      <br></br>
      <span>{item.author}</span>

    </div>
    );
});



export default App;
