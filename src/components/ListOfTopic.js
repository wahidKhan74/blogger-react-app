import React from "react";

class ListOfTopic extends React.Component { 

    static defaultProps  = {
        testTopics : [ 
            'React JS', 'Node JS', 'Compound components',  
            'Lifecycle Methods', 'Event Handlers', 
            'Router', 'React Hooks', 'Redux', 
            'Context'
          ]
    }

    constructor(props) { 
        super(props) 

        this.state = {
            testName: "React JS test",
            topics:''
        }
        this.updateState = this.updateState.bind(this)
    }

    listOfTopics() {
        return (
            <ul>
                {this.props.testTopics.map(t=>(
                    <li>{t}</li>
                ))}
            </ul>
        )
    }

    updateState() {
        // Changing state 
        this.setState(
            {
                testName: "Test Topics are",
                topics: this.listOfTopics()
            }
        )
    }

    render(){ 
        return (
            <div>
                <h2>Test Information</h2> 
                <p>{this.state.testName}</p>
                <p>{this.state.topics}</p>
                <button onClick={this.updateState}>
                    Update state
                </button>
            </div>
        )
    }
}

export default ListOfTopic;