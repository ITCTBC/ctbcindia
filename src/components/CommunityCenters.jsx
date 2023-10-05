import img1 from "../images/1.webp";
import img2 from "../images/2.webp";
import img3 from "../images/3.webp";
import img4 from "../images/4.webp";
import Title from './Title'

const images = [{ imgSrc: img1, location: 'Agasthyamalai' },
    { imgSrc: img2, location: 'Biligiri Rangaswamy Temple Tiger Reserve' },
    { imgSrc: img3, location: 'Darjeeling' },
    { imgSrc: img4, location: 'Vembanad' }
];

const CommunityCenters = () => {
    return (
        <section className="section">
            <Title title={'Our Community'} subTitle={'Conservation Centres'} ></Title>

            <div className="community-centre-card-container">
                {images.map((data, i) => <div className="community-centre-card" key={i}>

                    <img src={data.imgSrc} alt="community centre location photo" />
                    <span>{ data.location} <div></div></span>
                </div> )}
            </div>

        </section>
    );
};

export default CommunityCenters;