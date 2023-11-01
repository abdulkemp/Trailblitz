<template>
    <div id="collection">
        <navbar />
        <div class="collection">
            <div class="head-collect">
                <h1>COLLECTION</h1>
            </div>
            <div class="vehicles">
                <div class="left-vehicles">
                    <div class="cards">
                        <div class="card" v-for="item in items" :key="item.id">
                            <div class="card-head">
                                <img :src="item.image" alt="">
                            </div>
                            <div class="card-body">
                                <div class="text">
                                    <h3>{{ item.prodname }}</h3>
                                    <p>{{ item.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-filter">
                    <div class="side-menu">
                        <ul>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                            <li>
                                <p>Lorem</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import navbar from '@/components/navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    components: {
        navbar,
        Footer
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    prodname: "harley",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 2,
                    prodname: "James",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 3,
                    prodname: "John",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 4,
                    prodname: "harley",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 5,
                    prodname: "James",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 6,
                    prodname: "John",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 7,
                    prodname: "harley",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 8,
                    prodname: "James",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 9,
                    prodname: "John",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 10,
                    prodname: "harley",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 11,
                    prodname: "James",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 12,
                    prodname: "John",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 13,
                    prodname: "harley",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 14,
                    prodname: "James",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 15,
                    prodname: "John",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 16,
                    prodname: "harley",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 17,
                    prodname: "James",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 18,
                    prodname: "John",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 19,
                    prodname: "harley",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 20,
                    prodname: "James",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 21,
                    prodname: "John",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 22,
                    prodname: "harley",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 23,
                    prodname: "James",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                },
                {
                    id: 24,
                    prodname: "John",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "In the world of technology, I started an exciting journey into web development. I loved creating amazing online experiences. What began as curiosity turned into a strong passion."
                }
            ],
        }
    }
}
</script>

<style scoped>
#collection {
    width: 100%;
    height: 100%;
    background-color: black;
}

.collection {
    width: 100%;
    height: 100%;
}

.head-collect {
    color: white;
    max-width: 100%;
    text-align: center;
    font-size: 4rem;
    /* border: 1px solid white; */
    height: 100%;
}

.vehicles {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.left-vehicles,
.right-filter {
    height: 100vh;
    overflow-y: hidden;
    overflow-y: scroll;
    scroll-behavior: smooth;
}

.left-vehicles::-webkit-scrollbar {
    width: 0.1em;
}
.right-filter::-webkit-scrollbar {
    width: 10px;
    border: 1px solid black;
    /* color: #000000; */
    background-color: #000000;
    border-radius: 50px;
}

.left-vehicles {
    min-width: 85%;
    background-color: whitesmoke;
}

.right-filter {
    min-width: 15%;
    background-color: whitesmoke;
}

.cards {
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    color: black;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 8px;
    padding-top: 1rem;
    /* border: 2px solid yellow; */
}

.card {
    width: 32.8%;
    height: 70vh;
    /* border: 2px solid white; */
}

.card-head {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid red; */
}

.card-head img {
    width: 100%;
    height: 100%;
    border-radius: 15px 15px 0 0;
}

.card-body {
    width: 100%;
    height: 30%;
    text-wrap: wrap;
    
    padding-left: 5px;
    /* padding-right: 1rem; */
    /* border: 2px solid green; */
}

.text,
h2,
p {
    width: 95%;
    text-wrap: wrap;
    
}

.side-menu ul {
    /* display: flex; */
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    padding-top: 5px;
    
}

ul li{
    list-style: none;
    width: 100%;
    height: 2.4rem;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

ul li:hover{
    background-color: rgba(0, 0, 0, 0.226);
}

</style>