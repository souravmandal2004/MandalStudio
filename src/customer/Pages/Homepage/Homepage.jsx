import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import {mens_kurta} from "../../../Data/men_kurta.js";


function Homepage() {
    return (
        <div>
            <MainCarousel />

            <div className='py-20 space-y-10'>
                <HomeSectionCarousel data={mens_kurta} sectionName={"MEN'S KURTA"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"MEN'S KURTA"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"MEN'S KURTA"}/>
            </div>
        </div>
    )
}

export default Homepage