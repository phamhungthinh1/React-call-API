import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import themes, { overrides } from '../themes';
import Layout from './Layout';
import Login from '../pages/login';

const theme = createMuiTheme({ ...themes.default, ...overrides });

const PrivateRoute = connect(
    state => ({ isAuthenticated: state.authState.isAuthenticated })
)(({ component, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest} render={props => (
                isAuthenticated ? (
                    React.createElement(component, props)
                ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location },
                            }}
                        />
                    )
            )}
        />
    );
});

const PublicRoute = connect(
    state => ({ isAuthenticated: state.authState.isAuthenticated })
)(({ component, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest} render={props => (
                isAuthenticated ? (
                    <Redirect
                        to={{
                            pathname: '/',
                        }}
                    />
                ) : (
                        React.createElement(component, props)
                    )
            )}
        />
    );
});

const App = () => (
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
                <Route exact path="/app" render={() => <Redirect to="/app/dashboard" />} />
                <PrivateRoute path="/app" component={Layout} />
                <PublicRoute path="/login" component={Login} />
                <Route render={() => <Redirect to="/app/dashboard" />} />
            </Switch>
        </BrowserRouter>
    </MuiThemeProvider>
);

export default App;