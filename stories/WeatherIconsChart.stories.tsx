import type { Meta, StoryObj } from '@storybook/react';
import { WeatherIconsChart } from './ui';

const meta: Meta<typeof WeatherIconsChart> = {
  title: 'Weather/IconsChart',
  component: WeatherIconsChart,
};

export default meta;
type Story = StoryObj<typeof WeatherIconsChart>;

export const Default: Story = {};
