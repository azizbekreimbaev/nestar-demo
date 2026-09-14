import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const CS: NextPage = () => {
    return (
        <div>
            <Stack className="container">CS</Stack>
        </div>
    );
};

export default withLayoutBasic(CS);