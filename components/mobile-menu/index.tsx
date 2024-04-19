import { Box, Button } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useTheme } from '@mui/material/styles';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

type Props = {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void
}

const MobileMenu: React.FC<Props> = ({isOpen, setIsOpen}) => {
    const theme = useTheme();

    return (
        <Box
            onClick={() => setIsOpen(!isOpen)}
            sx={{
                position: 'fixed',
                zIndex: '999',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%) rotate(180deg)',
                [theme.breakpoints.up(1120)]: {
                    display: 'none',
                },
            }}>
            <Button
                sx={{
                    writingMode: 'vertical-rl',
                    justifyContent: 'flex-start',
                    transform: 'rotate(180deg)',
                    backgroundColor: '#83838330',
                    gap: '8px',
                    color: '#fff'
                }}>
                {!isOpen ? <NavigateBeforeIcon /> : <CloseOutlinedIcon />}
                {!isOpen && 'WORK EXPIRIANCE'}
            </Button>
        </Box>
    )
};

export default MobileMenu