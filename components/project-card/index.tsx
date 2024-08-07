import { useState } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { Typography, Link } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import ExpandMore from "../expand-more";
import BasicChips from "../chips";

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

const ProjectCard: React.FC<PropsProject> = ({ project, stack }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 635, backgroundColor: '#ffffff1c' }}>
      <CardHeader
        sx={{ textAlign: 'justify' }}
        
        title={
          <Typography variant="h5" component="h2">
            <Link href={project.links[1]} color={ project.links[1] !== '' ? "white" : '#6e6e6e'} underline="hover" sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px', pointerEvents: project.links[1] === '' ? 'none' : 'auto' }}>
              {project.title}
              {project.links[1] !== '' && <OpenInNewIcon sx={{ width: '20px', height: '20px' }} />}
            </Link>
          </Typography>
        }
      />
      <CardContent sx={{ paddingBottom: '0' }}>
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
          <ExpandMoreIcon sx={{ color: 'white' }} />
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

export default ProjectCard