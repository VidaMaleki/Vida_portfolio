import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';
import { projects } from '../../assets/projects';
import { EffectCoverflow, Navigation, Pagination, Mousewheel } from 'swiper/modules';

export const Projects = () => {
    return (
        <div className="project-carousel">
            <h1 className="carousel-heading">Projects</h1>
            <Swiper
                spaceBetween={20}
                slidesPerView={3} // Display three slides at a time
                modules={[EffectCoverflow, Navigation, Pagination, Mousewheel]}
                grabCursor
                centeredSlides
                initialSlide={1}
                speed={900}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                navigation
                pagination={{ clickable: true }}
                mousewheel={{
                    invert: true,
                    thresholdDelta: 50,
                    sensitivity: 1,
                }}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Projects;
