import Navbar from './components/Navbar/Navbar';
import SearchTypingAnimation from './components/SearchBox/page';
import CoursesSection from './components/Course/page';
import Footer from './components/Footer/page';
import MustExplore from './components/MustExplore/page';
import Explore from './components/Explore/page';
import { MantineProvider } from '@mantine/core';


function App() {
  return (
    
           <MantineProvider>
           <Navbar /><SearchTypingAnimation /><CoursesSection /><MustExplore /><Explore /><Footer />
           </MantineProvider>
  );
}

export default App;