'use client'

import React from 'react'
import SolutionsContainer from '@/sections/solutions/solutions-container'
import { solutionData } from '@constants'
import { Box, Typography } from '@mui/material'

const PerformanceManagementPage = () => {
    return (
        <SolutionsContainer
            data={solutionData[1].details}
            images={solutionData[1].coverphoto}
        >
            <Typography textAlign="center" mt={18.75} variant='h4' fontWeight="fontWeightMedium" color="secondary.main">Transform your <Box component="span" color="primary.main">workforce into a powerhouse</Box> with ATS, Onboarding, and Performance Management!​​</Typography>
        </SolutionsContainer>
    )
}

export default PerformanceManagementPage
