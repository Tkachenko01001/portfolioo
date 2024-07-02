'use client'

import { Fragment, useState } from "react"
import { Box, Avatar, Typography, List, ListItem, Link, Divider, SwipeableDrawer, Button } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import GroupIcon from '@mui/icons-material/Group';
import TranslateIcon from '@mui/icons-material/Translate';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import OutlinedTimeline from "@/components/outlined-timeline";
import MobileMenu from "@/components/mobile-menu";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const theme = useTheme();

  const TECH_STACK = [
    'HTML',
    'CSS/SCSS',
    'JS/TS',
    'React/Next',
    'Next-intl',
    'SSR/SSG',
    'React-hook-form',
    'Redux-toolkit',
    'Clsx',
    'MUI',
    'Tailwind',
    'Shadcn',
    'Framer-motion',
    'Rest API',
    'Axios',
  ]

  const SOFT_SKILLS = [
    'CRITICAL THINKING',
    'ANALYTICAL SKILLS',
    'COMMUNICATION',
    'CONFLICT RESOLUTION',
    'PUNCTUALITY',
    'INITIATIVE',
  ]

  const LANGUAGES = [
    'Ukrainian - native',
    'Russian - native',
    'English - A1',
  ]

  return (
    <Fragment>
      <Box display={'flex'} sx={{
        [theme.breakpoints.down(1120)]: {
          justifyContent: 'center',
        },
        [theme.breakpoints.down(600)]: {
          padding: '20px',
        },
        
      }}>
        <Box display={'flex'} flexDirection={'column'} maxWidth={'550px'} p={15} pt={9} sx={{
          [theme.breakpoints.down(1441)]: {
            paddingLeft: '50px',
            paddingRight: '50px'
          },
          [theme.breakpoints.down(1120)]: {
            paddingLeft: '20px',
            paddingRight: '70px'
          },
        }}>
          <Box display={"flex"} gap={'25px'} alignItems={'center'} flexDirection={'row'}>
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
                Location: Ukraine
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box mt={5}>
              <Typography variant="h4">
                About <PersonIcon />
              </Typography>
              <Typography variant="body1" mt={2} textAlign={'justify'}>
                I am a Front-end Developer with 2+ years of expertise. My strength lies in developing a wide range of projects, including custom CRM systems and e-commerce platforms. My skills enable me to create responsive interfaces that are user-friendly for both clients and customers. Additionally, my development experience allows me to write clear code.
              </Typography>
            </Box>
            <Box mt={5}>
              <Typography variant="h4">
                Tech stack <ComputerOutlinedIcon />
              </Typography>
              <List sx={{ paddingLeft: '24px' }}>
                {TECH_STACK.map((technology) => (
                  <ListItem key={technology} sx={{ listStyleType: 'disc', display: 'list-item' }}>
                    <Typography variant="body1">
                      {technology}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box mt={5}>
              <Typography variant="h4">
                Soft skills <GroupIcon />
              </Typography>
              <List sx={{ paddingLeft: '24px' }}>
                {SOFT_SKILLS.map((skill) => (
                  <ListItem key={skill} sx={{ listStyleType: 'disc', display: 'list-item' }}>
                    <Typography variant="body1">
                      {skill}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box mt={5}>
              <Typography variant="h4">
                Languages <TranslateIcon />
              </Typography>
              <List sx={{ paddingLeft: '24px' }}>
                {LANGUAGES.map((language) => (
                  <ListItem key={language} sx={{ listStyleType: 'disc', display: 'list-item' }}>
                    <Typography variant="body1">
                      {language}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
        <Box pt={'88px'} maxWidth={900} width={'100%'} sx={{
          [theme.breakpoints.down(1120)]: {
            display: 'none',
          },
        }}>
          <Typography variant="h4">Work experience</Typography>
          <OutlinedTimeline />
        </Box>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </Box>
      <Divider sx={{ borderColor: 'rgb(255 255 255 / 12%)' }} />
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'} marginBottom={'72px'} sx={{
        [theme.breakpoints.down(611)]: {
          flexDirection: 'column',
          gap: '20px',
          margingBottom: '50px'
        },
      }}>
        <List sx={{ display: 'flex', gap: '30px' }}>
          <ListItem>
            <Link href="https://www.linkedin.com/in/denis-tkachenko-developer/" color={'#fff'}>
              <LinkedInIcon sx={{
                width: '40px', height: '40px', '&:hover': {
                  color: '#0e76a8', transform: 'scale(1.2)', transition: 'ease 0.2s', [theme.breakpoints.down(611)]: {
                    padding: '0px'
                  },
                }
              }} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://t.me/Tk_d_01" color={'#fff'}>
              <TelegramIcon sx={{
                width: '40px', height: '40px', '&:hover': {
                  color: '#0e76a8', transform: 'scale(1.2)', transition: 'transform ease 0.2s', [theme.breakpoints.down(611)]: {
                    padding: '0px'
                  },
                }
              }} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/Tkachenko01001" color={'#fff'}>
              <GitHubIcon sx={{
                width: '40px', height: '40px', '&:hover': {
                  color: '#0e76a8', transform: 'scale(1.2)', transition: 'transform ease 0.2s', [theme.breakpoints.down(611)]: {
                    padding: '0px'
                  },
                }
              }} />
            </Link>
          </ListItem>
        </List>
        <Button
        variant="contained"
        href="/Tkachenko_Denis_front-end_developer.pdf"
        download
        startIcon={<DownloadForOfflineIcon />}
        sx={{ mt: 2, backgroundColor: '#0e76a8' }}
      >
        Download CV
      </Button>
        <List>
          <ListItem>
            <Link href="tel:+380999660502" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#fff', '&:hover .icon': { transform: 'scale(1.2)', transition: 'transform 0.2s ease', color: '#0e76a8' } }}>
              <PhoneIcon className="icon" sx={{ width: '30px', height: '30px', color: 'white' }} />
              +380999660502
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:dtkachenko01001@gmail.com" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#fff', '&:hover .icon': { transform: 'scale(1.2)', transition: 'transform 0.2s ease', color: '#0e76a8' } }}>
              <EmailOutlinedIcon className="icon" sx={{ width: '30px', height: '30px', color: 'white' }} />
              dtkachenko01001@gmail.com
            </Link>
          </ListItem>
        </List>
      </Box>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        PaperProps={{
          sx: {
            color: '#fff',
            backgroundColor: '#222',
            width: '100%',
            height: '100%'
          }
        }}
      >
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <OutlinedTimeline />
      </SwipeableDrawer>
    </Fragment>
  )
}
