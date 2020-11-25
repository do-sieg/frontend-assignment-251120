import React from 'react';
import GJNumberLabel from './GJNumberLabel';

export default function AverageTickerView({ name, average }) {

    return (
      <div className="average-ticker">
        {average ?
          <>
            <h2>{`Average ${name}`}</h2>
            <GJNumberLabel label="Average" num={average} />
          </>
          :
          <span className="help">Please select currencies</span>
        }
      </div>
    );
  }