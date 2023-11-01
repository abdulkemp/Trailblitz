<template>
    <div id="contact">
        <navbar />
        <div class="contact">
            <div class="left-form">
                <form action="" method="POST">
                    <div class="form">
                        <div class="form-group1">
                            <input type="text" class="form-control" id="name" name="name">
                            <label for="input">Name</label>
                        </div>
                        <div class="form-group2">
                            <input type="email" class="form-control" id="email" name="email">
                            <label for="input">Email</label>
                        </div>
                        <div class="form-group3">
                            <input type="text" class="form-control" id="subject" name="subject">
                            <label for="input">Subject</label>
                        </div>
                        <div class="form-group4">
                            <input type="text" class="form-control" id="number" name="number">
                            <label for="input">Phone Number</label>
                        </div>
                        <div class="form-group5">
                            <textarea class="form-control" id="message" name="message"></textarea>
                            <label for="input">Message</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div class="right-map">
                <div class="right-text">
                    <p>Where to find us</p>
                </div>
                <div class="map">
                    <div class="mapouter">
                        <div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0"
                                marginwidth="0"
                                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=cape town&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a
                                href="https://connectionsgame.org/">Connections Unlimited</a></div>
                    </div>
                </div>
                <div class="contact-no">
                    <ul>
                        <li>
                            <h3>
                                Business Enquiries
                            </h3>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Hello@Trailblitz.io</a>
                            <p>+27 72 869 7458</p>
                        </li>
                        <li>
                            <h3>
                                Career Information
                            </h3>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Career@Trailblitz.io</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import navbar from "@/components/navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
    components: {
        navbar,
        Footer
    }
}
</script>

<style scoped>
#contact {
    width: 100%;
    height: 100%;
    background-color: rgb(61, 61, 60);
}

#navbar {
    background-color: black;
    color: black;
}

.map {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mapouter {
    position: relative;
    text-align: right;
    width: 400px;
    height: 100%;
}

.gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 400px;
    height: 100%;
}

.gmap_iframe {
    width: 400px !important;
    height: 100% !important;
}

.contact {
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

form {
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
}


.form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    gap: 2rem 2rem;
    grid-auto-flow: row;
    grid-template-areas:
        "form-group1 form-group2"
        "form-group3 form-group4"
        "form-group5 form-group5";
    width: 90%;
    height: 100%;
}


.form-group1 {
    grid-area: form-group1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.form-group2 {
    grid-area: form-group2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.form-group3 {
    grid-area: form-group3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.form-group4 {
    grid-area: form-group4;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.form-group5 {
    grid-area: form-group5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}


.left-form {
    width: 50%;
    height: 100%;
}

.right-map {
    width: 50%;
    height: 80vh;
    padding: 2rem;
}

.right-text {
    width: fit-content;
    height: 20%;
    font-size: 5rem;
    padding-left: 3rem;
}

.right-text p {
    display: flex;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
}

.map,
.contact-no {
    width: 100%;
    height: 35%;
    padding-bottom: 2rem;
}

.contact-no {
    display: flex;
    justify-content: center;
    align-items: start;
}

.contact-no ul{
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
}

.contact-no ul li{
    list-style: none;
    text-transform: uppercase;
}
.contact-no ul li a{
    text-decoration: none;
    color: white;
    text-transform: uppercase;
}

.contact-no ul {
    display: flex;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
}


.form-group1,
.form-group2,
.form-group3,
.form-group4,
.form-group5 {
    position: relative;
    height: 80px;
    line-height: 80px;
}


input {
    padding: 10px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid black;
    width: 100%;
    color: #eee;
    font-size: 12px;
    position: absolute;
    transition: 0.2s ease;
    outline: none;
    z-index: 1111;
}

textarea {
    padding: 10px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid black;
    width: 100%;
    color: #eee;
    font-size: 12px;
    position: absolute;
    transition: 0.2s ease;
    outline: none;
    z-index: 1111;
}

label {
    position: relative;
    float: left;
    width: 100%;
    font-weight: bolder;
    font-size: 18px;
    transition: all 0.2s ease;
    pointer-events: none;
}

input:focus~label {
    top: -28px;
    left: 5px;
    font-size: 13px;
}

textarea:focus~label {
    top: -28px;
    left: 5px;
    font-size: 13px;
}

textarea:active~label {
    top: -28px;
    left: 5px;
    font-size: 13px;
}


form button {
    width: 150px;
    height: 40px;
    font-size: 18px;
    background-color: rgb(121, 139, 133);
    border-radius: 15px;
}

form button:hover {
    background-color: rgba(37, 37, 37, 0.685);
    color: white;
    transition-duration: 1.1s;
}
</style>