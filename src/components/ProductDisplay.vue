<template>
    <div id="productDisplay">
        <div class="head">
            <p><span>Bikes</span>
                <br>
                From casual rides through the dirt to the fast lane, we got it all.
            </p>
        </div>
        <div class="container">
            <div class="whole">
                <img src="https://i.postimg.cc/0Nvj1Jsq/rohan-INSR6cq-NP4-unsplash.jpg" alt="">
            </div>
            <div class="second">
                <img src="https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg" alt="">
            </div>
            <div class="third">
                <img src="https://i.postimg.cc/ZR3yJLyV/mikkel-bech-yj-AFnk-Lt-KY0-unsplash.jpg" alt="">
            </div>
        </div>
        <div class="feature">
            <h1>Featured Vehicles</h1>
            <div class="catergory">
                <h2>Motorcycles</h2>
                <div class="container-4">
                    <div class="item-1">
                        <img src="https://i.postimg.cc/0Nvj1Jsq/rohan-INSR6cq-NP4-unsplash.jpg" alt="">
                    </div>
                    <div class="item-2">
                        <img src="https://i.postimg.cc/0Nvj1Jsq/rohan-INSR6cq-NP4-unsplash.jpg" alt="">
                    </div>
                    <div class="item-3">
                        <img src="https://i.postimg.cc/0Nvj1Jsq/rohan-INSR6cq-NP4-unsplash.jpg" alt="">
                    </div>
                </div>
                <div class="see">
                    <button>See More</button>
                </div>
            </div>
            <div class="catergory">
                <h2>Dirt Bikes</h2>
                <div class="container-4">
                    <div class="item-1">
                        <img src="https://i.postimg.cc/0Nvj1Jsq/rohan-INSR6cq-NP4-unsplash.jpg" alt="">
                    </div>
                    <div class="item-2">
                        <img src="https://i.postimg.cc/0Nvj1Jsq/rohan-INSR6cq-NP4-unsplash.jpg" alt="">
                    </div>
                    <div class="item-3">
                        <img src="https://i.postimg.cc/0Nvj1Jsq/rohan-INSR6cq-NP4-unsplash.jpg" alt="">
                    </div>
                </div>
                <div class="see">
                    <button>See More</button>
                </div>
            </div>
            <div class="catergory">
                <h2>Bicycles</h2>
                <div class="container-4">
                    <div class="item-1">
                        <img src="https://i.postimg.cc/0Nvj1Jsq/rohan-INSR6cq-NP4-unsplash.jpg" alt="">
                    </div>
                    <div class="item-2">
                        <img src="https://i.postimg.cc/0Nvj1Jsq/rohan-INSR6cq-NP4-unsplash.jpg" alt="">
                    </div>
                    <div class="item-3">
                        <img src="https://i.postimg.cc/0Nvj1Jsq/rohan-INSR6cq-NP4-unsplash.jpg" alt="">
                    </div>
                </div>
                <div class="see">
                    <button>See More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#productDisplay {
    max-width: 100%;
    height: 100%;
    padding: 3rem;
    /* border: 2px solid red; */
}

.head {
    width: 100%;
    height: 100%;
    /* border: 2px solid black; */
}

span {
    font-size: 50px;
}

p {
    font-size: 20px;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 25px 25px;
    grid-auto-flow: row;
    grid-template-areas:
        "whole second"
        "whole third";
    height: 100%;
    margin-top: 4rem;
}

.whole {
    grid-area: whole;
    border-radius: 15px;
}

.second {
    grid-area: second;
    border-radius: 15px;
}

.third {
    grid-area: third;
    border-radius: 15px;
}

.whole img,
.second img,
.third img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
}


.feature {
    margin-top: 4rem;
    width: 100%;
    height: 100%;
    /* border: 2px solid red; */
    background-color: rgba(218, 214, 214, 0.8); 
    border-radius: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.container-4 {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 25px 25px;
    grid-template-areas:
        "item-1 item-2 item-3";
        display: flex;
    justify-content: center;
    align-items: center;
}

.feature h1 {
    text-align: center;
    font-size: 40px;
}

.feature h2 {
    text-align: center;
    font-size: 30px;
}


.item-1 {
    grid-area: item-1;
    height: 23rem;
    width: 23rem;
}

.item-2 {
    grid-area: item-2;
    height: 23rem;
    width: 23rem;
}

.item-3 {
    grid-area: item-3;
    height: 23rem;
    width: 23rem;
}

.item-1 img,
.item-2 img,
.item-3 img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
}

.see {
    width: 100%;
    height: 3rem;
    /* border: 2px solid red; */
    padding-bottom: 1rem;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.see button {
    width: 120px;
    height: 50px;
    font-size: 18px;
    background-color: rgb(121, 139, 133);
    border-radius: 15px;
}

.see button:hover {
    background-color: rgba(37, 37, 37, 0.685);
    color: white;
    transition-duration: 1.1s;
}
</style>