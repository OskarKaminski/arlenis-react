import React from 'react'
import {Article} from '../Article'
import './App.scss';

export class App extends React.Component {

    constructor (props) {
        super()
    }

    render () {
        return (
            <div>
                <div className="content">
                    <Article />
                    <Article />
                    <Article title="Hello Arlenis"/>
                    <Article />
                    <Article />
                </div>
            </div>
        )
    }
}

