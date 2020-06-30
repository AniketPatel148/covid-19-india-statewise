import React from 'react';
import { Cards, Charts, Statepicker} from './components';
import styles from  './App.module.css';
import { fetchData } from './api';
import Header from './components/header/header'
import './components/font-awesome/index'


class App extends React.Component{

  state = {
    data: {},
    state: ''
  }

  async componentDidMount () {
    const data = await fetchData("Total");
    this.setState ({data: data})
  }

  handleStateChange = async (state) => {
    const data = await fetchData(state);

    this.setState({ data, state: state });
  }


  render(){
    const { data, state } = this.state;
    
    

    return (
      
      <div className={styles.main}>
        <Header />
        <div className={styles.center}>
        <Statepicker  handleStateChange={ this.handleStateChange}/>
        
        <Cards data={data}/>
       
        <Charts data={data} state={state}/>
      </div>
      </div>
    )
  }
}

export default App;
