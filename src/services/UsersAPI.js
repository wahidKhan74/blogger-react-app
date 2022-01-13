const apiUrl ="http://localhost:8000/users";

// Get user by email
export const getUser = (email) =>{
    return fetch(`${apiUrl}?email=${email}`, { method:'GET' }).then(response=>{
        return response.json();
    });
}
