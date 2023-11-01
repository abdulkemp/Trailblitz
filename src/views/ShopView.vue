<template>
    <div id="shop">
        <navbar />
        <header>
            <div class="searching">

            </div>
            <div class="label">
                <h1>Newest Listings</h1>
            </div>
            <div class="products">
                <div class="whole-side">
                    <div class="side-bar">

                    </div>
                    <div class="side-bar">

                    </div>
                </div>
                <div class="wrapper">
                    <div class="cards" v-for="item in items" :key="item.id">
                        <div class="card">
                            <div class="img">
                                <img :src="item.image" alt="">
                            </div>
                            <div class="first-text">
                                <div class="title">
                                    <p>{{ item.prodname }}</p>
                                </div>
                                <div class="price">
                                    <p>{{ item.prodname }}</p>
                                </div>
                            </div>
                            <div class="second-text">
                                <p>{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
    <Footer />
</template>

<script>
import navbar from "@/components/navbar.vue"
import Footer from "@/components/Footer.vue"
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
                    desc: "Lorem fghhjkk;kkgfdhhghj fgfxggfhihugykfydthdxfjfgfkghlkhjl; gfhjkglhu;jj kflgh;ijhlghkhhcfhvhj kliufcgfhg,hjjhikujfgcgvhbj"
                },
                {
                    id: 2,
                    prodname: "James",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "Lorem fghhjkk;kkgfdhhghj fgfxggfhihugykfydthdxfjfgfkghlkhjl; gfhjkglhu;jj kflgh;ijhlghkhhcfhvhj kliufcgfhg,hjjhikujfgcgvhbj"
                },
                {
                    id: 3,
                    prodname: "John",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "Lorem fghhjkk;kkgfdhhghj fgfxggfhihugykfydthdxfjfgfkghlkhjl; gfhjkglhu;jj kflgh;ijhlghkhhcfhvhj kliufcgfhg,hjjhikujfgcgvhbj"
                },
                {
                    id: 4,
                    prodname: "harley",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "Lorem fghhjkk;kkgfdhhghj fgfxggfhihugykfydthdxfjfgfkghlkhjl; gfhjkglhu;jj kflgh;ijhlghkhhcfhvhj kliufcgfhg,hjjhikujfgcgvhbj"
                },
                {
                    id: 5,
                    prodname: "James",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "Lorem fghhjkk;kkgfdhhghj fgfxggfhihugykfydthdxfjfgfkghlkhjl; gfhjkglhu;jj kflgh;ijhlghkhhcfhvhj kliufcgfhg,hjjhikujfgcgvhbj"
                },
                {
                    id: 6,
                    prodname: "John",
                    image: "https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg",
                    desc: "Lorem fghhjkk;kkgfdhhghj fgfxggfhihugykfydthdxfjfgfkghlkhjl; gfhjkglhu;jj kflgh;ijhlghkhhcfhvhj kliufcgfhg,hjjhikujfgcgvhbj"
                }
            ],
        }
    }

}
</script>

<style scoped>
#shop {
    max-width: 100%;
    height: 100%;
}

#navbar {
    background-color: black;
    color: black;
}

.searching {
    width: 100%;
    height: 7rem;
    background-color: rgb(61, 61, 60);
}

.products {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 2rem;
    margin-bottom: 5rem;
}

.whole-side {
    /* width: 100%; */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}

.side-bar {
    width: 15rem;
    height: 15rem;
    border: 2px solid black;
    border-radius: 15px;
}

.label {
    width: 100%;
    text-align: center;
    font-size: 25px;
}

.wrapper {
    /* width: 50%; */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    /* border: 2px solid red; */
}

.cards {
    width: 100%;
    height: 100%;
    gap: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.card {
    width: 100%;
    height: 17rem;
    border-radius: 15px;
    border: 2px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-auto-columns: 1fr;
    gap: 1rem 1rem;
    grid-auto-flow: row;
    grid-template-areas:
        "img first-text"
        "second-text second-text";
    padding: 1rem;
    padding-bottom: 2rem;
}

.img {
    grid-area: img;
    width: 20rem;
    height: 11rem;
    border-radius: 15px;
}

.img img {
    width: 100%;
    border-radius: 15px;
    height: 100%;
}

.first-text {
    grid-area: first-text;
    /* border: 2px solid red; */
    width: 100%;
    height: 11rem;
    border-radius: 15px;
}

.second-text {
    grid-area: second-text;
    width: 100%;
    height: 100%;
    border-radius: 15px;
}
</style>