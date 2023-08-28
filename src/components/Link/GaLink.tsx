import React from "react";
import Link from '@mui/material/Link';
import LinkColor from './link-color';
import LinkVariants from './link-variants';
import LinkUnderline from "./link-underline";

type Props = {
  children: React.ReactNode;
  color?: LinkColor;
  variant?: LinkVariants;
  underline?: LinkUnderline;
  link: string
};


const GaLink: React.FC<Props> = ({
  children,
  color,
  variant,
  underline,
  link
}) => {
  return (
    <Link
        color = {color}
        variant = {variant}
        underline = {underline}
        href={link}
        sx={{cursor: 'pointer'}}
        >
        {children}
    </Link>
  );
};

export default GaLink;
