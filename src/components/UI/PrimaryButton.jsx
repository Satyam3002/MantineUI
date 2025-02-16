import { Button } from "@mantine/core";

const PrimaryButton = ({ children, ...props }) => {
  return (
    <Button
      className="text-white bg-secondaryBlue px-6 py-2 rounded-lg flex items-center gap-2 w-fit"
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
