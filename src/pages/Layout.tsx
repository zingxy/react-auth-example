import React from 'react';

import { Outlet, Link, useLocation } from 'react-router-dom';

import type { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { Layout as AntdLayout, Button, Menu, Typography } from 'antd';

import {
  UserIcon,
  HomeIcon,
  UserGroupIcon as AdminIcon,
} from '@heroicons/react/24/outline';
import AuthStatus from '../components/AuthStatus';

const { Header, Content, Sider } = AntdLayout;
export default function Layout() {
  const location = useLocation();

  const getMenuItem = (
    name: string,
    to: string,
    Icon: (Props: React.SVGProps<SVGSVGElement>) => JSX.Element
  ) => {
    return {
      key: name,
      label: (
        <Link
          to={to}
          className="font-medium "
        >
          {name}
        </Link>
      ),
      icon: <Icon className="h-4 w-4" />,
    };
  };

  const getActiveKey = () => {
    switch (location.pathname) {
      case '/': {
        return 'Public';
      }
      case '/user': {
        return 'User';
      }
      case '/admin': {
        return 'Admin';
      }
      default: {
        return '';
      }
    }
  };

  const menuItems: MenuItemType[] = [
    getMenuItem('Public', '/', HomeIcon),
    getMenuItem('User', '/user', UserIcon),
    getMenuItem('Protected', '/admin', AdminIcon),
  ];

  return (
    <div className=" flex min-h-screen  items-center justify-center overflow-hidden ">
      <div className="h-[80vh]  w-[60vw] overflow-hidden rounded-2xl bg-slate-100 p-4">
        <AntdLayout className="h-full w-full ">
          <Sider
            theme="light"
            className=" mr-4 hidden overflow-hidden rounded-2xl p-4 shadow-2xl md:block"
          >
            {/* 菜单 */}
            <Menu
              items={menuItems}
              theme="light"
              defaultSelectedKeys={['Public']}
              selectedKeys={[getActiveKey()]}
            />

            <AuthStatus />
          </Sider>

          <Content className=" overflow-hidden rounded-2xl bg-white p-4 shadow-2xl">
            <Outlet />
          </Content>
        </AntdLayout>
      </div>
    </div>
  );
}
