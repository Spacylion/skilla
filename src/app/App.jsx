import '@/shared/styles/App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {useEffect} from 'react';
import HeaderContainer from '@/widgets/header/HeaderContainer.jsx';
import Sidebar from '@/widgets/sidebar/Sidebar.jsx';
import ProfileContainer from '@/pages/calls/CallsContainer.jsx';
import {connect, Provider} from 'react-redux';
import store from './providers/redux-store/redux-store.js';
import CallsContainer from '../pages/calls/CallsContainer.jsx';
import Documents from '../pages/documents/Documents.jsx';
import {initializeApp} from './providers/reducers/appReducer.js';
import Contragents from "../pages/сontragents/Contragents.jsx";
import Knowledge from "../pages/knowledge/Knwoledge.jsx";
import Performers from "../pages/performers/Performers.jsx";
import Messages from "../pages/messages/Messsages.jsx";
import Orders from "../pages/orders/Orders.jsx";
import Results from "../pages/results/Results.jsx";
import Reports from "../pages/reports/Reports.jsx";
import {Settings} from "@mui/icons-material";

function Contrasts() {
    return null;
}

const App = ({handleGlobalError, globalError, initializeApp}) => {
    useEffect(() => {
        initializeApp();
    }, [initializeApp]);

    useEffect(() => {
        const catchAllUnhandledErrors = (event) => {
            handleGlobalError(event);
        };
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
        return () => {
            window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
        };
    }, [handleGlobalError]);

    return (
        <div className="app-wrapper">
            <div className="container__ui">
                <Sidebar/>
            </div>
            <div className="app-wrapper-content">
                <HeaderContainer/>
                {globalError && (
                    <div>
                        <p>{globalError}</p>
                    </div>
                )}
                <Routes>
                    <Route path="/results" element={<Results/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/messages" element={<Messages/>}/>
                    <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                    <Route path="/calls" element={<CallsContainer/>}/>
                    <Route path="/contragents" element={<Contragents/>}/>
                    <Route path="/performers" element={<Performers/>}/>
                    <Route path="/documents" element={<Documents/>}/>
                    <Route path="/reports" element={<Reports/>}/>
                    <Route path="/knowledge" element={<Knowledge/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    globalError: state.app.globalError,
});
const mapDispatchToProps = (dispatch) => ({
    initializeApp: () => dispatch(initializeApp()),
});
const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);

const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppConnected/>
            </Provider>
        </BrowserRouter>
    );
};

export default MainApp;
