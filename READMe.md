# Weather Icons Chart

**Weather Icons Chart** is a React component for an interactive weather data table.  
The component supports displaying:

- Sun and Moon with phases
- Various cloud levels
- Precipitation
- Severe weather (storms, tornadoes)
- Temperature, pressure, humidity, wind
- Wind direction
- Day and night highlighting
- Time zones with switching

The component subscribes to **store** (`timeZoneStore`) and updates automatically when data changes.

> This project not only provides the source code but also includes a **live, interactive demonstration of the components via Storybook**.

## Storybook

To see the components in action, check out the **live Storybook demo** [Weather Icons Chart](https://damir-frontend.github.io/weather-icons-chart/).

## 🏗 Project Structure

The project has a modular structure: each part of the interface is separated into its own subcomponent.

```text
weather-icons-chart/
├── .storybook/ # Storybook configuration
├── stories/ # Storybook stories and mock data
│   ├── assets/ # Images and SVGs
│   ├── dayjs-initial/ # Day.js initialization
│   ├── icons-components/ # All SVG icons (Sun, Moon, clouds, precipitation, etc.)
│   ├── mockData.ts
│   ├── mockStore.ts
│   ├── styles.module.scss
│   ├── time-zone/ # Time zone store, types, utils
│   ├── types.ts
│   ├── ui.tsx # Root Storybook demo component
│   ├── up-level/ # Constants, types, utils shared across components
│   ├── utils.ts
│   ├── weather-chart-data-column/
│   ├── weather-chart-data-section/
│   ├── weather-chart-header/
│   ├── weather-chart-icon/
│   ├── weather-chart-icon-row/
│   ├── weather-chart-label-column/
│   ├── weather-chart-row/
│   └── wind-direction-row/
├── storybook-static/ # Storybook build output for GitHub Pages
```

- Local setup:

```bash
npm install
npm run storybook
```

