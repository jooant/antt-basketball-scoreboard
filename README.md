# Basketball Scoreboard

A simple basketball scoreboard built with plain HTML, CSS, and JavaScript, used to track a live score between a **Home** team and an **Away** team.

## Features
- Add points to Home: +1 / +2 / +3
- Add points to Away: +1 / +2 / +3
- Track the current period, automatically resetting to 0 after period 4
- **New Game** button to reset all scores and the period back to 0

## Tech Stack
- HTML5
- CSS3
- JavaScript (vanilla)

## Getting Started

No build tools or dependencies needed — just open `index.html` in your browser.

```bash
git clone https://github.com/jooant/antt-basketball-scoreboard.git
cd antt-basketball-scoreboard
```

Then either:
- Double-click `index.html` to open it directly in your browser, or
- Use a tool like the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension for auto-reload while editing.

## Project Structure

```
├── index.html      # Scoreboard UI
├── index.css       # Scoreboard styling
├── index.js        # Scoring, period, and reset logic
└── font/
    └── CursedTimerUlil-Aznm.ttf   # Custom font used for the score, period display
```

## Possible Future Improvements
- Save the score to localStorage so it persists on reload
- Add a game clock / countdown timer
- Add an undo button for misclicks
- Allow custom team names instead of fixed Home/Away

## Author
- Antt