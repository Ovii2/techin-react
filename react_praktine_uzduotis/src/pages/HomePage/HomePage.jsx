import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className='home-page-container'>
      <div className='home-page'>
        <h1>Welcome to the blood donor page</h1>

        <h3>Why is it Important to Donate Blood?</h3>
        <p>
          About 328 million people currently live in the U.S. Each year, approximately 6.8 million
          people in the U.S donate blood. Annually, this adds up to about 13.6 million units of
          whole blood collected for donation in the U.S. The Red Cross provides about 40% of our
          nation’s blood and blood cell components to donors. Your blood donations are used for
          patients in need of surgery, cancer treatment and transfusions for blood loss from
          traumatic injuries.
        </p>
        <h3>Why Cancer Patients Need Blood?</h3>
        <p>
          For cancer patients, blood transfusions can act as a resource to implement platelets back
          into the body after heavy treatments such as chemo or radiation therapy. For cancer
          patients, blood cells that are made in the bone marrow are often at risk. This lack of
          blood cell production can cause chronic diseases over time which may affect organs such as
          the kidneys, spleen and liver.
        </p>
        <h3>The Importance of Diversity in the Blood Supply</h3>
        <p>
          Maintaining diversity in the blood supply is essential. Some blood types are quite rare
          and are likeliest to be found among people with shared ancestral origins.
        </p>
        <Link to='/register' className='link '>
          <b>Click here to save life today!</b>
        </Link>
      </div>
      <div className='row'>
        <img src={'src/assets/img/blood1.jpg'} alt='donor-image' />
        <img src={'src/assets/img/blood2.jpg'} alt='donor-image' />
        <img src={'src/assets/img/blood3.jpg'} alt='donor-image' />
        <img src={'src/assets/img/blood4.jpg'} alt='donor-image' />
        <img src={'src/assets/img/blood5.jpg'} alt='donor-image' />
        <img src={'src/assets/img/blood6.jpg'} alt='donor-image' />
      </div>
    </div>
  );
}

export default HomePage;
