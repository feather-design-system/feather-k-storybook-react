import { Button } from "@progress/kendo-react-buttons";
import "../assets/css/feather-ks.css";
import "../assets/css/feather-k-override.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    themeColor: {
      control: { type: "select" },
      type: "string",
      defaultValue: "primary",
      options: [
        "base",
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
      ],
      description: "Sets the theme color of the button.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button when set to true.",
    },
    fillMode: {
      control: "select",
      options: ["solid", "flat", "outline"],
      mapping: { solid: "solid", flat: "flat", outline: "outline" },
      description: "Sets the fill mode of the button.",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Sets the size of the button.",
    },
  },
};
const Template = (args: any) => <Button {...args}>Click Me</Button>;

export const Default = Template.bind({}) as any;
Default.args = {
  themeColor: "primary",
  disabled: false,
};
