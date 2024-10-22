import React from 'react'
import Navbar from "../Navbar/Navbar.jsx"
import Slider from '../Slider/Slider.jsx'
import NavigationButtons from "../NavigationButtons/NavigationButtons.jsx"
import FilterProducts from '../FilterProducts/FilterProducts.jsx'
import Footer from '../Footer/Footer.jsx'
import ProductSection from '../ProductSection/ProductSection.jsx'
const Main = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <NavigationButtons />
            <FilterProducts />
            <ProductSection />
            <Footer></Footer>
        </div>
    )
}

export default Main