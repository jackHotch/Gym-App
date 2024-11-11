import { Icon } from '@iconify/react'

export const navOptions = [
  { name: 'Home', path: '/', icon: null },
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: (
      <Icon icon='si:dashboard-vert-line' width='24' height='24' color='var(--blue)' />
    ),
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: (
      <Icon icon='iconamoon:profile-light' width='24' height='24' color='var(--blue)' />
    ),
  },
  {
    name: 'Splits',
    path: '/splits',
    icon: <Icon icon='vaadin-lines-list' width='24' height='24' color='var(--blue)' />,
  },
  {
    name: 'Record',
    path: '/record',
    icon: (
      <Icon icon='clarity:note-edit-line' width='24' height='24' color='var(--blue)' />
    ),
  },
  {
    name: 'Weight',
    path: '/weight',
    icon: <Icon icon='ion:scale-outline' width='24' height='24' color='var(--blue)' />,
  },
  {
    name: 'Progress',
    path: '/progress',
    icon: (
      <Icon icon='ion:trending-up-outline' width='24' height='24' color='var(--blue)' />
    ),
  },
]
