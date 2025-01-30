export const getRegisterRoutes = (prefix: string) => {
  return [
    {
      name: 'login-Account',
      path: `${prefix}/login-Account`,
      component: './account/signIn.tsx', 
    },
    {
      name: 'createAccount',
      path: `${prefix}/createAccount`,
      component: './account/signUp.tsx', 
    },
    {
      name: 'forgotPassword',
      path: `${prefix}/forgotPassword`,
      component: './account/forgotPassword.tsx', 
    },
  ];
};

export const getGLRoutes = (prefix: string) => {
  const glRootPath = `${prefix}/user`;

  return [
    {
      name: 'gl-user',
      path: glRootPath,
      hideInMenu: true,
      component: './main/mainLayout.tsx',
      routes: getRegisterRoutes(`${glRootPath}`), 
    },
  ];
};

export const includeGLRoutes = {
  path: '/green-leaf',
  hideInMenu: true,
  exact: true,
  layout: false,
  routes: [...getGLRoutes('/green-leaf')],
};
