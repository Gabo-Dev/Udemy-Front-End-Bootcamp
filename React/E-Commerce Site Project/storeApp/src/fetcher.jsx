const BASE_URL = "http://localhost:5000";
export const Fetcher = async (url) => {
    let responseObject = { errorMessage :'', data:[]};
    try {
        // async call, we update the results using the data 
        const response = await fetch(BASE_URL + url);
        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }
        const responseData = await response.json();
        responseObject.errorMessage = '';
        responseObject.data = responseData;
        return responseObject;
    } catch (error) {
        // set json to manage the error
        responseObject.errorMessage = error.message;
        return responseObject;
    }
}

export const getCategories = () =>{
    return Fetcher('/categories');
}
export const getProducts = id => {
    return Fetcher('/products?catId=' + id);
}