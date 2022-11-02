import { Banner, Documentaries, TopRated, Trending } from '../components';
import Navigation from '../components/Navigation';
const HomeScreen = () => {
  return (
    <>
      <div className='bg-gray-900 w-screen '>
        <Navigation />
      </div>
      <Banner />
      <TopRated />


      {/* <TopRated /> */}
      {/* <TopRated />
        <Trending />
        <Documentaries /> */}
    </>
  );
};

export default HomeScreen;
