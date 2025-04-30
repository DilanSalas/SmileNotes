import { Routes, Route, Navigate } from "react-router-dom"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { HomeRoutes } from "../home/routes/HomeRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useCheckout } from "../hooks/"

export const AppRouter = () => {
  const { status } = useCheckout();

  if (status === 'checking') return <CheckingAuth />;

  return (
    <Routes>
      <Route path="/*" element={<HomeRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />

      {
        (status === 'authenticated') &&
        <Route path="/journal/*" element={<JournalRoutes />} />
      }
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
