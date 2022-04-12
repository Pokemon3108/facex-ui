import { Link as ThemeLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Link = ({to, ...props}) => (
    <ThemeLink as={RouterLink} to={to} {...props}>{props.children}</ThemeLink>
)