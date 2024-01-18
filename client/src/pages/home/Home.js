import React from "react";
import './Home.css'
import Navbar from "../../components/navbar/Navbar";
import FirstWriteUp from "../../components/first_writeup/FirstWriteUp";
import Awards from "../../components/awards/Awards";
import Assets from "../../components/assets/Assets";
import Plans from "../../components/plans/Plans";
import CaseStudies from "../../components/case_studies/CaseStudies";
import Vacancy from "../../components/vacancy/Vacancy";
import Contact from "../../components/contact/Contact";
import StickyNav from "../../components/sticky_nav/StickyNav";
import Footer from "../../components/footer/Footer";






const Home = () => {
return<div className="homepage-wrapper">
<Navbar/>
<FirstWriteUp/>
<Awards/>
<Assets/>
<Plans/>
<CaseStudies/>
<Vacancy/>
<Contact/>
<StickyNav/>
<Footer/>
</div>
}
export default Home;
