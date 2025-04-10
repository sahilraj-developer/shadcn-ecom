import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "../auth/AuthProvider";
import ProtectedRoute from "../auth/ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import ClientLayout from "../layouts/ClientLayout";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Home from "../pages/client/Home";
import Profile from "../pages/client/Profile";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Reports from "@/pages/admin/Reports";
import Settings from "@/pages/admin/Settings";
import ProductPage from "@/pages/client/ProductPage";
import CartPage from "@/pages/client/CartPage";
import CMS from "@/pages/admin/CMS";
import Game from "../pages/client/Game";
import Products from "@/pages/admin/Products";
import ProductView from "@/pages/admin/products/productview";
import ProductEdit from "@/pages/admin/products/ProductEdit";

const AppRouter = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Admin Routes */}
          <Route
            path="/admin/*"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <Users />
                </AdminLayout>
              // </ProtectedRoute>
            }
          />


          <Route
            path="/admin/reports"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <Reports />
                </AdminLayout>
              // </ProtectedRoute>
            }
          />


          <Route
            path="/admin/products"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <Products />
                </AdminLayout>
              // </ProtectedRoute>
            }
          />
          
          <Route
            path="/admin/products/view/:id"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <ProductView />
                </AdminLayout>
              // </ProtectedRoute>
            }
          />

             <Route
            path="/admin/products/edit/:id"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <ProductEdit />
                </AdminLayout>
              // </ProtectedRoute>
            }
          />




          <Route
            path="/admin/settings"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <Settings />
                </AdminLayout>
              // </ProtectedRoute>
            }
          />



<Route
            path="/admin/cms"
            element={
              // <ProtectedRoute>
                <AdminLayout>
                  <CMS />
                </AdminLayout>
              // </ProtectedRoute>
            }
          />


          {/* Protected Client Routes */}
          <Route
            path="/client/*"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <Home />
                </ClientLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/client/profile"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <Profile />
                </ClientLayout>
              </ProtectedRoute>
            }
          />




<Route
            path="/client/game"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <Game />
                </ClientLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/client/products"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <ProductPage />
                </ClientLayout>
              </ProtectedRoute>
            }
          />

<Route
            path="/client/cart"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <CartPage />
                </ClientLayout>
              </ProtectedRoute>
            }
          />



          {/* Redirect Root Path */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRouter;
