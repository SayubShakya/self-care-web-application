import React, { useState } from 'react';
import './StudentTT.css';

const StudentTT = () => {
    const [timeEntries, setTimeEntries] = useState([
        { category: 'Classes/Lectures', recommendedHours: '6-8 hours', actualHours: '', notes: '' },
        { category: 'Studying/Homework', recommendedHours: '2-4 hours', actualHours: '', notes: '' },
        { category: 'Quality Time', recommendedHours: '3-4 hours', actualHours: '', notes: '' },
        { category: 'Alone Time', recommendedHours: '2-3 hours', actualHours: '', notes: '' },
        { category: 'Community Time', recommendedHours: '1-2 hours', actualHours: '', notes: '' },
        { category: 'Sleep', recommendedHours: '7-8 hours', actualHours: '', notes: '' },
    ]);

    const handleInputChange = (index, field, value) => {
        const newTimeEntries = [...timeEntries];
        newTimeEntries[index][field] = value;
        setTimeEntries(newTimeEntries);
    };

    const handleSubmit = () => {
        console.log('Time Entries:', timeEntries);
        alert('Time entries submitted!'); 
    };

    return (
        <div className="student-tt-container">
            <br /><br /><br /><br /><br />
            <h2>Student Time Tracker</h2>
            <table className="student-tt-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Recommended Hours</th>
                        <th>Actual Hours (Today)</th>
                        <th>Notes/Tasks</th>
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

export default StudentTT;