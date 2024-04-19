import React from 'react';
import styles from './sidebar.module.css';
import MenuLink from './menuLinks/menuLinks';
import Image from 'next/image';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";



const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];



export default function Sidebar() {
  return (
    <div className={`${styles.container} `}>
      <div className={`${styles.user} flex items-center gap-3 mb-3`}>
        <Image alt="" src="/noavatar.png" width="50" height="50" className='rounded-full '/>
        <div className='flex flex-col'>
          <span className={`${styles.username} `}>Paul Mikel</span>
          <span className={`${styles.userTitle} `}>Administrator</span>
        </div>
      </div>
      <ul className='list-none'>
        {menuItems.map((cat) => (
          <li key={cat.title} className={``}>
            <span className={`${styles.cat}`}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
