import React from 'react';
import PostDetails from './PostDetails';

class Posts extends React.Component {
    //data
    constructor() {
        super();
        //statefull component.
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleFilterCategoryChange = this.handleFilterCategoryChange.bind(this);

        this.state = {
            post: { id :0, title:'', body:'', author:'', category:'' },
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

    //render categories
    renderCategories() {
        return this.state.categories.map(category=>{
            return <option key={category.code} value={category.code}> {category.name} </option>
        });
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

    // Events Handlers
    handleCategoryChange(event) {
        // console.log(event.target.value);
        const post = this.state.post;
        this.setState({ post: {...post, category: event.target.value}});
    }

    handleTitleChange (event) {
        // console.log(event.target.value);
        const post = this.state.post;
        this.setState({ post: {...post, title: event.target.value}});
    }

    handleAuthorChange  (event) {
        // console.log(event.target.value);
        const post = this.state.post;
        this.setState({ post: {...post, author: event.target.value}});
    }

    handleBodyChange (event) {
        // console.log(event.target.value);
        const post = this.state.post;
        this.setState({ post: {...post, body: event.target.value}});
    }

    handleFormSubmit(event) {
        // prevent default event submit
        event.preventDefault();

        // console.log("This => ", this);
        console.log("Post => ", this.state.posts);

        // append post object
        this.setState((prevState)=>{
            const id = prevState.posts.length ===0 ? 1 : prevState.posts[prevState.posts.length-1].id+1;
            //update id in the post
            const post = {...this.state.post, id:id};
            return {posts: [...prevState.posts,post]}
        })
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
            <div className="col-sm-4">
                
                {this.filterPost()}
                <br></br>
                <br></br>

                <h3>Post Form</h3>
                <div className='car bg-light'>
                    <div className='card-body'>
                            <form onSubmit={this.handleFormSubmit}>
                                <div class="form-group">
                                    <label for="title">Post Title</label>
                                    <input type="text" className="form-control" id="title" placeholder="Enter Title" 
                                    onChange={this.handleTitleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="body">Body</label>
                                    <input type="text" className="form-control" id="body" placeholder="Enter body" 
                                    onChange={this.handleBodyChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="author">Author</label>
                                    <input type="text" className="form-control" id="author" placeholder="Enter author" 
                                    onChange={this.handleAuthorChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="author">Selecty category</label>
                                    <select className='form-control' id="category" name="category" value={this.state.post.category} 
                                     onChange={this.handleCategoryChange} >
                                        <option>...</option>
                                        {this.renderCategories()}
                                    </select>
                                </div>
                                <button type='submit' className='btn btn-primary' >Save </button>
                            </form>
                    </div>
                </div>
                
            </div>            
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

export default Posts;