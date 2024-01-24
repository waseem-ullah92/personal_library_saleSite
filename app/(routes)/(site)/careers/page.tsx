import { Box } from "@mui/material";
import { CAREERS_CONTENT } from "@constants";
import Header from "@/components/header";
import CareerSection from "@/sections/careers";

export default function CareersPage() {
    return (
        <Box>
            <Header headerContent={CAREERS_CONTENT} />
            <CareerSection />
        </Box>
    );
}
