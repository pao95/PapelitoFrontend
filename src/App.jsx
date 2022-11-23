import "./App.css";

import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { PublicLayout } from "./components/layout/PublicLayout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CarritoProvider } from "./context/CarritoProvider";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
