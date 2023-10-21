<template>
    <div id="navbar">
        <div class="whole-logo">
            <div class="logo">
                <img src="https://i.postimg.cc/MGrkRjwx/trailblitz-high-resolution-logo-color-on-transparent-background.png"
                    alt="">
            </div>
        </div>
        <div class="menu">
            <ul>
                <li><a href="#product">Products</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#navbar {
    color: white;
    /* width: 100%; */
    height: 4rem;
    padding-top: 0.3rem;
    padding-left: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.whole-logo {
    width: 50%;
}

.logo {
    width: 150px;
    height: 30px;
}

.logo img {
    width: 100%;
    height: 100%;
}

.menu {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.menu ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 5rem;
    list-style: none;
}
.menu ul li a{
    color: white;
    text-decoration: none;
}
</style>