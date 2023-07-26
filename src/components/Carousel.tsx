import { Button } from "antd";
import { useRef, useState, useEffect, Children } from "react";

// const carouselItems = Array.from({ length: 10 }, (_, index) => index + 1).map((item) =>
//     <div key={item} className="carousel-item text-center relative w-64 h-64 snap-start">
//         <div className="w-64 h-64">{item}</div>
//     </div>
// );

const CarouselItem = ({ children }: any) => {
    return <div className="carousel-item text-center relative w-64 h-64 snap-start">{children}</div>
}


const Carousel = ({ children }: any) => {

    const maxScrollWidth = useRef<number>(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    const arrayChildren = Children.toArray(children);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction: 'prev' | 'next') => {
        if (direction === "prev") {
            return currentIndex <= 0;
        }

        if (direction === "next" && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <>
            <div className="carousel my-12 mx-auto">
                <div className="relative overflow-hidden">
                    <div ref={carousel} className="carousel-container relative flex gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
                        {Children.map(arrayChildren, (child) => {
                            return (
                                <>
                                    <div className="bg-white bordered rounded">
                                        {child}
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
                <div className="nav relative">
                    <Button className="prev" disabled={isDisabled("prev")} onClick={movePrev}>&lt;&lt;</Button>
                    <Button className="next" disabled={isDisabled("next")} onClick={moveNext}>&gt;&gt;</Button>
                </div>
            </div>
        </>
    )
}

export { CarouselItem };
export default Carousel