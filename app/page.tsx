'use client'
import { useState } from "react";
import { Box, Avatar, Typography, List, ListItem, Divider, Link } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import GroupIcon from '@mui/icons-material/Group';
import TranslateIcon from '@mui/icons-material/Translate';
import { Fragment } from "react"

import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WebIcon from '@mui/icons-material/Web';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

type ProjectInterface = {
  title: string,
  links: string[],
  desc: string,
  role: string
}

type PropsProject = {
  project: ProjectInterface,
  stack: string[],
}

type PropsStack = {
  stack: string[];
}

const sushka: ProjectInterface = {
  title: 'Sushka shop',
  links: ['https://github.com/sushka2023/sushka-shop-fe', 'https://sushka-shop.netlify.app'],
  desc: 'E-commerce project with custom CRM systems.',
  role: 'As a front end developer, I was involved in the implementation of routing, development of the main page, catalog, favorites, authorization, cooperation, placing orders, creating products within the CRM.I also work closely with designers and other developers and offer my ideas for improving the quality of user interaction with our interface.'
}

const fakeStore: ProjectInterface = {
  title: 'Fake store',
  links: ['https://github.com/Tkachenko01001/fake-store-fe', 'https://fake-store-fe-fab3.vercel.app'],
  desc: 'Project with basic functionality E-commerce with the ability to receive information about an order to the specified email.',
  role: 'As a front end developer, I was involved in all feature.',
}

const taskPro: ProjectInterface = {
  title: 'Task Pro',
  links: ['https://github.com/Tkachenko01001/project-REACT_NODE', 'https://tkachenko01001.github.io/project-REACT_NODE/welcome'],
  desc: 'Task scheduler project with drag and drop functionality.',
  role: 'I was the team leader of the front-end team, reviewed the code of the team members, helped solve problems, and also set up a repository, developed a board background switch, implemented routing and developed a board filter.',
}

const sushkaStack = ['React', "Redux toolkit", "TypeScript", "Module SCSS", "MUI", "Formik", "Axios", "Rest API"]
const fakeStoreStack = ['Next', "Redux toolkit", "TypeScript", "Tailwind", "emailjs/browser", "notiflix", "Axios", "Rest API"]
const taskProStack = ['React', "Redux toolkit", "Formik", "clsx", "MUI", "Module SCSS", "Formik", "Axios", "Rest API"]

const BasicChips:React.FC<PropsStack> = ({stack}) => {
  return (
    <Stack direction="row" flexWrap={'wrap'} spacing={0} sx={{ margin: 0, gap: '8px' }}>
      {stack.map((tech: string) => (
        <Chip key={tech} label={tech} sx={{ color: 'white', backgroundColor: 'rgb(255 255 255 / 21%)'}}/>
      ))}
    </Stack>
  );
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProjectCard: React.FC<PropsProject> = ({ project, stack }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 635, backgroundColor: '#ffffff1c' }}>
      <CardHeader
        sx={{ textAlign: 'justify'}}
        
      title={
        <Typography variant="h5" component="h2">
          <Link href={project.links[1]} color="white" underline="hover" sx={{display: 'flex', alignItems: 'flex-start', gap: '8px'}}>
            {project.title}
            <OpenInNewIcon sx={{width: '20px', height: '20px'}} />
          </Link>
        </Typography>
      }
      subheader={
        <Typography variant="body1" component="p">
          <Link href={project.links[0]} color="white" underline="hover">
            GitHub
          </Link>
        </Typography>
      }
      />
      <CardContent sx={{paddingBottom: '0'}}>
        <Typography variant="body2" color="white" textAlign={'justify'}>
          {project.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{color: 'white'}} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography color={'white'} fontWeight={600} paragraph textAlign={'justify'}>Main stack:</Typography>
          <BasicChips stack={stack} />
          <Typography color={'white'} mt={'16px'} paragraph fontWeight={600} textAlign={'justify'}>Role:</Typography>
          <Typography color={'white'} mt={'16px'} mb={0} textAlign={'justify'} paragraph>
            {project.role}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

function OutlinedTimeline() {
  return (
    <Timeline position="alternate" sx={{
      paddingTop: '72px',
      paddingLeft: '0px'
      }}>
      <TimelineItem>
        <TimelineOppositeContent>
          2023 - current
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector sx={{height: '300px'}} />
        </TimelineSeparator>
        <TimelineContent>
          <ProjectCard project={sushka} stack={sushkaStack} />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector sx={{height: '340px'}} />
        </TimelineSeparator>
        <TimelineContent>
          <ProjectCard project={fakeStore} stack={fakeStoreStack} />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector sx={{height: '300px'}} />
        </TimelineSeparator>
        <TimelineContent>
          <ProjectCard project={taskPro} stack={taskProStack} />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    
  );
}

export default function Home() {

  const TECH_STACK = [
    'HTML',
    'CSS/SCSS',
    'JS/TS',
    'React/Next',
    'MUI',
    'Tailwind',
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
      <Box display={'flex'}>
      <Box display={'flex'} flexDirection={'column'} maxWidth={'550px'} p={15} pt={9}>
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
              Location: Kharkiv, Ukraine
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box mt={5}>
            <Typography variant="h4">
              About <PersonIcon />
            </Typography>
            <Typography variant="body1" mt={2} textAlign={'justify'}>
              I am Front-end Developer with 2+ years of expertise.
              At the moment, my strength lies in developing e-commerce
              projects with custom CRM systems. My skills enable me to
              create responsive interfaces that are user-friendly for both the
              client and the customer. Additionally, my development
              experience allows me to write clear and clean code.
            </Typography>
          </Box>
          <Box mt={5}>
            <Typography variant="h4">
              Tech stack <ComputerOutlinedIcon />
            </Typography>
            <List sx={{paddingLeft: '24px'}}>
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
            <List sx={{paddingLeft: '24px'}}>
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
            <List sx={{paddingLeft: '24px'}}>
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
        
        <Box pl={'80px'} pt={'88px'} maxWidth={900} width={'100%'}>
          <Typography variant="h4">Work experience</Typography>
          <OutlinedTimeline />
        </Box>
        
      </Box>
    </Fragment>
  )
}
