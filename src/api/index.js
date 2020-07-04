import axios from 'axios';

const url = 'https://api.covid19india.org/data.json';

export const fetchData = async (state) => {

 
    try{
        
          const { data} = await axios.get(url);

          if(state){
            const id = (data.statewise.findIndex( s => {
                return s.state === state
            }));
     
            const modifiedData = {
                confirmed:data.statewise[id].confirmed,
                deaths:data.statewise[id].deaths,
                active:data.statewise[id].active,
                recovered:data.statewise[id].recovered,
                lastUpdate:data.statewise[id].lastupdatedtime,
                dailyconfirmed:data.statewise[id].deltaconfirmed,
                dailyrecovered:data.statewise[id].deltarecovered,
                dailydeceased:data.statewise[id].deltadeaths,
                 }
          
                 return modifiedData;

          }
    }catch(error){

    }
    
}

export const fetchDataWithComma = async (state) => {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    

 
    try{
        
          const { data} = await axios.get(url);

          if(state){
            const id = (data.statewise.findIndex( s => {
                return s.state === state
            }));
     
            const modifiedData = {
                confirmed:numberWithCommas(data.statewise[id].confirmed),
                deaths:numberWithCommas(data.statewise[id].deaths),
                active:numberWithCommas(data.statewise[id].active),
                recovered:numberWithCommas(data.statewise[id].recovered),
                lastUpdate:data.statewise[id].lastupdatedtime,
                dailyconfirmed:numberWithCommas(data.statewise[id].deltaconfirmed),
                dailyrecovered:numberWithCommas(data.statewise[id].deltarecovered),
                dailydeceased:numberWithCommas(data.statewise[id].deltadeaths),
                 }
          
                 return modifiedData;

          }
    }catch(error){

    }
    
}


export const fetchDailyData = async () => {
    try{
        const { data} = await axios.get(url);

        return data.cases_time_series;

      

    } catch(error){
        return error;
    }
}

export const States = async () => {
    try{
        const { data: { statewise }} = await axios.get(url)
        
        return statewise.map( state => state.state)
      

    }catch(error){
        console.log(error);
        
    }

}

export const Order = async () => {
    try{
        const { data: { statewise }} = await axios.get(url)
        statewise.shift()

        
        const sortedArray =  statewise.sort(function(a, b) {
            return parseFloat(b.confirmed) - parseFloat(a.confirmed);
        });
      
        return sortedArray

    }catch(error){
        console.log(error);
        
    }
}
