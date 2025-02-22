// src/pages/WorkingProfessional.jsx
import React, { useState } from 'react';
import './OfficeWorkerTT.css';

const WorkingProfessional = () => {
    const [timeEntries, setTimeEntries] = useState([
        {
            category: 'Working Time',
            recommendedHours: '8-9 hours',
            actualHours: '',
            notes: '',
        },
        {
            category: 'Quality Time',
            recommendedHours: '2-3 hours',
            actualHours: '',
            notes: '',
        },
        {
            category: 'Alone Time',
            recommendedHours: '1-2 hours',
            actualHours: '',
            notes: '',
        },
        {
            category: 'Community Time',
            recommendedHours: '1 hour',
            actualHours: '',
            notes: '',
        },
        {
            category: 'Sleep',
            recommendedHours: '7-8 hours',
            actualHours: '',
            notes: '',
        },
    ]);

    const handleInputChange = (index, field, value) => {
        const newTimeEntries = [...timeEntries];
        newTimeEntries[index][field] = value;
        setTimeEntries(newTimeEntries);
    };

    const handleSubmit = () => {
        // Add your submit logic here
        console.log('Time Entries:', timeEntries);
        alert('Time entries submitted!'); // Replace with your desired submit behavior
    };

    return (
        <div className="office-tt-container">
            <h2>Working Professional Time Tracker</h2>
            <table className="office-tt-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Recommended Hours</th>
                        <th>Actual Hours (Today)</th>
                        <th>Notes/Tasks (Project, Meeting Details)</th>
                    </tr>
                </thead>
                <tbody>
                    {timeEntries.map((entry, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="text"
                                    value={entry.category}
                                    onChange={(e) => handleInputChange(index, 'category', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={entry.recommendedHours}
                                    onChange={(e) => handleInputChange(index, 'recommendedHours', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={entry.actualHours}
                                    onChange={(e) => handleInputChange(index, 'actualHours', e.target.value)}
                                />
                            </td>
                            <td>
                                <textarea
                                    value={entry.notes}
                                    onChange={(e) => handleInputChange(index, 'notes', e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="submit-button-container">
                <button onClick={handleSubmit} className="submit-button">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default WorkingProfessional;