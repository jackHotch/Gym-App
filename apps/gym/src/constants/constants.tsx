import Dashboard from '@mui/icons-material/SpaceDashboardOutlined'
import Profile from '@mui/icons-material/AccountCircleOutlined'
import List from '@mui/icons-material/FormatListBulletedOutlined'
import Barbell from '@mui/icons-material/FitnessCenterOutlined'
import Scale from '@mui/icons-material/MonitorWeightOutlined'
import TrendingUp from '@mui/icons-material/MovingOutlined'
import dayjs from 'dayjs'

export const DESKTOP_NAV_OPTIONS = [
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

export const MOBILE_NAV_OPTIONS = [
  { name: 'Home', path: '/', icon: null },
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: <Dashboard sx={{ fontSize: 60, color: 'white' }} />,
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <Profile sx={{ fontSize: 60, color: 'white' }} />,
  },
  {
    name: 'Record',
    path: '/record',
    icon: <Barbell sx={{ fontSize: 60, color: 'white' }} />,
  },
  {
    name: 'Weight',
    path: '/weight',
    icon: <Scale sx={{ fontSize: 60, color: 'white' }} />,
  },
  {
    name: 'Splits',
    path: '/splits',
    icon: <List sx={{ fontSize: 60, color: 'white' }} />,
  },
  {
    name: 'Progress',
    path: '/progress',
    icon: <TrendingUp sx={{ fontSize: 60, color: 'white' }} />,
  },
]

export const RangeSelectorOptions = [
  { name: '1 Week', startDate: dayjs().subtract(1, 'w'), endDate: dayjs() },
  { name: '1 Month', startDate: dayjs().subtract(1, 'M'), endDate: dayjs() },
  { name: '2 Months', startDate: dayjs().subtract(2, 'M'), endDate: dayjs() },
  { name: '3 Months', startDate: dayjs().subtract(3, 'M'), endDate: dayjs() },
  { name: '6 Months', startDate: dayjs().subtract(6, 'M'), endDate: dayjs() },
  { name: '1 Year', startDate: dayjs().subtract(1, 'y'), endDate: dayjs() },
  { name: 'Since Starting Date' },
  { name: 'Custom' },
]
