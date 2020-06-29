import axios from 'axios';

const url = 'https://api.covid19india.org/data.json';

export const fetchData = async () => {
    try{
        
          const { data} = await axios.get(url);
          
          const modifiedData = {
              confirmed:data.statewise[0].confirmed,
              deaths:data.statewise[0].deaths,
              active:data.statewise[0].active,
              recovered:data.statewise[0].recovered,
              lastUpdate:data.statewise[0].lastupdatedtime,
              dailyconfirmed:data.cases_time_series[data.cases_time_series.length - 1].dailyconfirmed,
              dailyrecovered:data.cases_time_series[data.cases_time_series.length - 1].dailyrecovered,
              dailydeceased:data.cases_time_series[data.cases_time_series.length - 1].dailydeceased,
         
          }


          return modifiedData;

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