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
                dailyconfirmed:data.cases_time_series[data.cases_time_series.length - 1].dailyconfirmed,
                dailyrecovered:data.cases_time_series[data.cases_time_series.length - 1].dailyrecovered,
                dailydeceased:data.cases_time_series[data.cases_time_series.length - 1].dailydeceased,
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