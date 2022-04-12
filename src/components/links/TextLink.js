import { useLinkColors } from "styles/theme/colors"
import { Link } from "./Link"


export const TextLink = ({ title, to, ...props }) => {
    const linkColors = useLinkColors();
    return (
        <Link
            to={to}
            p={2}
            color={linkColors.default}
            {...props}
            _hover={{
                color: linkColors.hover,
                textDecoration: "underline"
            }}
        >
            {title}
        </Link>
    )
}