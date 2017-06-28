import React, {Component} from 'react'

class SearchBar extends Component{
    // must have constructor!!!!!!!! very first entry if you have class extends
    constructor(props){
        super(props);
        this.state={
            searchInput: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.searchFunction(this.state.searchInput)
    }

    handleChange(event){
        this.setState({
            searchInput: event.target.value,
        })
    }

    render(){
        console.log(this.state.searchInput)
        return(
            <form onSubmit = {this.handleSubmit}>
                <input type="text" value={this.state.searchInput} onChange={this.handleChange} />
                <button type="submit">Search</button>
            </form>
        )
    }
}


export default SearchBar