import { useState } from 'react';
import '../styles/Education.css';

function Education() {
    const [schoolName, setSchoolName] = useState('');
    const [studyTitle, setStudyTitle] = useState('');
    const [studyDate, setStudyDate] = useState('');
    const [location, setLocation] = useState('');
    const [isEditing, setIsEditing] = useState(true);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSubmit = () => {
        setIsEditing(false);
    };

    const handleSchoolNameChange = (event) => {
        setSchoolName(event.target.value);
    };

    const handleStudyTitleChange = (event) => {
        setStudyTitle(event.target.value);
    };

    const handleStudyDateChange = (event) => {
        setStudyDate(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <div className="education">
            <h2>Education</h2>
            <div className="info-content">
                {isEditing ? (
                    <div>
                        <div className="input-group">
                            <input 
                                type="text" 
                                placeholder="School/University" 
                                value={schoolName} 
                                onChange={handleSchoolNameChange} 
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                type="text" 
                                placeholder="Degree/Certificate" 
                                value={studyTitle} 
                                onChange={handleStudyTitleChange} 
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                type="text" 
                                placeholder="Year (e.g., 2020-2024)" 
                                value={studyDate} 
                                onChange={handleStudyDateChange} 
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                type="text" 
                                placeholder="Location (e.g., New York, NY)" 
                                value={location} 
                                onChange={handleLocationChange} 
                            />
                        </div>
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                ) : (
                    <div>
                        <div className="info-display">
                            <div className="info-item">
                                <span className="info-label">Institution</span>
                                <span className="info-value">{schoolName || 'Not provided'}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Degree</span>
                                <span className="info-value">{studyTitle || 'Not provided'}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Year</span>
                                <span className="info-value">{studyDate || 'Not provided'}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Location</span>
                                <span className="info-value">{location || 'Not provided'}</span>
                            </div>
                        </div>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Education;