// define a httl source url
const apiUrl = ' http://localhost:8000/posts';

// get all blogs posts
export const getPosts =() => {
    return fetch(apiUrl, { method:'GET' }).then(response=>{
        return response.json();
    });
}

// get one blog posts
export const getPost =(postId) => {
    return fetch(`${apiUrl}/${postId}`, { method:'GET' }).then(response=>{
        return response.json();
    });
}

// create a blog post
export const addPost =(post) => {
    const headers = { 'Content-Type': 'application/json'};
    const body = JSON.stringify(post);
    return fetch(apiUrl, { method:'POST' , headers: headers, body:body })
    .then(response=>{
        return response.json();
    });
}

// delete a blog post
export const deletePost =(postId) => {
    return fetch(`${apiUrl}/${postId}`, { method:'DELETE' }).then(response=>{
        return response.json();
    });
}

// update a blog post
export const updatePost =(post) => {
    const headers = { 'Content-Type': 'application/json'};
    const body = JSON.stringify(post);
    return fetch(`${apiUrl}/${post.id}`, { method:'PUT', headers: headers, body:body })
    .then(response=>{
        return response.json();
    });
}
