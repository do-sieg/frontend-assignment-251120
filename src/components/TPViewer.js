import React from 'react';
import GJNumbersView from './GJNumbersView';

const L_SELECT_CURRENCY_PAIR = "Please select a currency pair";

export default function TPViewer({ data }) {
    return (
      <div className="tp-viewer">
        {data === null ?
          <h2>{L_SELECT_CURRENCY_PAIR}</h2>
          :
          <GJNumbersView title={`Bitstamp (${data.tpName})`} numList={[
            ["Ask", data.ask],
            ["Bid", data.bid],
            ["High", data.high],
            ["Last", data.last],
            ["Low", data.low],
            ["Open", data.open],
            ["Volume", data.volume],
            ["Vwap", data.vwap],
          ]} />
            // data.status
            // data.timestamp
        }
      </div>
    );
  }