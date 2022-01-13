import React from 'react';
import PostDetails from './PostDetails';
import PostFrom from './PostFrom';
import { getPosts, addPost, deletePost, updatePost} from '../services/PostsAPI';
import { getCategories } from '../services/CategoriesAPI';

export class Posts extends React.Component {
    //data
    constructor() {
        super();
        this.state = {
            categories:[],
            post :{ id: "" , author: "", body: "", category: "" , title: "" },
            posts:[],
            filterPosts : [],
            isFiltered : false
        }        
    }

    // component lifecycle methods
    componentDidMount() { 
        // load all blog post data
        getPosts().then( postsObjs =>{
            // console.log("Blogs Post data", postsObjs);
            this.setState({ posts : postsObjs});
        }).catch(error=>{
            console.log("Failed to load blogs posts data.");
        });

        //load all categories
        getCategories().then(resposnse=>{
            // console.log("Blogs Categories ",resposnse);
            this.setState({ categories : resposnse});
        }).catch(error=>{
            console.log("Failed to load blogs categories data.");
        });
    }

    // handle delete blog post
    handleDelete= (id) => {
        // console.log(id);
        deletePost(id).then(response=>{
            this.setState((prevState)=>{
                const filteredPost = prevState.posts.filter(post=>{
                    return post.id != id;
                });
                return { posts : filteredPost };
            });
        }).catch(error=>{
            console.log("Failed to delete a post data.");
        });
    }

    // handle update
    handleUpdate = (post) => {
       // console.log("update blpg post ",post);
       this.setState({post : post });
    }

    // logic & template
    renderPost() {
        if(!this.state.isFiltered) {
            // all post as filtered
            this.state.filterPosts = this.state.posts;
        }
        return (
            <div className='col-sm-8'>
                <h3>All about posts</h3>
                {
                    this.state.filterPosts.map((post)=>
                        <PostDetails key={post.id} post={post}  onDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
                    )
                }
            </div>
        )
    }
    // hanle post for update or create 
    hadlePost = (post)=>{
        if(post.id !== undefined && post.id !=="" && post.id !=null) {
            this.handleUpdatePost(post);
        } else{
            this.hadleNewPost(post);
        }
    }
    // hadleNewPost
    hadleNewPost =(post) =>{
        delete post.id;
        addPost(post).then(newPost=>{
            console.log(newPost);
            this.setState((prevState)=>{
                return { posts : [...prevState.posts, newPost] }
            })
        }).catch(error=>{
            console.log("Failed to create post data.");
        });
    }
    // handle Update Post
    handleUpdatePost =(post)=>{
        updatePost(post).then(updatePost =>{
            console.log(updatePost);
            // reflect in ui
            this.setState((prevState)=>{
                let updatedList = prevState.posts.map(pst=>{
                    if(pst.id === updatePost.id)
                        return updatePost;
                    else 
                        return pst;                    
                });
                return { posts : [...updatedList ]}
            });
        });
    }


    // Events Handlers
    handleFilterCategoryChange(event) {
       
        this.setState((prevState)=>{
            let filterPosts = prevState.posts.filter(post=>{
                return post.category === event.target.value;
            });
            this.state.isFiltered = true;
            this.state.post.category = event.target.value;
            return { filterPosts : filterPosts }
        });
       
    }

    // render create post form
    renderForm() {
        return (
               <PostFrom categories={this.state.categories}  onNewPost={this.hadlePost}  post={this.state.post} />
        )
    }

    // filter post
    filterPost() {
        return (
            <div>
                    <h3 for="author"> Select posts buy category</h3>
                    <select className='form-control' id="category" name="category" value={this.state.post.category} 
                    onChange={this.handleFilterCategoryChange} >
                        <option>All</option>
                        {this.renderCategories()}
                </select>
            </div>
        )
    }

    // default render method
    render() {
        return (
            <div className='row'>
                { this.renderForm() }
                { this.renderPost() }
            </div>
    )
        
    }
}// posts
