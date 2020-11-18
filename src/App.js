import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      fruits:[],
      searchField:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({fruits: users}));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const { fruits, searchField } = this.state;
    const filteredFruits = fruits.filter(fruit =>
        fruit.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className='App'>
        <h1>List Name</h1>
        <SearchBox 
          placeholder='search name'
          handleChange={this.handleChange} 
        />
        <CardList fruits={filteredFruits} />
      </div>
    );
  } 
}
export default App;
