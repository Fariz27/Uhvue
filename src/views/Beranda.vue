<template>
  <div class="beranda">
    <div class="container-scroller">
    <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-md-6 col-lg-6 grid-margin stretch-card">
              <div class="row">
                <div class="col-md-6 col-lg-6 grid-margin stretch-card">
                  <div class="card bg-gradient-primary text-white text-center card-shadow-primary">
                    <div class="card-body">
                      <h6 class="font-weight-normal">Data Siswa</h6>
                      <h2 class="mb-0">{{dataSiswa}}</h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 grid-margin stretch-card">
                  <div class="card bg-gradient-warning text-white text-center card-shadow-warning">
                    <div class="card-body">
                      <h6 class="font-weight-normal">Data Petugas</h6>
                      <h2 class="mb-0">{{dataPetugas}}</h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 grid-margin stretch-card">
                  <div class="card bg-gradient-danger text-white text-center card-shadow-danger">
                    <div class="card-body">
                      <h6 class="font-weight-normal">Data Pelanggaran</h6>
                      <h2 class="mb-0">{{dataPelanggaran}}</h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 grid-margin stretch-card">
                  <div class="card bg-gradient-success text-white text-center card-shadow-success">
                    <div class="card-body">
                      <h6 class="font-weight-normal">Siswa Melanggar Hari Ini</h6>
                      <h2 class="mb-0">{{siswaMelanggarHariIni}}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <h6 class="card-title"><i class="mdi mdi-finance menu-icon"></i> Poin Tertinggi</h6>
                  </div>
                  <div class="list d-flex align-items-center border-bottom pb-3">
                    <div class="wrapper w-100">
                      <p><b>George Bambang Prakoso</b> <span class="badge badge-danger">300</span></p>
                      <small class="text-muted">XI RPL 2</small>
                    </div>
                  </div>
                  <div class="list d-flex align-items-center border-bottom py-3">
                    <div class="wrapper w-100">
                      <p><b>John Fikri Santoso</b> <span class="badge badge-danger">280</span></p>
                      <small class="text-muted">XII TKJ 3</small>                      
                    </div>
                  </div>
                  <div class="list d-flex align-items-center border-bottom py-3">
                    <div class="wrapper w-100">
                      <p><b>Peter Sudarmono Pambudi</b> <span class="badge badge-danger">260</span></p>
                      <small class="text-muted">X RPL 6</small>                      
                    </div>
                  </div>
                  <div class="list d-flex align-items-center border-bottom py-3">
                    <div class="wrapper w-100">
                      <p><b>Nateila Ayu Rahmawati</b> <span class="badge badge-danger">200</span></p>
                      <small class="text-muted">X TKJ 2</small>                      
                    </div>
                  </div>
                  <div class="list d-flex align-items-center pt-3">
                    <div class="wrapper w-100">
                      <p><b>Ahmad Tom Jerry</b> <span class="badge badge-danger">187</span></p>
                      <small class="text-muted">3 hours ago</small>                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  </div>
</template>
<script> 
export default {
  data(){
    return{
      dataSiswa: 0,
      dataPetugas: 0,
      dataPelanggaran: 0,
      siswaMelanggarHariIni: 0,
    }
  },
  methods: {
    getData(){
        var token = this.$cookies.get("user_token");
        let conf = { headers: { "Authorization" : 'Bearer ' + token } };
        this.axios.get('http://127.0.0.1:8001/api/siswa/',conf).then((response) => {
            console.log(response.data);
            this.dataSiswa = response.data.count;
        });
        this.axios.get('http://127.0.0.1:8001/api/petugas/',conf).then((response) => {
            console.log(response.data);
            this.dataPetugas = response.data.count;
        });
        this.axios.get('http://127.0.0.1:8001/api/pelanggaran/',conf).then((response) => {
            console.log(response.data);
            this.dataPelanggaran = response.data.count;
        });
        this.axios.get('http://127.0.0.1:8001/api/pelanggaran/',conf).then((response) => {
            console.log(response.data);
            this.dataPelanggaran = response.data.count;
        });
        this.axios.get('http://127.0.0.1:8001/api/poin/',conf).then((response) => {
            this.siswaMelanggarHariIni = response.data.today;
        });      
    }
  },
  mounted(){
    this.getData();
  }

}
</script>
