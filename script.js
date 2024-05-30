let currentIndex = 0;

function showProduct(index) {
    const products = document.querySelectorAll('.product');
    products.forEach((product, i) => {
        product.style.transform = `translateX(-${index * 100}%)`;
    });
}

function autoSwipe() {
    const products = document.querySelectorAll('.product');
    currentIndex = (currentIndex + 1) % products.length;
    showProduct(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(autoSwipe, 3000);
});