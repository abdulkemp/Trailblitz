<template>
  <div id="productDisplay">
    <div class="whole-head">
      <div class="head">
        <p>
          <span>Bikes</span>
          <br />
          From casual rides through the dirt to the fast lane, we got it all.
        </p>
      </div>
      <div class="container">
        <div class="whole">
          <img
            src="https://i.postimg.cc/0Nvj1Jsq/rohan-INSR6cq-NP4-unsplash.jpg"
            alt=""
          />
        </div>
        <div class="second">
          <img src="https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg" alt="" />
        </div>
        <div class="third">
          <img
            src="https://i.postimg.cc/ZR3yJLyV/mikkel-bech-yj-AFnk-Lt-KY0-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="feature">
      <!-- <h1>Featured Vehicles</h1> -->
      <div class="catergory">
        <div class="background-img1">
          <h2>Motorcycles</h2>
        </div>

        <div class="container-4">
          <div class="item-1">
            <img
              src="https://i.postimg.cc/0Nvj1Jsq/rohan-INSR6cq-NP4-unsplash.jpg"
              alt=""
            />
          </div>
          <div class="item-2">
            <img
              src="https://i.postimg.cc/0Nvj1Jsq/rohan-INSR6cq-NP4-unsplash.jpg"
              alt=""
            />
          </div>
          <div class="item-3">
            <img
              src="https://i.postimg.cc/0Nvj1Jsq/rohan-INSR6cq-NP4-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="see">
          <button>See More</button>
        </div>
      </div>
      <div class="catergory">
        <div class="background-img2">
          <h2>Dirt Bikes</h2>
        </div>
        <div class="container-4">
          <div class="item-1">
            <img
              src="https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg"
              alt=""
            />
          </div>
          <div class="item-2">
            <img
              src="https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg"
              alt=""
            />
          </div>
          <div class="item-3">
            <img
              src="https://i.postimg.cc/rmFpKXsn/motocross-4468029-1280.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="see">
          <button>See More</button>
        </div>
      </div>
      <div class="catergory">
        <div class="background-img3">
          <h2>Bicycles</h2>
        </div>
        <div class="container-4">
          <div class="item-1">
            <img
              src="https://i.postimg.cc/ZR3yJLyV/mikkel-bech-yj-AFnk-Lt-KY0-unsplash.jpg"
              alt=""
            />
          </div>
          <div class="item-2">
            <img
              src="https://i.postimg.cc/ZR3yJLyV/mikkel-bech-yj-AFnk-Lt-KY0-unsplash.jpg"
              alt=""
            />
          </div>
          <div class="item-3">
            <img
              src="https://i.postimg.cc/ZR3yJLyV/mikkel-bech-yj-AFnk-Lt-KY0-unsplash.jpg"
              alt=""
            />
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
export default {};
</script>

<style scoped>
#productDisplay {
  width: 100%;
  height: 100%;
  /* padding: 3rem; */
  /* border: 2px solid red; */
}

.head {
  width: 100%;
  height: 100%;
  /* margin-left: 3rem; */
  /* margin-right: 3rem; */
  /* border: 2px solid black; */
}

.whole-head {
  max-width: 100%;
  height: 100%;
  padding: 3rem;
  /* padding-left: 3rem;
  padding-right: 3rem; */
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
  flex-wrap: wrap;
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
  background-color: transparent;
}

.background-img1 {
  width: 100%;
  height: 60vh;
  background-image: url(https://i.postimg.cc/Jh8Qz5Z5/lucas-favre-yl-E8yff-Kxk8-unsplash.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 2rem;
}
.background-img2 {
  width: 100%;
  height: 60vh;
  background-image: url(https://i.postimg.cc/fLQH4hT5/powering-offroad-u-Fj-D8-U92h1s-unsplash.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 2rem;
}
.background-img3 {
  width: 100%;
  height: 60vh;
  background-image: url(https://i.postimg.cc/cCzm1qBv/will-gonzalez-u-AK3j-Jr6md4-unsplash.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 2rem;
}

.container-4 {
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 4rem 4rem;
  grid-auto-flow: row;
  grid-template-areas: "item-1 item-2 item-3";
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
  margin-bottom: 1rem;
}

.see button:hover {
  background-color: rgba(37, 37, 37, 0.685);
  color: white;
  transition-duration: 1.1s;
}

.catergory h2{
  width: 100%;
  height: 100%;
  font-size: 15rem;
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
