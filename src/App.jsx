import "./App.css";

import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { PublicLayout } from "./components/layout/PublicLayout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CarritoProvider } from "./context/CarritoProvider";

function App() {
  return (
    <CarritoProvider>
      <Provider store={store}>
        <BrowserRouter>
          <PublicLayout>
            <div style={{ minHeight: "fit-content", display: "block" }}>
              <AppRouter />
            </div>
          </PublicLayout>
        </BrowserRouter>
      </Provider>
    </CarritoProvider>
  );
}

export default App;
