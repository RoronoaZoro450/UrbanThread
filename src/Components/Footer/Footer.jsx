import React from 'react'
import './Footer.css'

const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon">
        {children}
    </a>
);

const Footer = () => {
  return (
    <div className="footer-app-container">
    <footer className="footer">
        <div className="footer-top">
            <div className="footer-logo">
                <h2>UrbanThreads</h2>
                <p>Your Style, Your Store.</p>
            </div>
            <div className="footer-links-container">
                <div className="footer-links-column">
                    <h3>Shop</h3>
                    <ul>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Kids</a></li>
                    </ul>
                </div>
                <div className="footer-links-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-links-column">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Track Order</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
             <div className="footer-social">
                <SocialIcon href="#">
                    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96s4.46 9.96 9.96 9.96 9.96-4.46 9.96-9.96S17.5 2.04 12 2.04zm3.6 5.46h-2.16c-.55 0-.6.27-.6.6v1.2h2.76l-.36 2.76h-2.4v7.32h-2.88v-7.32H9.6v-2.76h2.16V8.1c0-2.13 1.3-3.3 3.2-3.3h1.68v2.66z" /></svg>
                </SocialIcon>
                <SocialIcon href="#">
                    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.8.35-1.65.58-2.5.68.9-.54 1.6-1.4 1.9-2.42-.85.5-1.8.87-2.8 1.07C18.2 4.3 17.1 4 16 4c-2.4 0-4.35 1.95-4.35 4.35 0 .34.04.67.1.98-3.6-.18-6.8-1.9-8.95-4.54-.37.64-.58 1.4-.58 2.2 0 1.5.76 2.8 1.9 3.6-.7-.02-1.36-.2-1.95-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.75.15-1.15.15-.28 0-.55-.03-.8-.08.55 1.72 2.15 2.97 4.05 3-1.5.98-3.4 1.56-5.45 1.56-.35 0-.7-.02-1.04-.06 1.95 1.25 4.25 2 6.75 2 8.1 0 12.5-6.7 12.5-12.5 0-.19 0-.38-.01-.57.85-.62 1.6-1.4 2.2-2.3z" /></svg>
                </SocialIcon>
                 <SocialIcon href="#">
                    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-2.7 0-3.03 0-4.08.06-1.05.05-1.78.22-2.42.48-.65.25-1.2.58-1.77 1.14-.58.58-1.13.9-1.77 1.15-.26.64-.43 1.37-.48 2.42C2.06 8.97 2.04 9.3 2.04 12s0 3.03.06 4.08c.05 1.05.22 1.78.48 2.42.25.65.58 1.2 1.14 1.77.58.58.9 1.13 1.15 1.77.64.26 1.37.43 2.42.48 1.05.06 1.38.06 4.08.06s3.03 0 4.08-.06c1.05-.05 1.78-.22 2.42-.48.65-.25 1.2-.58 1.77-1.14.58-.58 1.13-.9 1.77-1.15.26-.64.43-1.37.48-2.42.06-1.05.06-1.38.06-4.08s0-3.03-.06-4.08c-.05-1.05-.22-1.78-.48-2.42-.25-.65-.58-1.2-1.14-1.77-.58-.58-.9-1.13-1.15-1.77-.64-.26-1.37-.43-2.42-.48C15.03 2.06 14.7 2.04 12 2.04zm0 1.8c2.6 0 2.88 0 3.9.05 1.02.05 1.5.2 1.8.33.42.16.7.3.98.58.28.28.42.56.58.98.13.3.28.78.33 1.8.05 1.02.05 1.3.05 3.9s0 2.88-.05 3.9c-.05 1.02-.2 1.5-.33 1.8-.16.42-.3.7-.58.98-.28.28-.56.42-.98.58-.3.13-.78.28-1.8.33-1.02.05-1.3.05-3.9.05s-2.88 0-3.9-.05c-1.02-.05-1.5-.2-1.8-.33-.42-.16-.7-.3-.98-.58-.28-.28-.42-.56-.58-.98-.13-.3-.28-.78-.33-1.8C4.26 14.88 4.26 14.6 4.26 12s0-2.88.05-3.9c.05-1.02.2-1.5.33-1.8.16-.42.3-.7.58-.98.28-.28.56-.42.98-.58.3-.13.78-.28 1.8-.33C9.12 4.26 9.4 4.26 12 4.26zm0 2.9c-2.8 0-5.04 2.24-5.04 5.04s2.24 5.04 5.04 5.04 5.04-2.24 5.04-5.04-2.24-5.04-5.04-5.04zm0 8.28c-1.8 0-3.24-1.44-3.24-3.24s1.44-3.24 3.24-3.24 3.24 1.44 3.24 3.24-1.44 3.24-3.24 3.24zm4.2-.9c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9z" /></svg>
                </SocialIcon>
            </div>
             <div className="footer-copyright">
                <p>&copy; 2025 UrbanThreads. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Footer