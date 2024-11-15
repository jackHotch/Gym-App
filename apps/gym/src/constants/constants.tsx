import Dashboard from '@mui/icons-material/SpaceDashboardOutlined'
import Profile from '@mui/icons-material/AccountCircleOutlined'
import List from '@mui/icons-material/FormatListBulletedOutlined'
import Barbell from '@mui/icons-material/FitnessCenterOutlined'
import Scale from '@mui/icons-material/MonitorWeightOutlined'
import TrendingUp from '@mui/icons-material/MovingOutlined'

export const NavOptions = [
  { name: 'Home', path: '/', icon: null },
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: <Dashboard />,
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <Profile />,
  },
  {
    name: 'Record',
    path: '/record',
    icon: <Barbell />,
  },
  {
    name: 'Weight',
    path: '/weight',
    icon: <Scale />,
  },
  {
    name: 'Splits',
    path: '/splits',
    icon: <List />,
  },
  {
    name: 'Progress',
    path: '/progress',
    icon: <TrendingUp />,
  },
]
