

Structure de base :
- deux blocs
    - un bloc qui contient deux blocs :
        - un bloc avec des boutons qui sélectionnent des `currency_pair` (voir https://www.bitstamp.net/api/v2/trading-pairs-info/)
        - un bloc qui formate les données obtenues par (https://www.bitstamp.net/api/v2/ticker/{currency_pair}/) où `currency_pair` est sélectionné en haut
    - un bloc d'affichage de données (en début/gauche)

---


## User Story and main description

We are going to provide to the users a web page to check the current trading pairs from
some cryptocurrency exchanges.

The page should have **2 columns**:
- The first column, “average ticker values”, should on the right side should show a value in the center which is the average between the response of these following APIs:
    - https://www.bitstamp.net/api/v2/ticker/btcusd
    - https://api.coinbase.com/v2/exchange-rates?currency=BTC
    - https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD
- The second column should have:
    - an area with buttons to select with the trading pairs provided by https://www.bitstamp.net/api/v2/trading-pairs-info/
    - And an area below to display the numbers “well formatted” provide by https://www.bitstamp.net/api/v2/ticker/{currency_pair}/ where
`currency_pair` is the one selected by the user


## Further details

- It should be possible to switch to other trading pairs without reload the page
- It has to be “well formatted” on a mobile device (responsive): The “average ticker
values” area should be on top, followed by the “trading pairs button” and then
“selected trading values” pair.
- The web application should define and use 2 reusable UI components for every
displaying of numbers:
    - `GJNumberLabel`, component that layouts the provided number and displays
the description for each of those;
    - `GJNumbersView`, a component that takes:
        - title
        - a list of number-description couples and shows them in enough
GJNumberLabel.
- Feel free to add any of “visual improvements” to provide a better UI.