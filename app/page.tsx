import { Box, Avatar, Typography, List, ListItem } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import { Fragment } from "react"

export default function Home() {

  const TECH_STACK = [
    { technology: 'HTML', icon: 'icon' },
    { technology: 'CSS/SCSS', icon: 'icon' },
    { technology: 'JS/TS', icon: 'icon' },
    { technology: 'React/Next', icon: 'icon' },
    { technology: 'MUI', icon: 'icon' },
    { technology: 'Tailwind', icon: 'icon' },
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
            <Typography variant="h4" color={'#EEEEEE'}>
              Denis Tkachenko👋🏻
            </Typography>
            <Typography variant="subtitle1" color={'#EEEEEE'}>
              Front-end developper
            </Typography>
            <Typography variant="subtitle2" color={'#EEEEEE'}>
              Location: Ukraine, Kharkiv
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box p={5} pt={5}>
            <Typography variant="h4" color={'#EEEEEE'}>
              About <PersonIcon />
            </Typography>
            <Typography variant="body1" color={'#EEEEEE'} mt={2}>
              I am Front-end Developer with 2+ years of expertise.
              At the moment, my strength lies in developing e-commerce
              projects with custom CRM systems. My skills enable me to
              create responsive interfaces that are user-friendly for both the
              client and the customer. Additionally, my development
              experience allows me to write clear and clean code.
            </Typography>
          </Box>
          <Box p={5} pt={5}>
            <Typography variant="h4" color={'#EEEEEE'}>
              Tech stack <ComputerOutlinedIcon />
            </Typography>
            <List sx={{paddingTop: '16px', paddingLeft:'24px', color: '#EEEEEE'}}>
              {TECH_STACK.map(({ technology }) => (
                <ListItem sx={{ listStyleType: 'disc', display: 'list-item' }}>
                  <Typography variant="body1" color={'#EEEEEE'}>
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
