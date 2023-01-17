import './Hello.css';
import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <div class="test1 bg-dark-red container">
                <h1 className='text-success'>Louis Anh Tran</h1>
                <h2>React is the best in the world</h2>
            </div>
        );
    }
}

export default Hello;