<template>
    <div id="collection">
        <navbar />
        <div class="collection">
            <div class="head-collect">
                <h1>COLLECTION</h1>
            </div>
            <div class="vehicles">
                <div class="left-vehicles">
                    <p v-if="loading">Loading…</p>
                    <BaseAlert v-else-if="error" type="error" title="Couldn't load the collection" :message="error" :show="true" />
                    <p v-else-if="items.length === 0">No products yet.</p>
                    <div class="cards">
                        <div class="card" v-for="item in items" :key="item.id">
                            <div class="card-head">
                                <img :src="item.image_url" :alt="item.name">
                            </div>
                            <div class="card-body">
                                <div class="text">
                                    <h3>{{ item.name }}</h3>
                                    <p>{{ item.description }}</p>
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
import navbar from "@/components/navbar.vue"
import Footer from "@/components/Footer.vue"
import { getProducts } from "@/services/api"

export default {
    components: {
        navbar,
        Footer
    },
    data() {
        return {
            items: [],
            loading: true,
            error: ""
        }
    },
    async created() {
        try {
            this.items = await getProducts("collection")
        } catch (err) {
            this.error = err.message
        } finally {
            this.loading = false
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
/* #collection {
    width: 100%;
    height: 100%;
    background-color: black;
} */

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