import React from 'react';

export default function GJNumberLabel({ num, label }) {
    return (
        <div className="gj-number-label">
            <span>{num}</span>
            <label>{label}</label>
        </div>
    );
}