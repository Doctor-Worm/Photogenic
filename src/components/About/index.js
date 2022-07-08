import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
    <section className='my-5' >
        <h1 id="about">
            Who Am I?
        </h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        <div className='my-2'>
            <p>
                Dolor eu irure nulla laboris voluptate excepteur tempor magna sit. Consectetur consequat adipisicing incididunt qui dolor velit cupidatat velit eu aliqua. Voluptate commodo sit mollit qui veniam ut nisi irure. Sint incididunt amet veniam aute cillum fugiat adipisicing ex labore sunt sunt laborum ea. Voluptate tempor sunt anim ad mollit Lorem ullamco non adipisicing ipsum deserunt aliquip laborum. Voluptate reprehenderit nostrud mollit enim eiusmod fugiat officia culpa est elit exercitation. Fugiat consequat occaecat ut proident reprehenderit minim.
            </p>
        </div>
    </section>
    );
};


export default About;