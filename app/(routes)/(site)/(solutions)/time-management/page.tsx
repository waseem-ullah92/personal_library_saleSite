'use client'

import React from 'react'
import SolutionsContainer from '@/sections/solutions/solutions-container'
import { solutionData } from '@constants'
import { Box, Typography } from '@mui/material'

const TimeManagementPage = () => {
    return (
        <SolutionsContainer
            data={solutionData[2].details}
            images={solutionData[2].coverphoto}
        >
            <Typography textAlign="center" mt={18.75} variant='h4' fontWeight="fontWeightMedium" color="secondary.main">Master the art of productivity with our <Box component="span" color="primary.main">Time Management System!</Box>​</Typography>
        </SolutionsContainer>
    )
}

export default TimeManagementPage
