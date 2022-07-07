import React from 'react';

const categories = [
    {
        name: "Commercial",
        description: "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "Portraits", description: "portraits of people in my life" },
    { name: "Food", description: "Delicious delicacies" },
    {
        name: "Landscape",
        description: "Fields, farmhouse, waterfalls, and the beauty of nature",
    }
];

// When you map over an array in a JSX expression, you should return only a single JSX element
// the onClick function's name will be categorySelected
function categorySelected(name) {
    console.log(`${name} clicked`);
};

function Nav() {
    return(
        <header>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a data-testid="about" href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className='mx-1'
                            key={category.name}
                        >
                        <span onClick={() => categorySelected(category.name)} >
                            {category.name}
                        </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;