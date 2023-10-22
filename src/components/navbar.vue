<template>
  <div id="navbar">
    <div class="whole-logo">
      <div class="logo">
        <a href="/home">
          <img
            src="https://i.postimg.cc/MGrkRjwx/trailblitz-high-resolution-logo-color-on-transparent-background.png"
            alt=""
          />
        </a>
      </div>
    </div>
    <div class="menu">
      <ul>
        <li><a href="#product">Products</a></li>
        <li>
          <a href=""><router-link to="/about">About Us</router-link></a>
        </li>
        <li><a href="#contact">Contact Us</a></li>
        <li>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M16 8H17.1597C18.1999 8 19.0664 8.79732 19.1528 9.83391L19.8195 17.8339C19.9167 18.9999 18.9965 20 17.8264 20H6.1736C5.00352 20 4.08334 18.9999 4.18051 17.8339L4.84718 9.83391C4.93356 8.79732 5.80009 8 6.84027 8H8M16 8H8M16 8L16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7L8 8M16 8L16 12M8 8L8 12"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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
.menu ul li a {
  color: white;
  text-decoration: none;
}

.logo img:hover{
  transform: scale(1.1);
  transition-duration: 1.1s;
}

li:hover{
  transform: scale(1.2);
  transition-duration: 1.1s;
}

.menu ul li svg {
  width: 25px;
  height: 25px;
}
</style>
