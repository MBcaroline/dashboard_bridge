import {
  mdiMenu,
  mdiClockOutline,
  mdiCloud,
  mdiCrop,
  mdiAccount,
  mdiCogOutline,
  mdiLogout,
} from "@mdi/js";

export default [
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: "My Profile",
        to: "/profile",
      },
      {
        icon: mdiCogOutline,
        label: "Settings",
      },
    ],
  },

  {
    icon: mdiLogout,
    label: "Log out",
    isDesktopNoLabel: true,
    isLogout: true,
  },
];
