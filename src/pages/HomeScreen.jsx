import { Banner, TopRated } from '../components';
import Trending from '../components/Trending';
import Documentary from '../components/Doumentary';
const HomeScreen = () => {
  return (
    <>
      <Banner />
      <TopRated />
      <Trending />
      <Documentary />
    </>
  );
};

export default HomeScreen;
