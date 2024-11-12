import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { IoList } from 'react-icons/io5'
import { PiNotePencil } from 'react-icons/pi'
import { IoScaleOutline } from 'react-icons/io5'
import { IoTrendingUp } from 'react-icons/io5'

export const navOptions = [
  { name: 'Home', path: '/', icon: null },
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: <MdOutlineSpaceDashboard size={24} />,
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <CgProfile size={24} />,
  },
  {
    name: 'Splits',
    path: '/splits',
    icon: <IoList size={24} />,
  },
  {
    name: 'Record',
    path: '/record',
    icon: <PiNotePencil size={24} />,
  },
  {
    name: 'Weight',
    path: '/weight',
    icon: <IoScaleOutline size={24} />,
  },
  {
    name: 'Progress',
    path: '/progress',
    icon: <IoTrendingUp size={24} />,
  },
]
