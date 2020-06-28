import React from 'react';
import { Cards, Charts, Statepicker} from './components';
import styles from  './App.module.css';
import { fetchData } from './api';


class App extends React.Component{

  state = {
    data: {}
  }

  async componentDidMount () {
    const data = await fetchData();
    this.setState ({data: data})
  }
  render(){
    const { data } = this.state;

    return (
      <div className={styles.center}>
        <Cards data={data}/>
        <Statepicker />
        <Charts />
      </div>
    )
  }
}

export default App;
