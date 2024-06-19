const BASE_URL = "http://localhost:5000";
export const Fetcher = async(url) =>{
    // async call, we update the results using the data 
    const response = await fetch(BASE_URL + url);
    const responseData =await response.json();
    return responseData;
}