import Navbar from './components/Navbar/Navbar';
import SearchTypingAnimation from './components/SearchBox/page';
import CoursesSection from './components/Course/page';
import Footer from './components/Footer/page';
import MustExplore from './components/MustExplore/page';
import Explore from './components/Explore/page';


function App() {
  return (
    <div className="">
    
        <Navbar />
       <SearchTypingAnimation />
        <CoursesSection />
        <MustExplore />
        <Explore />
        <Footer />
        
    </div>
  );
}

export default App;