import React from 'react';
import PostDetails from './PostDetails';

class Posts extends React.Component {
    //data
    constructor() {
        super();
        //statefull component.
        this.state = {
            post: { id :0, title:'', body:'', author:'', category:'' },
            categories:[
                { code:'react' , name:'React'},
                { code:'redux' , name:'Redux'},
                { code:'angular' , name:'Angular'}
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
            ]
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
        return (
            <div className='col-sm-8'>
                <h3>All about posts</h3>
                {
                    this.state.posts.map((post)=>
                        <PostDetails key={post.id} post={post}  />
                    )
                }
            </div>
        )
    }
    // default render method
    render() {
        return (
            <div className='row'>
                {this.renderPost()}
            </div>
    )
        
    }
}// posts

export default Posts;