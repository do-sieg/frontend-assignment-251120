import React from 'react';
import { fetchGET } from '../utils/fetch';

export default class TPSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            tradingPairs: []
        };
        this.handleLoadSelectors = this.handleLoadSelectors.bind(this);
    }

    async componentDidMount() {
        await this.handleLoadSelectors();
    }

    async handleLoadSelectors() {
        this.setState({ loading: true });
        try {
            const fetchRes = await fetchGET('https://www.bitstamp.net/api/v2/trading-pairs-info/');
            this.setState({ tradingPairs: fetchRes, loading: false });
        } catch (err) {
            this.setState({ loading: false });
        }
    }

    handleSelectTP(e, data) {
        e.preventDefault();
        this.props.onSelectTP(data);
    }

    render() {
        return (
            <div className="tp-selector">
                <h2>Selectors</h2>


                {!this.state.loading &&
                    <>
                        {this.state.tradingPairs.length === 0 ?
                            <div className="error-help">
                                <label>An error occured. Press the button to reload the selectors.</label>
                                <button onClick={this.handleLoadSelectors}>Reload</button>
                            </div>
                            :

                            <div className="buttons">
                                {this.state.tradingPairs.map((tp, index) => {
                                    return (
                                        <button
                                            key={index}
                                            className={this.props.selected === tp.name ? " selected" : ""}
                                            value={tp}
                                            onClick={e => this.handleSelectTP(e, tp)}
                                        >
                                            {tp.name}
                                        </button>
                                    );
                                })}
                            </div>
                        }
                    </>
                }

            </div>
        );
    }
}