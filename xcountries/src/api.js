import axios from 'axios';

export const fetchData=async ()=>{
    try{
        let countryData=await axios.get('https://restcountries.com/v3.1/all');
        console.log(countryData);
        return countryData.data
    }catch(err){
        console.log(err);
    }
}