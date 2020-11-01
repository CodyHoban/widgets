import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'

const items = [
    {
        title: 'What is react?',
        content: 'React is a ffron end javascript framework'
    },
    {
        title: 'Why use react',
        content: 'React is a a favorite JS library among engineers'
    },
    {
        title: 'How do you use react?',
        content: 'By using reusable components'
    }
];

export default () => {
    return (
        <div>
            <Search />
        </div>
    );
};