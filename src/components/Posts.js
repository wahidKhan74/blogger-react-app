import React from 'react';
import PostDetails from './PostDetails';
import PostFrom from './PostFrom';

export class Posts extends React.Component {
    //data
    constructor() {
        super();
        this.state = {
            categories:[
                { code:'react' , name:'React'},
                { code:'redux' , name:'Redux'},
                { code:'angular' , name:'Angular'},
                { code:'jsx' , name:'JSX'}
            ],
            posts:[
                {
                    id:1, title :'Introduction to React js',
                    body: 'This post provides an introduction to react',
                    author :'Harry' , category:'react'
                }, {
                    id:2, title :'Advance to React js',
                    body: 'This post provides an advance to react features',
                    author :'Marry' , category:'react'
                } , {
                    id:3, title :'Introduction to Redux',
                    body: 'This post provides an introduction to react',
                    author :'Jane' , category:'redux'
                }
            ],
            filterPosts : [],
            isFiltered : false
        }
        
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
                        <PostDetails key={post.id} post={post}  />
                    )
                }
            </div>
        )
    }

    // hadleNewPost
    hadleNewPost =(post) =>{
        // console.log(post);
        this.setState((prevState)=>{
            const id = (prevState.posts.length ===0) ? 1 : prevState.posts[prevState.posts.length-1].id+1;
            // update id in the 
            post = {...post, id:id};
            return { posts : [...prevState.posts, post]}
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
               <PostFrom categories={this.state.categories}  onNewPost={this.hadleNewPost} />
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
