import { MantineProvider } from "@mantine/core";
import About from "./components/about/About";
import FormContent from "./components/form/FormContent";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import TablePage from "./components/tablePage/TablePage";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div >
      <MantineProvider>
        <Home />
        <About />
        <Services />
        <TablePage />
        <FormContent />
        <Footer />
      </MantineProvider>


    </div>
  );
}

export default App;
