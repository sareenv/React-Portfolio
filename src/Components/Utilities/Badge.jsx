import React from 'react'

const Badge = (props) => {
    return (
        <div>
            <span class="badge badge-dark" style={{width: '5rem', marginLeft: '0.4rem', marginTop: '0.4rem'}}>{props.tag}</span>
        </div>
    )
}

export default Badge