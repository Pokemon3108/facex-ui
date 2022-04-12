import {
    extendTheme, useColorModeValue, withDefaultColorScheme
  } from "@chakra-ui/react";
  
  const colorsExtension = extendTheme(
    withDefaultColorScheme({ colorScheme: "green" })
  );
  
  const useColors = () => {
    const warning = useColorModeValue("yellow.400", "yellow.400");
  
    return {
      warning: warning,
    };
  };
  
  const useLinkColors = () => {
    const linkColor = useColorModeValue("white", "gray.100");
    const linkHoverColor = useColorModeValue("green.200", "green.300");
    const linkActiveColor = useColorModeValue("green.300", "green.400");
    const hoverBackgroundColor = useColorModeValue("green.100", "green.100");
  
    return {
      default: linkColor,
      hover: linkHoverColor,
      active: linkActiveColor,
      hoverBackground: hoverBackgroundColor
    };
  };
  
  const useTextColors = () => {
    const defaultColor = useColorModeValue("gray.800", "gray.200");
    const darkColor = useColorModeValue("gray.800", "gray.900")
  
    return {
      default: defaultColor,
      dark: darkColor
    };
  };
  
  const useBackgroundColors = () => {
    const navBg = useColorModeValue("gray.800", "gray.900");
    const subNavBg = useColorModeValue("gray.700", "gray.800");
    const mainBg = useColorModeValue("gray.100", "gray.800");
    const footerBg = useColorModeValue("gray.600", "gray.900");
    const cardFooterBg = useColorModeValue("gray.200", "gray.600");
    const goodBg = useColorModeValue("green.200", "green.200");
  
    return {
      default: mainBg,
      nav: navBg,
      cardFooter: cardFooterBg,
      good: goodBg,
      subNav: subNavBg,
      footer: footerBg,
    };
  };
  
  const useBorderColors = () => {
    const navBorder = useColorModeValue("gray.200", "gray.600");
    const mainBorder = useColorModeValue("gray.200", "gray.900");
    const footerBorder = useColorModeValue("gray.200", "gray.900");
    const widgetBorder = useColorModeValue("gray.300", "gray.600");
    const lightBorder = useColorModeValue("gray.300", "gray.500")
  
    return {
      default: mainBorder,
      nav: navBorder,
      footer: footerBorder,
      widget: widgetBorder,
      lightBorder: lightBorder
    };
  };
  
  export {
    colorsExtension,
    useColors,
    useLinkColors,
    useBackgroundColors,
    useBorderColors,
    useTextColors
  };