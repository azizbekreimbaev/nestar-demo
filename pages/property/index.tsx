import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
    return (
        <div>
            <Stack className="container">PROPERTY LIST</Stack>
        </div>
    );
};

export default withLayoutBasic(PropertyList);