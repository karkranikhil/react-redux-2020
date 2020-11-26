import axios from "axios";  
const BASEAPI = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com/",
    timeout:"10000",
    headers: {'accept': 'application/json', 'Content-Type': 'application/json'}
});


const httpRequest = async({method="get", url="/",config={}, data = null })=>{
    try {
        // fetch data from a url endpoint
        const response =  BASEAPI[method](url, config, data)
        return response
      } catch(error) {
        return error
        // appropriately handle the error
      } 
}

export default httpRequest;
