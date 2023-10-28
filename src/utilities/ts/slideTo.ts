
function easeInOutQuad(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
}

export function slideTo(slider : HTMLDivElement , item : HTMLDivElement,) {
    if (!item || !slider) {
        return;
    }
    
    let change = item.offsetLeft - slider.scrollLeft;
    
    const increment = 5;
    const duration = 200;
    let currentTime = 0;
    let start = slider.scrollLeft;
    
    function slide(currentTime: number) {
        if (!slider || currentTime >= duration) {
            return;
        }
    
        slider.scrollLeft = easeInOutQuad(currentTime, start, change, duration);
        currentTime += increment;
    
        requestAnimationFrame(() => slide(currentTime));
    }
    
    slide(currentTime);
}