import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";

const PropertyDetail = () => {
    const device = useDeviceDetect()
    if (device === "mobile") {
        return <Stack>PROPERRTY Detail MOBILE</Stack>
    } else {
        return (
            <Container>PROPERTY Detail</Container>
        );
    }
};

export default withLayoutBasic(PropertyDetail);