import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>
            <h1>Hello,</h1>
            <p>This is my first react app!</p>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)