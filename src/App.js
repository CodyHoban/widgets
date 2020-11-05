import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

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

const options = [
    {
        label: 'The Color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
];

export default () => {

    return (
        <div>
            <Translate />
        </div>
    );
};