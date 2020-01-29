/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
  {
    url: '/dashboard/analytics',
    name: "Home",
    icon: "HomeIcon",
    i18n: "Home", 
  },
  {
    url: null,
    name: "Patient",
    icon: "PackageIcon",
    i18n: "Patient",
    submenu: [
      {
        url: '/pages/register',
        name: "Registrations",
        slug: "email",
        icon: "CheckSquareIcon",
        i18n: "Registration",
      },
    ]
  },
  
  {
    url: "null",
    name: 'Submenu',
    icon: "PackageIcon",
    i18n: "Complaints/Histories",
    submenu: [
      {
        url: '/dashboard/table',
        name: "Chief Complaint",
        slug: "email",
        icon: "CheckSquareIcon",
        i18n: "Chief Complaint",
      },
      {
        url: null,
        name: "Past History",
        slug: "chat",
        icon: "CheckSquareIcon",
        i18n: "Past History",
      },
      {
        url: null,
        name: "Family History",
        slug: "todo",
        icon: "CheckSquareIcon",
        i18n: "Family History",
      },
    ]
  },
  {
    url: null,
    name: "Exams",
    icon: "PackageIcon",
    i18n: "Exams",
    submenu: [
      {
        url: null,
        name: "General Exam",
        slug: "email",
        icon: "CheckSquareIcon",
        i18n: "General Exam",
      },
      {
        url: null,
        name: "P/A",
        slug: "chat",
        icon: "CheckSquareIcon",
        i18n: "P/A",
      },
      {
        url: null,
        name: "Other System",
        slug: "todo",
        icon: "CheckSquareIcon",
        i18n: "Other System",
      },
      {
        url: null,
        name: "Demographs",
        slug: "email",
        icon: "CheckSquareIcon",
        i18n: "Demographs",
      },
    ]
  },
  {
    url: null,
    name: "Diagnosis",
    icon: "PackageIcon",
    i18n: "Diagnosis",
    submenu: [
      {
        url: null,
        name: "Investigations",
        slug: "email",
        icon: "CheckSquareIcon",
        i18n: "Investigations",
      },
      {
        url: null,
        name: "Provisional Diagnosis",
        slug: "chat",
        icon: "CheckSquareIcon",
        i18n: "Provisional Diagnosis",
      },
      {
        url: null,
        name: "Final Diagnosis",
        slug: "todo",
        icon: "CheckSquareIcon",
        i18n: "Final Diagnosis",
      },
    ]
  },
  {
    url: null,
    name: "Treatment",
    icon: "PackageIcon",
    i18n: "Treatment",
    submenu: [
      {
        url: null,
        name: "Prescription",
        slug: "email",
        icon: "CheckSquareIcon",
        i18n: "Prescription",
      },
      {
        url: null,
        name: "Follow Up",
        slug: "chat",
        icon: "CheckSquareIcon",
        i18n: "Follow Up",
      },
    ]
  },
]

