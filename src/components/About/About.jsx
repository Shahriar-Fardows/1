import React from "react";
import PropTypes from "prop-types";
import about from "../../assets/about.jpg";

const About = (props) => {
  return (
    <div>
      <h2 className="text-5xl text-center mt-8">New Arizona Real Estate LTD</h2>
      <div className="grid md:grid-cols md:col-span-9 lg:col-span-9">
        <div className="card w-[800px] bg-base-100 shadow-xl mx-auto m-4">
          <figure>
            <img className="m-10" src={about} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl">
              Welcome to New Arizona Real Estate LTD. Your Trusted Partner in
              Real Estate
            </h2>
            <br />
            <p>
              At New Arizona Real Estate LTD, we understand that real estate is
              more than just buying or selling properties; it's about creating
              homes, building communities, and turning dreams into reality. With
              a commitment to excellence and a passion for delivering
              unparalleled service, we have established ourselves as a trusted
              name in the real estate industry.
            </p>
            <h2 className="text-3xl">Our Mission</h2>
            <p>
              At the heart of our mission is a dedication to providing
              exceptional real estate services with integrity, professionalism,
              and a client-centric approach. We strive to exceed expectations,
              whether you're a first-time homebuyer, an experienced investor, or
              seeking to sell your property.
            </p>
            <h2 className="text-3xl">Expertise You Can Trust</h2>
            <p>
              Backed by a team of seasoned professionals, our real estate
              experts bring a wealth of knowledge and experience to every
              transaction. From market analysis to negotiating deals, we are
              committed to ensuring that your real estate journey is smooth,
              transparent, and ultimately successful.
            </p>
            <h2 className="text-3xl">Comprehensive Services</h2>
            <p>
              Whether you're looking to buy, sell, or invest, [Company Name]
              offers a comprehensive range of services to meet your unique
              needs. Our portfolio includes residential, commercial, and
              investment properties. We guide you through every step of the
              process, providing valuable insights and personalized solutions.
            </p>
            <h2 className="text-3xl">Technology-Driven Approach</h2>
            <p>
              Embracing innovation, [Company Name] utilizes cutting-edge
              technology to stay ahead in the dynamic real estate landscape.
              From virtual tours to digital marketing strategies, we leverage
              the latest tools to enhance the buying and selling experience for
              our clients.
            </p>
            <h2 className="text-3xl">Your Success, Our Priority</h2>
            <p>
              Whether you're a homeowner, investor, or developer, your success
              is our top priority. We measure our success by the satisfaction of
              our clients and the lasting relationships we build. Trust [Company
              Name] to be your reliable partner in achieving your real estate
              goals. Thank you for considering [Company Name] for your real
              estate needs. We look forward to the opportunity to serve you and
              turn your real estate aspirations into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
