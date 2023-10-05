import { useEffect, useState } from "react";

const useInstagramPosts = () => {
    const [upcomingData, setUpcomingData] = useState([]);
    const [galleryData, setGalleryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadInstaPosts = async () => {
            try {
                const res = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&limit=30&access_token=${import.meta.env.VITE_Insta_User_Token}`);
                const result = await res.json();
                const upcoming = result.data.filter(x => x.media_type !== "VIDEO" && x.caption.includes('upcoming'));
                const ctbcIndia = result.data.filter((x) => x.media_type != "VIDEO" && x.caption.includes("ctbcindia")).slice(0, 6);
                setUpcomingData(upcoming);
                setGalleryData(ctbcIndia);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        loadInstaPosts();
    }, []);

    return {
        upcomingData,
        galleryData,
        loading,
        error,
    };
};

export default useInstagramPosts;