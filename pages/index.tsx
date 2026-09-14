import { GET_PROPERTIES } from "@/apollo/user/query";
import Advertisement from "@/libs/components/homePage/Advertisement";
import PopularProperties from "@/libs/components/homePage/PopularProperties";
import TopAgents from "@/libs/components/homePage/TopAgents";
import TopProperties from "@/libs/components/homePage/TopProperties";
import TrendProperties from "@/libs/components/homePage/TrendProperties";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { useQuery } from "@apollo/client";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";


const Home: NextPage = () => {

  const device = useDeviceDetect();

  const {
    loading: getPropertiesLoading,
    data: getPropertiesData,
    error: getPropertiesError,
    refetch: getPropertiesRefetch
  } = useQuery(GET_PROPERTIES, {
    fetchPolicy: "network-only",
    variables: {
      input: {
        page: 1,
        limit: 5,
        sort: "createdAt",
        direction: "DESC",
        search: {}
      }
    }
  })

  console.log("data", getPropertiesData)

  if (device === "mobile") {
    return <Stack>HOMEPAGE MOBILE</Stack>
  } else {
    return (
      <Stack className={"home-page"}>
        <TrendProperties />
        <PopularProperties />
        <Advertisement />
        <TopProperties />
        <TopAgents />
      </Stack>
    );
  }
};


export default withLayoutMain(Home);