import React from 'react'

class Birthday extends React.Component {
    render() {
        return (
            <div className='birthdayWrapper'>
                <div className='left'>
                    <img src={this.props.person.image}></img>
                </div>
                <div className='right'>
                    <p>{this.props.person.name}</p>
                    <p>{this.props.person.age}</p>
                </div>
            </div>
        )
    }
}

export default Birthday;