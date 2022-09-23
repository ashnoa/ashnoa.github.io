import React from 'react';
import './App.css';

type SectionProps = {
    title: string;
}

function Section(props: SectionProps) {
    return (
        <div className='Section'>
            <p className='Section-title'>{props.title}</p>
        </div>
    );
}

export default Section;
