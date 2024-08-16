import Icon from "@mdi/react";
import { cva, type VariantProps } from "class-variance-authority";

const navbarItem = cva("w-[250px] h-[50px] px-2 rounded-lg text-h3 flex space-x-4 items-center font-medium", {
  variants: {
    selected:{
      true: "text-black bg-gray",
      false: "text-dark-gray hover:text-black hover:bg-gray"
    },
  },
  defaultVariants: {
    selected: false
  }
})

interface INavbarItemProps extends VariantProps<typeof navbarItem>{
  icon: string;
  label: string;
}

export const NavbarItem = ({ icon, label, selected, ...props }: INavbarItemProps) => {
  return (
    <div className={navbarItem({selected})} {...props}>  
      <Icon path={icon} size="24px" />
      <h3>{label}</h3>
    </div>
  );
};
