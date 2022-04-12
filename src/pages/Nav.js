import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Collapse, Divider, Flex, IconButton, LinkBox, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { Link } from "components/links/Link";
import { links } from "components/links/links";
import { TextLink } from "components/links/TextLink";
import { NavLink } from "react-router-dom";
import { useBackgroundColors, useLinkColors } from "styles/theme/colors";

export const Nav = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <nav>
            <Flex
                borderBottom={1}
                borderStyle={"solid"}
                // borderColor={useBorderColors().nav}
                bg={useBackgroundColors().nav}
                justifyContent={"center"}
            >
                <Flex
                    flex={{ base: 1 }}
                    alignItems={"center"}
                    minH={"60px"}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    maxW={"7xl"}
                >
                    <Flex display={{ base: "none", md: "flex" }}>
                        <DesktopNav />
                    </Flex>
                    <Flex flex={{ base: "auto" }} justify={{ base: "end" }}>
                        <LogoutLink display={{base: "none", md: "flex"}} />
                        <MobileNavBurger
                            display={{ base: "flex", md: "none" }}
                            isOpen={isOpen}
                            onToggle={onToggle}
                        />
                    </Flex>
                </Flex>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav display={{ md: "none" }} onItemClicked={onToggle} />
            </Collapse>
        </nav>
    )
}

const DesktopNav = () => {
    const linkColors = useLinkColors();
    return (
        <Stack direction="row" spacing={12}>
            {links.map(link => <TextLink
                as={NavLink}
                px={0}
                fontWeight="semibold"
                key={link.title}
                to={link.to}
                title={link.title}
                _activeLink={{ color: linkColors.active }}
            />)}
        </Stack>
    );
};


const MobileNav = ({ onItemClicked, ...other }) => {
    return (
        <Stack
            spacing={4}
            py={2}
            borderBottom={1}
            borderStyle={"solid"}
            bg={useBackgroundColors().subNav}
            {...other}
        >
            {links.map(link => (
                <MobileNavItem

                    key={link.title}
                    onItemClicked={onItemClicked}
                    {...link}
                />
            ))}
            <Divider />
            <MobileNavItem
                    key={"logout"}
                    onItemClicked={onItemClicked}
                    to="/logout"
                    title="log out"
                />
        </Stack>
    );
};

const MobileNavBurger = ({ isOpen, onToggle, ...other }) => (
    <IconButton
        onClick={onToggle}
        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
        borderRadius="md"
        variant="solid"
        aria-label={"Toggle Navigation"}
        {...other}
    />
);

const MobileNavItem = ({ title, to, onItemClicked }) => {
    const linkColors = useLinkColors();
    return (
        <Link
            to={to}
            onClick={onItemClicked}
            _hover={{
                textDecoration: "none"
            }}
        >
            <Flex p={4} align={"center"} justify={{ base: "right" }}>
                <Text as={NavLink} to={to} color={linkColors.default} _activeLink={{ color: linkColors.active }} fontWeight="semibold">
                    {title}
                </Text>
            </Flex>
        </Link>
    );
};

const LogoutLink = ({...props}) => {

    return (
        <TextLink to="/logout" title="log out" textDecoration="underline" {...props} />
    )
}