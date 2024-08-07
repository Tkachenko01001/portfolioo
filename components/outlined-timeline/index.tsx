import { useTheme } from '@mui/material/styles';
import {
    TimelineOppositeContent,
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot
} from '@mui/lab'
import {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import ProjectCard from '../project-card';

type ProjectInterface = {
  title: string,
  links: string[],
  desc: string,
  role: string,
  time: string,
  stack: string[],
}

const PROJECTS: ProjectInterface[] = [
  {
    title: 'Loomi',
    links: ['', 'https://loomi-ten.vercel.app'],
    desc: 'A corporate website on which the company’s services are presented, as well as a feedback form.',
    role: 'Development of all project pages, as well as their localization.',
    time: 'July 2024',
    stack: ['Next.js', "Tailwind CSS", "Clsx", "TypeScript", "Next-intl", "Zod", "React-hook-form", "Shadcn", "Framer-motion"],
  },
  {
    title: 'Invictusgames',
    links: ['', 'https://invictusgames.in.ua'],
    desc: 'Website for organizing sporting events.',
    role: 'Changing and improving content, implementing a registration form, regularly updating content and adding new pages as needed',
    time: 'May 2024 - current',
    stack: ["WordPress", "Elementor"],
  },
  {
    title: 'Sushka shop',
    links: ['', ''],
    desc: 'E-commerce project with custom CRM systems.',
    role: 'As a front end developer, I was involved in the implementation of routing, development of the main page, catalog, favorites, authorization, cooperation, placing orders, creating products within the CRM.I also work closely with designers and other developers and offer my ideas for improving the quality of user interaction with our interface.',
    time: 'June 2023 - current',
    stack: ['React', "MUI", "Redux toolkit", "TypeScript", "Module SCSS", "Formik", "Axios", "Rest API"],
  },
  {
    title: 'Task Pro',
    links: ['', 'https://tkachenko01001.github.io/project-REACT_NODE/welcome'],
    desc: 'Task scheduler project with drag and drop functionality.',
    role: 'I was the team leader of the front-end team, reviewed the code of the team members, helped solve problems, and also set up a repository, developed a board background switch, implemented routing and developed a board filter.',
    time: 'May 2023',
    stack: ['React', "Redux toolkit", "clsx", "MUI", "Module SCSS", "Formik", "Axios", "Rest API"]

  }
]

const OutlinedTimeline = () => {
  const theme = useTheme();
  return (
    <Timeline position="alternate" sx={{
      [theme.breakpoints.down(1120)]: {
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      },
      paddingTop: '72px',
      paddingLeft: '0px',
    }}>
      {PROJECTS.map((project) => (
        <TimelineItem key={project.title}>
          <TimelineOppositeContent>
            {project.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector sx={{ height: '300px' }} />
          </TimelineSeparator>
          <TimelineContent>
            <ProjectCard project={project} stack={project.stack} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default OutlinedTimeline