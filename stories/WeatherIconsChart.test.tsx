import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./WeatherIconsChart.stories";

const { Default } = composeStories(stories);

describe("WeatherIconsChart", () => {
  it("renders Default story and matches snapshot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
