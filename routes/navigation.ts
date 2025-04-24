const Routes = [
  {
    title: 'Website Management',
    to: '/admin/website-management',
    children: [
      {
        title: 'Blogs',
        to: 'blogs',
        icon: 'mdi-report'
      }
    ]
  },
  {
    title: 'Tutors Management',
    to: '/admin/tutors',
    children: [
      {
        title: 'Teachers',
        to: 'teachers',
        icon: 'mdi-home'
      },
      {
        title: 'Students',
        to: 'students',
        icon: 'mdi-account'
      }
    ]
  }
]
export default Routes
