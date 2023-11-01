<template>
    <div id="abouthome">
        <div class="abouthome">
            <div class="image-logo">
                <img src="https://i.postimg.cc/mDd9J21R/trailblitz-high-resolution-logo-color-on-transparent-background.png"
                    alt="">
            </div>
            <div class="brief">
                <p>
                    Trailblitz is a premier online destination for discerning bike enthusiasts, offering a curated selection
                    of top-quality bicycles and motorbikes. With a commitment to performance and style, this website
                    showcases a diverse range of two-wheeled vehicles to cater to every rider's needs and preferences.
                    Whether you're a cycling enthusiast or a motorbike aficionado, Trailblitz provides a seamless shopping
                    experience for all your biking needs.</p>
                <div class="amount">
                    <ul>
                        <li id="vehi">
                            <h2>1000+</h2>
                             <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> -->
                            <p>Two-wheel Vehicles</p>
                        </li>
                        <li>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>Quality Assured</p>
                        </li>
                        <li id="text">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <p>
                                Highly Rated Bike Retailer
                            </p>
                        </li>
                    </ul>
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
#abouthome {
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding-bottom: 3rem;
    font-family: 'Lobster Two', sans-serif;
    /* font-weight: bold; */
}

#abouthome .abouthome {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 5rem;
}

.image-logo {
    width: 50rem;
    height: 10rem;
}

.image-logo img {
    width: 100%;
    height: 100%;
}

.brief {
    width: 70%;
    height: 100%;
    text-wrap: wrap;
    text-align: center;
    padding-top: 3rem;
    font-size: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.brief p{
    font-size: 25px;
}

.amount {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* border: 2px solid red; */
}

.amount ul {
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 80%;
}

ul li {
    list-style: none;
    text-wrap: wrap;
    margin-top: 2rem;
    width: fit-content;
}

ul li h2 {
    font-size: 40px;
}


.amount svg {
    width: 45px;
    height: 45px;
    padding-bottom: 12px;
}

#vehi {
    gap: 0;
    /* padding-bottom: 10px; */
    margin-top: 2px;
}




</style>