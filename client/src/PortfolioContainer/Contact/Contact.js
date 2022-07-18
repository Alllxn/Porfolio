import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.css';

export function Contact() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
    //   alert(`The data you entered was: \n 
    //   name : ${name} \n
    //   email : ${email} \n
    //   description : ${description} \n`);
    };

    const verifyName = () => {
        console.log('name verified');
    }
    
    return (
        <section id="contact-container" className="component">
            <h3 className='magic-background-underline'>Contact me</h3>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input 
                    placeholder="..."
                    name="name"
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={verifyName}
                    />
                </label>
                <label>Email
                    <input 
                    placeholder="..."
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>Message
                    <textarea 
                    name="description"
                    placeholder="..."
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        </section>
    );
}