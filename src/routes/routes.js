import React from 'react';
// import HomePage from  './../pages/HomePage/HomePage'
import NotFoundPage from './../pages/NotFoundPage/NotFoundPage';
// import LoginPage from './../pages/LoginForm/Login';
import Product from './../pages/Product/Product';
import Dashboard from './../pages/Dashboard/Dashboard';
import ProductActionPage from './../pages/ProductActionPage/ProductActionPage';
const routes = [
    
    {
        path : '/',
        exact : true,
        main: () => <Dashboard />
    },
    {
        path : '/product/add',
        exact : false,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path : '/product/:id/edit',
        exact : false,
        main: ({match,history}) => <ProductActionPage match={match} history={history}/>
    },
    {
        path : '/product',
        exact : false,
        main: () => <Product />
    },
   
    {
        path : '',
        exact : false,
        main: () => <NotFoundPage />
    } 
  
];
export default routes;