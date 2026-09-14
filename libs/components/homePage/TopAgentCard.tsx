import React from "react";
import { Stack } from "@mui/material";

const TopAgentCard = () => {
    const agentImage = "/img/profile/girl.svg";

    return (
        <Stack className="top-agent-card">
            <img src={agentImage} alt="" />

            <strong>Martin</strong>
            <span>Agent</span>
        </Stack>
    );
};

export default TopAgentCard;
