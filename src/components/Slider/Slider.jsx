import React from 'react'
import { nextSlide, prevSlide, dotSlide } from '../../features/slices/sliderSlice'
import { useSelector, useDispatch } from 'react-redux'
import { sliderData } from '../../assets/data/dummyData.jsx'

const Slider = () => {
    const activeSlideIndex = useSelector(state => state.slider.value);
    console.log(activeSlideIndex);
    const dispatch = useDispatch();

    return (
        <div className='relative pb-4'>
            {/* ================ SLIDER CONTENT AREA ================ */}
            <div>
                {sliderData.map((slide) => {
                    return (
                        <div key={slide.id}
                            className={parseInt(slide.id) === activeSlideIndex
                                ? "opacity-100 duration-700 ease-in-out scale-100"
                                : "opacity-0 duration-700 ease-in-out scale-95"}>

                            <div>
                                {parseInt(slide.id) === activeSlideIndex && (
                                    <img className="h-[400px] w-full object-cover" src={slide.img} alt="slide_img" />
                                )}
                            </div>
                            <div className="absolute top-44 mx-auto inset-x-1/4">
                                <p className="text-white text-4xl font-inter font-bold tracking-normal leading-none">
                                    {parseInt(slide.id) === activeSlideIndex && slide.text}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* ================ SLIDER DOTS ================ */}
            <div className="flex absolute bottom-12  left-[45%]">
                {sliderData.map((dot, index) => {
                    return (
                        <div className="mr-4" key={dot.id}>
                            <div
                                className={
                                    index === activeSlideIndex
                                        ? "bg-green-300 rounded-full p-2 cursor-pointer"
                                        : "bg-white rounded-full p-2 cursor-pointer"
                                }
                                onClick={() => dispatch(dotSlide(index))}
                            ></div>
                        </div>
                    );
                })}
            </div>
            {/* ================ SLIDER BUTTONS ================ */}
            <div>
                <button
                    className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
                    onClick={() => dispatch(nextSlide(activeSlideIndex + 1))}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
                <button
                    className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300"
                    onClick={() => dispatch(prevSlide(activeSlideIndex - 1))}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Slider