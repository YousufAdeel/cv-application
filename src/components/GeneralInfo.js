import { useState } from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isEditing, setIsEditing] = useState(true);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSubmit = () => {
        setIsEditing(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    return (
        <div className="general-info">
            <h2>Contact Information</h2>
            <div className="info-content">
                {isEditing ? (
                    <div>
                        <div className="form-grid">
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    placeholder="Full Name" 
                                    value={name} 
                                    onChange={handleNameChange} 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    value={email} 
                                    onChange={handleEmailChange} 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="tel" 
                                    placeholder="Phone Number" 
                                    value={phone} 
                                    onChange={handlePhoneChange} 
                                />
                            </div>
                        </div>
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                ) : (
                    <div>
                        <div className="info-display">
                            <div className="info-item">
                                <span className="info-label">Name</span>
                                <span className="info-value">{name || 'Not provided'}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Email</span>
                                <span className="info-value">{email || 'Not provided'}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Phone</span>
                                <span className="info-value">{phone || 'Not provided'}</span>
                            </div>
                        </div>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GeneralInfo;