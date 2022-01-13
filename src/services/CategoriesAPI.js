const apiUrl = 'http://localhost:8000/categories';

// get all categories
export const getCategories =() => {
    return fetch(apiUrl, { method:'GET' }).then(response=>{
        return response.json();
    });
}
