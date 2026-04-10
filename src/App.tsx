import { Button } from "@/components/ui/button";
import UsersTable from "@/component/UsersTable";
import { BugReportForm } from "@/components/ui/form";
import Navbar from "./component/Navbar";
import  Layout from "./component/Layout";
function App() {
  

  return (
    <>
      <Button className="bg-blue-500 text-white hover:bg-blue-600">Click Me</Button>
      <UsersTable/>
      {/* < BugReportForm/> */}
      <Navbar/>

      <Layout/>
    </>
  )
}

export default App
