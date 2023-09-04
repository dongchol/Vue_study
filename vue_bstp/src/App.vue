<template>
  <nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-lg sticky-top">
      <div class="container"> 
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
<!--id값을 햄버거 코드에 data-bs-target과 같게 해야 이 div안에 있는 메뉴를 인식하여 햄버거에 넣는다-->

<!--네비게이션 바 안에 들어가는 메뉴를 꾸며주는 코드-->
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">
                        HOME
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">
                        About
                    </router-link>
                </li>
                <li class="nav-item">
                    <a href="#services" class="nav-link">
                        services
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#gallary" class="nav-link">
                        gallaery
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#cta" class="nav-link">
                        connact
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#find-us" class="nav-link">
                        find us
                    </a>
                </li>
            </ul>

        </div>
      </div>
    </nav>
    <router-view/>
  </nav>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
