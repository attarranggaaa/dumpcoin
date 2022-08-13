import Navbar from "./components/Navbar";
import List from "./components/List";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Navbar />
        <main className="min-h-screen w-full bg-dark2">
          <div className="container mx-auto px-5 pt-16 md:pt-32">
            <List />
            <Pagination />
          </div>
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
