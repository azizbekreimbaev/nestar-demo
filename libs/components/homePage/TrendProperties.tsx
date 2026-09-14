import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import { Navigation, Pagination } from "swiper";
import TrendPropertyCard from "./TrendPropertyCard";

const TrendProperties = () => {
    const [trendProperties, setTrendProperties] = useState<number[]>([
        1, 2, 3, 4, 5, 6, 7,
    ]);

    return (
        <Stack className={"trend-properties"}>
            <Stack className={"container"}>
                <Stack className={"info-box"}>
                    <Box className={"left"}>
                        <span>Trend Properties</span>
                        <p>Trend is based on likes</p>
                    </Box>

                    <Box className={"right"}>
                        <div className={"pagination-box"}>
                            <WestIcon className={"swiper-trend-prev"} />
                            <div className={"swiper-trend-pagination"} />
                            <EastIcon className={"swiper-trend-next"} />
                        </div>
                    </Box>
                </Stack>

                <Stack className={"card-box"}>
                    {trendProperties.length === 0 ? (
                        <Box className={"empty-list"}>
                            Trends Empty
                        </Box>
                    ) : (
                        <Swiper
                            modules={[Navigation, Pagination]}
                            className={"trend-property-swiper"}
                            slidesPerView={"auto"}
                            spaceBetween={15}
                            navigation={{
                                nextEl: ".swiper-trend-next",
                                prevEl: ".swiper-trend-prev",
                            }}
                            pagination={{
                                el: ".swiper-trend-pagination",
                                clickable: true,
                            }}
                        >
                            {trendProperties.map((property) => (
                                <SwiperSlide
                                    key={property}
                                    className={"trend-property-slide"}
                                >
                                    <TrendPropertyCard />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default TrendProperties;