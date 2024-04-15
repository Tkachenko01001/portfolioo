'use client'
import { Box, Avatar, Typography, List, ListItem } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import { Fragment } from "react"

export default function Home() {

  const TECH_STACK = [
    'HTML',
    'CSS/SCSS',
    'JS/TS',
    'React/Next',
    'MUI',
    'Tailwind',
  ]

  return (
    <Fragment>
      <Box display={'flex'} flexDirection={'column'} margin={'0 auto'} maxWidth={'550px'}>
        <Box display={"flex"} gap={'25px'} alignItems={'center'} flexDirection={'row'} p={5}>
          <Avatar
            alt="Front-end developper"
            src="/my_photo.jpg"
            sx={{ width: 120, height: 120 }}
          />
          <Box>
            <Typography variant="h4">
              Denis Tkachenko👋🏻
            </Typography>
            <Typography variant="subtitle1">
              Front-end developper
            </Typography>
            <Typography variant="subtitle2">
              Location: Ukraine, Kharkiv
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box p={5} pt={5}>
            <Typography variant="h4">
              About <PersonIcon />
            </Typography>
            <Typography variant="body1" mt={2}>
              I am Front-end Developer with 2+ years of expertise.
              At the moment, my strength lies in developing e-commerce
              projects with custom CRM systems. My skills enable me to
              create responsive interfaces that are user-friendly for both the
              client and the customer. Additionally, my development
              experience allows me to write clear and clean code.
            </Typography>
          </Box>
          <Box p={5} pt={5}>
            <Typography variant="h4">
              Tech stack <ComputerOutlinedIcon />
            </Typography>
            <List sx={{ paddingTop: '16px', paddingLeft: '24px' }}>
              {TECH_STACK.map((technology) => (
                <ListItem key={technology} sx={{ listStyleType: 'disc', display: 'list-item' }}>
                  <Typography variant="body1">
                    {technology}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}
