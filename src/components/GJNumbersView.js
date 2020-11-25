import React from 'react';
import GJNumberLabel from './GJNumberLabel';

export default function GJNumbersView({ title, numList }) {
    return (
        <div className="gj-numbers-view">
            <h2>{title}</h2>
            <div className="num-list">
                {numList.map((data, index) => {
                    return <GJNumberLabel key={index} num={data[1]} label={data[0]} />
                })}
            </div>

        </div>
    );
}