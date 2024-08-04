import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TasksContext";
import { UserProvider } from "./context/UsersContext";
import { DispositivoProvider } from "./context/DispositivosContext";
import { LocalidadProvider } from "./context/LocalidadContext";

import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import RegisterPage from "./pages/Register";
import UsersPage from "./pages/Users";
import TaskPage from "./pages/Task";
import TaskFormPage from "./pages/TaskForm";
import DispositivosPage from "./pages/Dispositivos";
import DispositivoFormPage from "./pages/DispositivoForm";
import LocalidadesPage from "./pages/Localidades";
import HistorialPage from "./pages/Historial";
import LocalidadesForm from "./pages/LocalidadesForm";

import PanelPage from "./pages/colab/Panel";

import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <LocalidadProvider>
          <DispositivoProvider>
            <UserProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<LoginPage />} />
                  <Route element={<ProtectedRoute />}>
                    {/* Dashboard Administrador */}
                    <Route path="/dashboard" element={<DashboardPage />} />

                    {/* Register */}
                    <Route path="/register" element={<RegisterPage />} />

                    {/* Users */}
                    <Route path="/users" element={<UsersPage />} />

                    {/* Historial */}
                    <Route path="/history" element={<HistorialPage />} />

                    {/* Dispositivos */}
                    <Route path="/dispositivos" element={<DispositivosPage />} />
                    <Route path="/dispositivos_new" element={<DispositivoFormPage />} />
                    <Route path="/dispositivos/:id" element={<DispositivoFormPage />} />

                    {/* Localidades */}
                    <Route path="/localidades" element={<LocalidadesPage />} />
                    <Route path="/localidades-add" element={<LocalidadesForm />} />

                    {/* Pendientes */}
                    <Route path="/task" element={<TaskPage />} />
                    <Route path="/task-add" element={<TaskFormPage />} />
                    <Route path="/task/:id" element={<TaskFormPage />} />

                    <Route path="/panel" element={<PanelPage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </UserProvider>
          </DispositivoProvider>
        </LocalidadProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
