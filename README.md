# Frontend Assignment


## Preliminary work

I rewrote the instructions and deciding in what order I was going to start.

I chose ReactJS because there was no routing involved (NextJS would have been my choice instead).


## Coding

The main layout was done first, with the left panel (`AverageTickerViewer`) left empty.

I focused on the top-right component (`TPSelector`) first.
- I fetched the data from the url and displayed buttons, handling the click effect, etc.
- Then I managed a return function (`onSelectTP`) to link the component to the main component (`App`).

I did `TPViewer` next (bottom-right). I made the required components (`GJNumberLabel` and `GJNumbersView`).

Finally, I finished `AverageTickerViewer`, using the previously mentioned components.

Then, I did the styling.


## Problems I encountered
For some reason, I get random errors when trying to fetch from some urls.
The one from **bitfinex** doesn't allow me to fetch anything. There must be an authentification process I'm not aware about.

After around 1-2 hours of unsuccessful attempts, I decided to manage these errors.
- If the values don't load from **bitstamp**, The user can try again clicking a button in `TPSelector`.
- The average on the left (`AverageTickerViewer`) doesn't count values that didn't load.

I'm aware this has to be fixed, and I'll gladly do it once I understand what's wrong in the way I fetch the data.


## Time

Because of the issues I mentioned, the app took me around six hours to make. It could have been done faster.