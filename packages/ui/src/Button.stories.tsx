import { Button } from "./components/ui/button";
import { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    children: 'Button'
  }
}

export default meta;

const Template: StoryFn<typeof Button> = (args: any) => <Button {...args} />;

export const Default: StoryFn<typeof Button> = Template.bind({});
Default.args = {

};

export const Secondary: StoryFn<typeof Button> = Template.bind({});
Secondary.args = {
  variant: "secondary"
};