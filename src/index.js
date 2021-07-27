import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import ApplicationContainer from "./navigation";
import configureStore from './Redux/configureStore';
import ASYNC_STORAGE_KEYS from "./utils/AsyncStorageKeys";
import { PersistGate } from 'redux-persist/integration/react'

const {
	store,
	persistor
} = configureStore()


const App = () => {
	// const persistor = persistStore(store);	
	return (
		<Provider store={store}>

			<PersistGate
				loading={null}
				// onBeforeLift={_onBeforeLift}
				persistor={persistor}
			>
				<ApplicationContainer />
			</PersistGate>

		</Provider>
	);
};

export default App;
