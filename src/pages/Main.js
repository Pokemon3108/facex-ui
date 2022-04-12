import { Container, Flex } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { Nav } from "./Nav"


export const Main = () => {
    return (
        <Flex direction="column" width="100%">
            <Nav />
            <Container
                maxW={"7xl"}
                px={4}
                py={3}
                display="flex"
                flexGrow={1}
                my="0.5rem"
            >
                <Outlet />
            </Container>
        </Flex>
    )
}