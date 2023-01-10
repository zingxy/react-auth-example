import React from 'react';

import { useLocation, Navigate, Outlet } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

import { ROLES } from '../routes';

interface RequireAuthProps {
  children: JSX.Element;
  allowedRoles: ROLES[];
}

export default function RequireAuth({
  children,
  allowedRoles,
}: RequireAuthProps) {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
        }}
        replace
      />
    );
  } else {
    if (auth.user.role.some((role) => allowedRoles.includes(role))) {
      return children;
    } else {
      return (
        <Navigate
          to="/unauthorized"
          replace
        />
      );
    }
  }
}
