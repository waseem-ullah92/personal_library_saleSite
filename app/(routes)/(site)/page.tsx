import { Box } from "@mui/material";
import PerkSection from "@/sections/home/perks";
import UpgradeSection from "@/sections/home/upgrade";
import TestimonialSection from "@/sections/home/testimonials";
import HomePageHeaderComp from "app/_components/homepage-header-comp";
import { HOMEPAGE_CONTENT } from "@constants";
import Header from "@/components/header";

export default function HomePage() {
  return (
    <Box>
      <Header headerContent={HOMEPAGE_CONTENT} otherComp={HomePageHeaderComp} />
      <PerkSection />
      <TestimonialSection />
      <UpgradeSection />
    </Box>
  );
}
