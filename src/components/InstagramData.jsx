import InstaGallery from "./InstaGallery";
import Upcoming from "./Upcoming";
import useInstagramPosts from "../custom hooks/useInstagramPosts";

const InstagramData = () => {
  const { upcomingData,galleryData, loading, error } = useInstagramPosts();

  if (loading || error) {
    return <></>;
  }

  return (
    <>
      {galleryData && <InstaGallery galleryData={galleryData}></InstaGallery>}
      {upcomingData && <Upcoming upcomingData={upcomingData}></Upcoming>}
    </>
  );
};

export default InstagramData;
