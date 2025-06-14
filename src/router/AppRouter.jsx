import { Routes, Route, Navigate } from "react-router-dom"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useCheckout } from "../hooks/"
import { HomeRoutes } from "../home/routes/HomeRoutes"

export const AppRouter = () => {

  const {status} = useCheckout();
 
 
   if(status === 'checking') return <CheckingAuth />;


  return ( 
    
  <Routes>

    {
      (status === 'authenticated') 
      ?  <Route path="/*" element={<JournalRoutes />} />
      : <Route path="/auth/*" element={<AuthRoutes />} />
      
    }

    <Route path="/*" element={<HomeRoutes/>} />


    <Route/>
  
  </Routes>
  )
}