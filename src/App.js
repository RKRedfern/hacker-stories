//import logo from './logo.svg';
import './App.css';

// const title = 'React';

// const welcome = {
//   greeting: "Hey",
//   title: "React"
// };

// function getTitle(title){
//   return title;
// }

const list = [
  {
    title: 'React',
    author: 'Someone Very Smart',
    objectId: 0
  },
  {
    title: 'JS',
    author: 'Someone Else Very Smart',
    objectId: 1
  }
]

function App() {
  return (
    <div>
      <h1> My Hacker Stories </h1>

      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" />

      <hr />
      <List />
    </div>
  );
}

function List(){
  return list.map(function(item){
    return(
    <div key={item.objectId}>

      <span>{item.title}</span>
      <span>{item.author}</span>

    </div>
    );
  });
}


export default App;
