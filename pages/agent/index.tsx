import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const AgentList: NextPage = () => {
    return (
        <div>
            <Stack className="container">AGENT</Stack>
        </div>
    );
};

export default withLayoutBasic(AgentList);