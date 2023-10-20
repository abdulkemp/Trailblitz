<template>
    <div id="home">
        <navbar />
        <div class="slogan">
            <h1>ADVENTURE AWAITS ON TWO WHEELS</h1>
            <button>Shop Now</button>
        </div>
    </div>
    <AboutHome />
    <ProductDisplay />
    <Footer />
</template>

<script>
import navbar from "@/components/navbar.vue"
import AboutHome from "@/components/AboutHome.vue";
import ProductDisplay from "@/components/ProductDisplay.vue";
import Footer from "@/components/Footer.vue";
export default {
    components: {
        navbar,
        AboutHome,
        ProductDisplay,
        Footer,
    }
}
</script>

<style scoped>
#home {
    width: 100%;
    height: 100vh;
    background-image: url(https://i.postimg.cc/Hs67gcxC/josh-nuttall-zk-Vi57-UYHIQ-unsplash.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: black;
    color: white;
}

.slogan {
    width: 50%;
    height: 50%;
    /* border: 2px solid red; */
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    font-size: 15px;
}

.slogan button {
   width: 150px ;
   height: 50px ;
   font-size: 18px;
   background-color: rgb(121, 139, 133);
   border-radius: 15px;
}

.slogan button:hover{
    background-color: rgba(37, 37, 37, 0.685);
    color: white;
    transition-duration: 1.1s;
}
</style>