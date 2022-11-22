import React from 'react'
import Wrapper from './Gender.styled'

// importing data
import GenderData from './Gender.data'


const Gender = () => {
    return (
        <Wrapper>
            {GenderData.map( (item) => (
                <div key={item.id} className='card ranking-card'>
                    <img src={item.pic} alt='wulf' />
                    <div className='card-body'>
                        <h4 className='card-title'>{item.title}</h4>
                        <p className="card-text">{item.description}</p>
                    </div>
                </div>
            ))}
        </Wrapper>
    )
}

export default Gender
