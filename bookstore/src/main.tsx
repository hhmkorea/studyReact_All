import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store, {persistor} from "./data/store.tsx";
import {PersistGate} from "redux-persist/integration/react";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}> {/* Provider : 리액트 App 전체를 Redux Store에 연결 */}
        <PersistGate loading={null} persistor={persistor} >
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
