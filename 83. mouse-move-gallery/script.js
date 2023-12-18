document.addEventListener('DOMContentLoaded',()=>{
    const imgs = document.getElementsByClassName("image");
    let index = 0, last = { x: 0, y: 0 };

    const activate = (image, x, y) => {
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;
        image.style.zIndex = index;
        image.dataset.status = "active";

        last = { x, y };
    }

    const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
    }

    const handleOnMove = e => {
        if(distanceFromLast(e.clientX, e.clientY) > (window.innerWidth / 20)) {
            const lead = imgs[index % imgs.length], tail = imgs[(index - 7) % imgs.length];
            activate(lead, e.clientX, e.clientY);
            if(tail) tail.dataset.status = "inactive";
            index++;
        }
    }
    window.onmousemove = e => handleOnMove(e);
    window.ontouchmove = e => handleOnMove(e.touches[0]);
})