/* The code is defining an object named `responsive` that contains different breakpoints and
corresponding values for a responsive design. Each breakpoint represents a different screen size
range and has properties such as `breakpoint` (with `max` and `min` values), `items`, and
`slidesToSlide`. These properties define how many items should be displayed and how many items
should be scrolled at a time for each breakpoint. This object can be used to configure the behavior
of a responsive component, such as a carousel or slider, based on the screen size. */
 export const responsive = {
    superLargeDesktop: {
        
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
        slidesToSlide: 3
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1.5
    }
};
