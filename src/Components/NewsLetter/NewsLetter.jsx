import React, { useState } from 'react';
import './NewsLetter.css';
const NewsletterSignup = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted email:', email);
        alert(`Thank you for subscribing, ${email}!`);
        setEmail('');
    };

    return (
        <div className="newsletter-container">
            <div className="newsletter-box">
                <h2>Get the Exclusive Offers on your Email </h2>
                <p>Subscribe to UrbanThreads ,get the Exclusive offers.</p>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="newsletter-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="newsletter-button">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsletterSignup;