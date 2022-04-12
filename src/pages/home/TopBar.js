import { SunIcon } from "@chakra-ui/icons"
import { HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { useBackgroundColors, useTextColors } from "styles/theme/colors"



export const TopBar = () => {

    return (
        <SimpleGrid width="100%" minChildWidth="16rem" gap={12}>

            <TopBarButton icon={<SunIcon boxSize="12" />} title="Add new person" description="add new person" />
            <TopBarButton icon={<SunIcon boxSize="12" />} title="Add new person" description="add new person" />
            <TopBarButton icon={<SunIcon boxSize="12" />} title="Add new person" description="add new person" />

        </SimpleGrid>
    )
}

const TopBarButton = ({ icon, title, description, onClick }) => {
    const bgColors = useBackgroundColors();
    const textColors = useTextColors();
    return (
        <HStack px={6} py={4} border="1px" borderRadius="xl" gap={3}
            bg={bgColors.card}
            _hover={{
                bg: bgColors.cardHover
            }}
            onClick={onClick}
        >
            {icon}
            <VStack align="start" gap={0}>
                <Text color={textColors.primary} fontSize="sm">{title}</Text>
                <Text color={textColors.secondary} fontSize="xs" style={{ marginTop: "0" }}>{description}</Text>
            </VStack>

        </HStack>

    )
}