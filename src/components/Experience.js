import { useState } from 'react';
import '../styles/Experience.css';

function Experience() {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [workDates, setWorkDates] = useState('');
    const [isEditing, setIsEditing] = useState(true);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSubmit = () => {
        setIsEditing(false);
    };

    const handleCompanyNameChange = (event) => {
        setCompanyName(event.target.value);
    };

    const handlePositionTitleChange = (event) => {
        setPositionTitle(event.target.value);
    };

    const handleResponsibilitiesChange = (event) => {
        setResponsibilities(event.target.value);
    };

    const handleWorkDatesChange = (event) => {
        setWorkDates(event.target.value);
    };

    return (
        <div className="experience">
            <h2>Experience</h2>
            <div className="info-content">
                {isEditing ? (
                    <div>
                        <div className="input-group">
                            <input 
                                type="text" 
                                placeholder="Company Name" 
                                value={companyName} 
                                onChange={handleCompanyNameChange} 
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                type="text" 
                                placeholder="Job Title" 
                                value={positionTitle} 
                                onChange={handlePositionTitleChange} 
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                type="text" 
                                placeholder="Key Responsibilities" 
                                value={responsibilities} 
                                onChange={handleResponsibilitiesChange} 
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                type="text" 
                                placeholder="Duration (e.g., 2022-2024)" 
                                value={workDates} 
                                onChange={handleWorkDatesChange} 
                            />
                        </div>
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                ) : (
                    <div>
                        <div className="info-display">
                            <div className="info-item">
                                <span className="info-label">Company</span>
                                <span className="info-value">{companyName || 'Not provided'}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Position</span>
                                <span className="info-value">{positionTitle || 'Not provided'}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Responsibilities</span>
                                <span className="info-value">{responsibilities || 'Not provided'}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Duration</span>
                                <span className="info-value">{workDates || 'Not provided'}</span>
                            </div>
                        </div>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Experience;