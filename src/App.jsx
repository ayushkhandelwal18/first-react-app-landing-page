
import Navbar from './components/navbar';
import Herosection from './components/herosection';
import FetureSection from './components/FetureSection';
import WorkFlow from './components/WorkFlow';
import Pricing from './components/Pricing';
import Testinomials from './components/Testinomials';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Herosection />
      </div>

      <FetureSection/>

      <WorkFlow />

      <Pricing />

      <Testinomials/>

      <Footer />

      
    </>
  )
}

export default App;
