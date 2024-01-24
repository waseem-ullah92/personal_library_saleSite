'use client'

import SolutionsContainer from '@/sections/solutions/solutions-container'
import { solutionData } from '@constants'
import { Box, Typography } from '@mui/material'
import * as React from 'react'

const ComprehensiveHrisPage = () => {

  return (
    <SolutionsContainer
      data={solutionData[0].details}
      images={solutionData[0].coverphoto}
    >
      <Typography textAlign="center" mt={18.75} variant='h4' fontWeight="fontWeightMedium" color="secondary.main">Experience a new era of HR management with <Box component="span" color="primary.main">Comprehensive HRIS!</Box>​​</Typography>
    </SolutionsContainer>
  )
}

export default ComprehensiveHrisPage
