import { Banner, TopRated } from '../components';
import Navigation from '../components/Navigation';
const HomeScreen = () => {
  return (
    <>
      <div className='bg-gray-900 w-screen '>
        <Navigation />
      </div>
      <Banner />
      <TopRated />
    </>
  );
};

export default HomeScreen;
