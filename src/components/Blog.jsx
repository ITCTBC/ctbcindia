import img1 from "../images/1.webp";

const Blog = () => {
  return (
    <>
      <section className="blog-section">
        <div className="blog-container">
          <div className="">
            <h3>Empowering organizations with local Intelligence </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae, saepe quos fugit doloremque at officiis perferendis, aliquam rerum doloribus deserunt dolorem laborum fugiat dignissimos iusto tenetur corporis consequuntur ducimus nesciunt iure a, nam voluptates? Quibusdam pariatur nemo error distinctio.
            </p>
          </div>
          <div className="">
            <img src={img1} alt="image" className="img-blog" />
          </div>
        </div>

        <div className="blog-container-odd">
          <div className="img-container-odd">
            <img src={img1} alt="image" className="img-blog " />
          </div>
          <div className="">
            <h3>
              Pioneering ArcGis, powerful mapping and analytics software
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quis. Totam quae, saepe quos fugit doloremque at officiis perferendis, aliquam rerum doloribus deserunt dolorem laborum fugiat dignissimos iusto tenetur corporis consequuntur ducimus nesciunt iure a, nam voluptates? Quibusdam pariatur nemo error distinctio.
            </p>
          </div>
          <br />
        </div>

        <div className="blog-container">
          <div className="">
            <h3>
              {" "}
              Pioneering ArcGis, powerful mapping and analytics software{" "}
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quis. Totam quae, saepe quos fugit doloremque at officiis perferendis, aliquam rerum doloribus deserunt dolorem laborum fugiat dignissimos iusto tenetur corporis consequuntur ducimus nesciunt iure a, nam voluptates? Quibusdam pariatur nemo error distinctio.
            </p>
          </div>
          <div className="">
            <img src={img1} alt="image" className="img-blog" />
          </div>
        </div>
      </section>
      <div className="section-center featured-center">
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={img1} className="tour-img" alt="" />
            <p className="tour-date">august 26th, 2020</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">

            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>

          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={img1} className="tour-img" alt="" />
            <p className="tour-date">october 1th, 2020</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">

            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>

          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={img1} className="tour-img" alt="" />
            <p className="tour-date">september 15th, 2020</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">

            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>

          </div>
        </article>
      </div>
    </>
  );
};
export default Blog;
