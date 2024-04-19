import { Chip, Stack } from '@mui/material'

type PropsStack = {
  stack: string[];
}

const BasicChips: React.FC<PropsStack> = ({ stack }) => {
    return (
        <Stack direction="row" flexWrap={'wrap'} spacing={0} sx={{ margin: 0, gap: '8px' }}>
            {stack.map((tech: string) => (
                <Chip key={tech} label={tech} sx={{ color: 'white', backgroundColor: 'rgb(255 255 255 / 21%)' }} />
            ))}
        </Stack>
    );
}

export default BasicChips