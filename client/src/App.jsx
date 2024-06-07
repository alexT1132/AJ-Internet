import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TasksContext";
import { UserProvider } from "./context/UsersContext";

import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import RegisterPage from "./pages/Register";
import UsersPage from "./pages/Users";
import TaskPage from "./pages/Task";
import TaskFormPage from "./pages/TaskForm";
import PanelPage from "./pages/colab/Panel";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
              <Route element={<ProtectedRoute/>}>
            
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/task" element={<TaskPage />} />
                <Route path="/task-add" element={<TaskFormPage />} />
                <Route path="/task/:id" element={<TaskFormPage />} />
            
                <Route path="/panel" element={<PanelPage />} />
          
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App