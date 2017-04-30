import React from 'react'

export const Tab = (props) => {
    return (
        <div className="tab" style={{'border': '1px solid '+props.color}}>
            I'm a tab
        </div>
    )
}