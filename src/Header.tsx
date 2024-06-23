import React from 'react';
import './App.css';
import Link from './Link';

function Header() {
    return (
        <header className="App-header">
            <p className='App-header-title'>
                Tanka Poet / Software Developer in Japan
            </p>
            <p className="App-header-name">
                Hiroki Asano
            </p>
            <div className='App-header-contents'>
                <p className='App-header-address'>
                    asano.hiroki@gmail.com
                </p>
                <Link
                    title='Twitter'
                    url='https://twitter.com/ashnoa'
                ></Link>
                <Link
                    title='Blog'
                    url='https://ashnoa.hatenablog.com/'
                ></Link>
                <Link
                    title='YouTube'
                    url='https://youtube.com/@ashnoa?si=oJK3FoML3XyhQ5r1'
                ></Link>
            </div>
        </header>
    );
}

export default Header;
