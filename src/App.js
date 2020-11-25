import React from 'react';
import './styles/app.css';
import AverageTickerView from './components/AverageTickerView';
import TPSelector from './components/TPSelector';
import TPViewer from './components/TPViewer';
import { fetchGET } from './utils/fetch';

const L_ERR_500 = "An error occured, please try again";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tpData: null,
      average: "",
    };
    this.handleChangeTP = this.handleChangeTP.bind(this);
  }

  async handleChangeTP(tpData) {
    try {
      const cSplit = tpData.name.split('/');
      const bitstampFetchRes = await fetchGET(`https://www.bitstamp.net/api/v2/ticker/${tpData.url_symbol}`);
      // console.log("AVG 1", bitstampFetchRes);
      const coinbaseFetchRes = await fetchGET(`https://api.coinbase.com/v2/exchange-rates?currency=${cSplit[0]}`);
      // console.log("AVG 2", coinbaseFetchRes);

      // console.log("AVG 1", bitstampFetchRes.last);
      // console.log("AVG 2", coinbaseFetchRes.data.rates[cSplit[1]]);
      if (bitstampFetchRes && coinbaseFetchRes) {
        const avg1 = parseFloat(bitstampFetchRes.last);
        const avg2 = parseFloat(coinbaseFetchRes.data.rates[cSplit[1]]);
        this.setState({ average: (avg1 + avg2) / 2.0 });
      } else if (bitstampFetchRes) {
        const avg1 = parseFloat(bitstampFetchRes.last);
        this.setState({ average: avg1 });
      }

      // const bitfinexFetchRes = await fetchGET(`https://api-pub.bitfinex.com/v2/tickers?symbols=t${tpData.name.split('/').join('')}`);
      // const bitfinexFetchRes = await fetchGET(`https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD`, true);
      // const bitfinexFetchRes = await fetchGET(`https://api-pub.bitfinex.com/v2/ticker/tBTCUSD`, true);
      // console.warn("AVG 3", bitfinexFetchRes);

      bitstampFetchRes.tpName = tpData.name;
      this.setState({ tpData: bitstampFetchRes });
    } catch (err) {
      console.log(err);
      alert(L_ERR_500);
    }
  }

  render() {
    return (
      <div className="app-container">
        <AverageTickerView name={this.state.tpData ? this.state.tpData.tpName : null} average={this.state.average} />
        <div className="right-panel">
          <TPSelector selected={this.state.tpData ? this.state.tpData.tpName : null} onSelectTP={this.handleChangeTP} />
          <TPViewer data={this.state.tpData} />
        </div>
      </div>
    );
  }
}


