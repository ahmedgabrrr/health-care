import React from 'react';
import Navbarr from '../../components/navs/nav';
import './home.css';
import Testmonial from './../../components/testimonial/testimonial';


import girl from './../../images/1.png';
import endPhoto from './../../images/headerafter.png';
import doctor1 from './../../images/2.1.jpg';
import doctor2 from './../../images/2.2.jpg';
import doctor3 from './../../images/2.3.jpg';
import mobile from './../../images/mobile.png';
import girl2 from './../../images/women.png';
import heart from './../../images/heart.png';
import back4 from './../../images/4.png';
import doc1 from './../../images/4.1.jfif';
import doc2 from './../../images/4.2.jfif';
import doc3 from './../../images/4.3.jfif';
import doc4 from './../../images/4.4.jfif';
import doc5 from './../../images/4.5.jfif';
import doc6 from './../../images/4.6.jfif';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMedical, faBed, faStethoscope, faUserDoctor, faSyringe } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
        <React.Fragment>
            <div className='home'>
                <Navbarr />
                <header>
                    <div className="container">
                        <div className="row">
                            <div className='col-lg-7 col-md-6 col-sm-7'>
                                <div className="text">
                                    <p>We Provide All Health Care Solution</p>
                                    <h3>Protect Your Health And Take Care To Of Your Health</h3>
                                </div>
                                <button>Read More</button>
                            </div>
                            <div className='col-lg-5 col-md-6 col-sm-5'>
                                <img src={girl} alt="" />
                            </div>
                        </div>
                    </div>
                </header>
                <div className="endPhoto">
                    <img src={endPhoto} alt="" />
                </div>
                <div className="about">
                    <div className="container">
                        <div className="row">
                            <div className='col-lg-7 col-md-6 col-sm-7'>
                                <div className="aboutPhotos">
                                    <ul>
                                        <li><img className='imageArea1' src={doctor1} alt="" /></li>
                                        <li><img className='imageArea2' src={doctor2} alt="" /></li>
                                        <li><img className='imageArea3' src={doctor3} alt="" /></li>
                                        <li className='exp'>
                                            <h3>20</h3>
                                            <p>Years Experience</p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-6 col-sm-5'>
                                <div className="text">
                                    <h4>About Us</h4>
                                    <h2>The Great Place Of Medical Hospital Center</h2>
                                    <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                                </div>
                                <div className='boxes'>
                                    <div className='col-lg-6 col-sm-6 mb-30 mb-sm-20'>
                                        <div className="box1"><span><FontAwesomeIcon className='icon' icon={faTruckMedical} /></span><h4>Emergency Help</h4></div>
                                    </div>
                                    <div className='col-lg-6 col-sm-6 mb-30 mb-sm-20'>
                                        <div className="box2"><span><FontAwesomeIcon className='icon' icon={faBed} /></span><h4>Qualified Doctors</h4></div>
                                    </div>
                                    <div className='col-lg-6 col-sm-6 mb-30 mb-sm-20'>
                                        <div className="box3"><span><FontAwesomeIcon className='icon' icon={faStethoscope} /></span><h4>Best Professionals</h4></div>
                                    </div>
                                    <div className='col-lg-6 col-sm-6 mb-30 mb-sm-20'>
                                        <div className="box4"><span><FontAwesomeIcon className='icon' icon={faUserDoctor} /></span><h4>Medical Treatment</h4></div>
                                    </div>
                                    <div className="btn">Read More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='workProcess'>
                    <div className="container">
                        <div className="head">
                            <h4>Working Process</h4>
                            <h2>How we works?</h2>
                        </div>
                        <div className="row">
                            <div className="workProcess-boxes">
                                <div className='col-lg-4 col-sm-6 mb-30'>
                                    <div className="box-1">
                                        <h5 >01</h5>
                                        <h3>Make Appointmnet</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                        <button>View More</button>
                                    </div>
                                </div>

                                <div className='col-lg-4 col-sm-6 mb-30'>
                                    <div className="box-2-active">
                                        <h5 >02</h5>
                                        <h3>Take Treatment</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                        <button>View More</button>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-6 mb-30'>
                                    <div className="box-3">
                                        <h5>03</h5>
                                        <h3>Registration</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                        <button>View More</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className='booking'>
                    <div className="container">
                        <div className="row">
                            <div className='col-xl-5 col-lg-6 col-md-6'>
                                <div className="book-form">
                                    <h2>Book Appointment</h2>
                                    <form >
                                        <div className="dept"><input type="text" placeholder='Select Department' list="deptname" name='dept' />
                                            <datalist id='deptname'>
                                                <option value="Infectious Diseases" />
                                                <option value="heart" />
                                                <option value="Dermatology" />
                                                <option value="Pathology" />
                                                <option value="Surgery" />
                                                <option value="Allergy and Immunology" />
                                                <option value="Otolaryngology" />

                                            </datalist>
                                        </div>
                                        <div className="doctor"><input type="text" placeholder='Select Doctor' list='docname' />
                                            <datalist id='docname'>
                                                <option value="mohammed elsayed" />
                                                <option value="ahmed gabr" />
                                                <option value="nassem samir" />
                                                <option value="mahmoud elbakry" />
                                                <option value="aballah mohammed" />


                                            </datalist>
                                        </div>
                                        <div className="name"><input type="text" placeholder='Your Name' /></div>
                                        <div className="num"><input type="text" placeholder='Phone Number' /></div>
                                        <div className="date"><input type="date" /></div>

                                        <button>Appointment Now</button>
                                    </form>
                                </div>
                            </div>
                            <div className='col-xl-7 col-lg-6 col-md-6'>
                                <div className="content">
                                    <div className="main-photo">
                                        <img src={mobile} alt="" />
                                    </div>
                                    <div className="photos-group">
                                        <img className='img1' src={girl2} alt="" />
                                        <img className='img2' src={heart} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="services">
                    <div className="container">
                        <div className="row">
                            <div className='col-xl-4 col-lg-7 mb-30'>
                                <div className="service-text">
                                    <h6>Services</h6>
                                    <h3>We Cover A Big Variety Of Medical Services</h3>
                                    <p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
                                    <button>All Services</button>
                                </div>
                            </div>
                            <div className='col-xl-8 mb-15'>
                                <div className="service-boxes">
                                    <div className="treatment">
                                        <div >
                                            <FontAwesomeIcon className='icon' icon={faStethoscope} />

                                        </div>
                                        <h3>treatment</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi perferendis.</p>
                                        <button>Veiw More</button>

                                    </div>
                                    <div className="surgery">
                                        <div>
                                            <FontAwesomeIcon className='icon' icon={faUserDoctor} />
                                        </div>
                                        <h3>surgery</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi perferendis.</p>
                                        <button>Veiw More</button>

                                    </div>
                                    <div className="vaccine">
                                        <div>
                                            <FontAwesomeIcon className='icon' icon={faSyringe} />

                                        </div>
                                        <h3>vaccine</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi perferendis.</p>
                                        <button>Veiw More</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="container">
                        <div className="testimonial-text">
                            <h6>Testimonial</h6>
                            <h2>See What Are The Patients
                                <br />Saying About us</h2>
                        </div>
                        <div className="row">
                            <div className='col-lg-6 text-center'>
                                <div className="doctors">
                                    <div className='back'><img src={back4} alt="" /></div>
                                    <ul>
                                        <li data-member='1'> <img src={doc1} alt="" /></li>
                                        <li data-member='2'><img src={doc2} alt="" /></li>
                                        <li data-member='3'><img src={doc3} alt="" /></li>
                                        <li data-member='4'><img src={doc4} alt="" /></li>
                                        <li data-member='5'><img src={doc5} alt="" /></li>
                                        <li data-member='6'><img src={doc6} alt="" /></li>
                                    </ul>
                                </div>

                            </div>
                            <div className='col-lg-6'>

                                <Testmonial />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </React.Fragment>
    );
}

export default Home;