import React, { useState } from 'react';

// --- CSS Styles for the Component ---
const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

    .description-box-container {
        font-family: 'Poppins', sans-serif;
        background-color: #f9fafb; /* gray-50 */
        padding: 3rem 1rem;
        display: flex;
        justify-content: center;
    }

    .descriptionbox {
        width: 100%;
        max-width: 900px;
    }

    .descriptionbox-navigator {
        display: flex;
        border-bottom: 2px solid #e5e7eb; /* gray-200 */
    }

    .descriptionbox-nav-box {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: 600;
        padding: 1rem 1.5rem;
        cursor: pointer;
        border: 2px solid transparent;
        border-bottom: none;
        transition: all 0.3s ease;
        color: #6b7280; /* gray-500 */
        position: relative;
        top: 2px;
    }
    
    .descriptionbox-nav-box.active {
        background-color: white;
        border-color: #e5e7eb; /* gray-200 */
        border-bottom-color: white;
        border-radius: 8px 8px 0 0;
        color: #1e293b; /* gray-800 */
    }

    .descriptionbox-description {
        background-color: white;
        padding: 2rem;
        border: 2px solid #e5e7eb; /* gray-200 */
        border-top: none;
        border-radius: 0 0 8px 8px;
        color: #4b5563; /* gray-600 */
        line-height: 1.8;
    }
    
    .descriptionbox-description p {
        margin: 0 0 1rem 0;
    }
    .descriptionbox-description p:last-child {
        margin-bottom: 0;
    }
`;

// --- DescriptionBox Component ---
const DescriptionBox = () => {
    const [activeTab, setActiveTab] = useState('description');

    return (
        <div className="description-box-container">
            <style>{styles}</style>
            <div className="descriptionbox">
                <div className="descriptionbox-navigator">
                    <div 
                        className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`}
                        onClick={() => setActiveTab('description')}
                    >
                        Description
                    </div>
                    <div 
                        className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews (20)
                    </div>
                </div>
                <div className="descriptionbox-description">
                    {activeTab === 'description' ? (
                        <div>
                            <p>
                                Discover the perfect blend of style and comfort with our latest collection. Each piece is crafted from premium, sustainably sourced materials, ensuring not only a great look but also a soft feel against your skin. This versatile garment is designed for a modern fit, featuring clean lines and a minimalist aesthetic that makes it easy to dress up or down. 
                            </p>
                            <p>
                                Ideal for any occasion, from a casual day out to a more formal evening event. The durable fabric is machine-washable and resistant to fading, so you can enjoy its vibrant color and shape for years to come. Elevate your wardrobe with this essential piece that seamlessly combines timeless design with contemporary fashion.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <p>Customer reviews will be displayed here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DescriptionBox;