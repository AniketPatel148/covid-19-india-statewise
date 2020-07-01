import React from 'react';
import { Cards, Charts, Statepicker, Button, Header, Comparisons} from './components';
import styles from  './App.module.css';
import { fetchData,Order } from './api';
import './components/font-awesome/index';

class App extends React.Component{

  state = {
    data: {},
    state: '',
    showChart: false,
    ButtonName: "Charts",
    showComparison: false,
    ButtonName2: "Compare",
    Order:[]
  }

  async componentDidMount () {
    const data = await fetchData("Total");
    this.setState ({data: data})
  }

  handleStateChange = async (state) => {
    const data = await fetchData(state);
    this.setState({ data, state: state });
  }

  handleCompare = async () => {
    const order = await Order()
    this.setState({Order : order})
     }

  clickEventHandler = ()  => {

    const ClickHandler= this.state.showChart
    let ButtonName=this.state.ButtonName
    ClickHandler ? (ButtonName = 'Charts'):(ButtonName = 'Cards')
    this.setState({showChart: !ClickHandler,
    ButtonName: ButtonName})

    }

  clickEventHandler2 = ()  => {

    const ClickHandler= this.state.showComparison
    let ButtonName2=this.state.ButtonName2
    ClickHandler ? (ButtonName2 = 'Compare'):(ButtonName2 = 'Cards')
    this.setState({showComparison: !ClickHandler,
    ButtonName2: ButtonName2})

    this.handleCompare()
    
    }




  render(){
    const { data, state, Order } = this.state; 
    

    return (
      
      <div className={styles.main}>
        <Header />
        <div className={styles.center}>
        <Statepicker  handleStateChange={ this.handleStateChange}/>
        <Button 
        click1={this.clickEventHandler}   
        name1={this.state.ButtonName}
        click2={this.clickEventHandler2}   
        name2={this.state.ButtonName2}/>
      
       {this.state.showChart?
        <Charts data={data} state={state}/> 
        : <Cards data={data}/>}

        <Comparisons order={Order}/>

      
      </div>
      </div>
    )
  }
}

export default App;
