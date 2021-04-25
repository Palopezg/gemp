import 'react-toastify/dist/ReactToastify.css';
// import 'antd/dist/antd.css';
// import 'antd/dist/antd.less';
import './appLess.css';


import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { hot } from 'react-hot-loader';

import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { getProfile } from 'app/shared/reducers/application-profile';
import Topbar from 'app/componentes/layout/header/topbar';
import Sidebar from 'app/componentes/layout/sidebar/sidebar';
import LayoutPrincipal from 'app/componentes/layout/layoutPrincipal';

import Footer from 'app/shared/layout/footer/footer';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import ErrorBoundary from 'app/shared/error/error-boundary';
import { AUTHORITIES } from 'app/config/constants';
import AppRoutes from 'app/routes';

const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

export interface IAppProps extends StateProps, DispatchProps {}

export const App = (props: IAppProps) => {
  useEffect(() => {
    props.getSession();
    props.getProfile();
  }, []);

  return (
    <Router basename={baseHref}>
      {/* Descomentar esta linea para mostar las notificaciones */}
        {/* <ToastContainer position={toast.POSITION.TOP_RIGHT} className="toastify-container" toastClassName="toastify-toast" /> */}
        
        {props.isAuthenticated ? <ErrorBoundary>
                                   <LayoutPrincipal isAuthenticated={props.isAuthenticated}
                                        isAdmin={props.isAdmin}
                                        isGestionOperativa={props.isGestionOperativa}
                                        authorities={props.authorities}
                                        content={<AppRoutes />} />
                                   </ErrorBoundary>
                               : <AppRoutes />}
  
    </Router>
  );
};

const mapStateToProps = ({ authentication, applicationProfile }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  isAdmin: hasAnyAuthority(authentication.account.authorities, [AUTHORITIES.ADMIN]),
  isGestionOperativa: hasAnyAuthority(authentication.account.authorities, [AUTHORITIES.GESTION_OPERATIVA]),
  authorities: authentication.account.authorities,
  ribbonEnv: applicationProfile.ribbonEnv,
  isInProduction: applicationProfile.inProduction,
  isSwaggerEnabled: applicationProfile.isSwaggerEnabled,
});

const mapDispatchToProps = { getSession, getProfile };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App));
