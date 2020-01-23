<template>
    <div>
        <div class="container-scroller">
    <div class="horizontal-menu">
      <nav class="navbar top-navbar col-lg-12 col-12 p-0">
        <div class="nav-top flex-grow-1">
          <div class="container d-flex flex-row h-100 align-items-center">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a class="navbar-brand brand-logo" href="index.html"><img src="assets/img/logo.svg"></a>
              <a class="navbar-brand brand-logo-mini" href="index.html"><img src="assets/img/logo.svg"></a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end flex-grow-1">
                <b-nav-item v-if="isLoggedIn" @click="logout" class="nav-link " >Logout</b-nav-item>
            </div>
          </div>
        </div>
      </nav>    
      <nav class="bottom-navbar">
        <div class="container">
          <ul class="nav page-navigation">
            <li class="nav-item">
                <b-nav-item href="/beranda" class="menu-title">Beranda</b-nav-item>
            </li>
            <li class="nav-item">
                <b-nav-item href="/petugas" class="menu-title">Petugas</b-nav-item>
            </li>
            <li class="nav-item">
                <b-nav-item href="/datasiswa" class="menu-title">Data Siswa</b-nav-item>
            </li>
            <li class="nav-item">
                <b-nav-item href="/pelanggaran" class="menu-title">Pelanggaran</b-nav-item>
            </li>
            <li class="nav-item">
                <b-nav-item href="/inputpelanggaran" class="menu-title">Input Pelanggaran</b-nav-item>
            </li>
            <li class="nav-item">
                <b-nav-item href="/poin" class="menu-title">Poin Siswa</b-nav-item>             
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: "navbar",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      let conf = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Authorization")
        }
      };
      let form = new FormData();
      this.axios
        .post("/logout", form, conf)
        .then(response => {
          if (response.data.logged === false || response.data.status === 0) {
            this.$store.commit("logout");
            localStorage.removeItem("Authorization");
            this.$router.push({ name: "login" });
          }
        })
        .catch(error => {});
    }
  }
};
</script>