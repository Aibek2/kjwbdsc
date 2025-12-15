* {
    box-sizing: border-box;
}

body {
    background: radial-gradient(circle, #fffcf5 0%, #e2d1c3 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
}

.card-container {
    perspective: 1500px;
}

.card {
    width: 360px;
    height: 520px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card.is-flipped {
    transform: rotateY(180deg);
}

.card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: #fff;
    border-radius: 20px;
    border: 3px solid #d4af37;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 30px;
    text-align: center;
    box-shadow: 0 15px 50px rgba(0,0,0,0.1);
}

/* Ішкі нәзік рамка */
.inner-border {
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border: 1px solid #d4af37;
    border-radius: 12px;
    pointer-events: none;
}

/* Алдыңғы беті */
.card-front {
    z-index: 2;
}

/* Артқы беті */
.card-back {
    transform: rotateY(180deg);
    background: #fffcf5;
}

.title {
    font-size: 0.8rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #888;
    margin: 0;
}

.divider {
    height: 1px;
    width: 60px;
    background: #d4af37;
    margin: 15px 0;
}

.names {
    font-family: 'Great Vibes', cursive;
    font-size: 3.2rem;
    color: #b8962e;
    margin: 10px 0;
    font-weight: 400;
}

.description {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #555;
}

.waiting-text {
    font-family: 'Great Vibes', cursive;
    font-size: 3.5rem;
    color: #b8962e;
    line-height: 1.1;
}

.heart-pulse {
    font-size: 60px;
    animation: pulse 1.5s infinite;
    margin-bottom: 20px;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

button {
    background: #d4af37;
    color: white;
    border: none;
    padding: 14px 40px;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 25px;
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
}

button:hover {
    background: #b8962e;
    transform: translateY(-2px);
}
