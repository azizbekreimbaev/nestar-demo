import Advertisement from "@/libs/components/homePage/Advertisement";
import PopularProperties from "@/libs/components/homePage/PopularProperties";
import TopAgents from "@/libs/components/homePage/TopAgents";
import TopProperties from "@/libs/components/homePage/TopProperties";
import TrendProperties from "@/libs/components/homePage/TrendProperties";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";


const Home: NextPage = () => {
  return (
    <Stack className={"home-page"}>
      <TrendProperties />
      <PopularProperties />
      <Advertisement />
      <TopProperties />
      <TopAgents />
    </Stack>
  );
};


export default withLayoutMain(Home);