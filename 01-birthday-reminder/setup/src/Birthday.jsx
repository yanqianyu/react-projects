import React from 'react'

class Birthday extends React.Component {
    render() {
        return (
            <div className='person'>
                <img src={this.props.person.image} alt={this.props.person.name}></img>    
                <div className='right'>
                    <h4>{this.props.person.name}</h4>
                    <p>{this.props.person.age} years</p>
                </div>
            </div>
        )
    }
}

export default Birthday;