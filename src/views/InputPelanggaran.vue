    <template>

        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
        <div class="main-panel">
            <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body" v-if="renderForm == true">
                        <form>
                            <label>Nama Siswa</label>
                            <select class="custom-select custom-select-lg mb-3">
                                <option v-for="option in siswa" v-bind:key="option.id">{{option.nama_siswa}}</option>
                            </select>
                            <label>Pelanggaran</label>
                            <select class="custom-select custom-select-lg mb-3">
                                <option v-for="option in pelanggaran" v-bind:key="option.id">{{option.nama_pelangggaran}}</option>
                            </select>
                            <label>Tanggal</label>
                            <input type="date">
                        </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <!-- partial -->
        </div>
        <!-- main-panel ends -->
        </div>
    </template>
        <!-- <form v-on:submit="Save">
            <select v-model="siswaa">
                <option disabled value="">Please select one</option>
                <option v-for="option in siswa" v-bind:key="option.id" v-bind:value="option.id">
                    {{ option.nama_siswa}}
                </option>
            </select>
        </form> -->
    <script>
    export default {
        data: function(){
            return{
                siswa:[],
                pelanggaran:[],
                pilihanSiswa: null,
                pilihanPelanggaran: null,
                tanggal: null,
                renderForm: false,
        }
    },
    methods: {
        getData(){
            var token = this.$cookies.get("user_token");
            let conf = { headers: { "Authorization" : 'Bearer ' + token } };
            this.axios.get('http://127.0.0.1:8001/api/siswa/',conf).then((response) => {
                this.siswa = response.data.siswa;
                console.log(response.data);
            });
            this.axios.get('http://127.0.0.1:8001/api/pelanggaran/',conf).then((response) => {
                this.pelanggaran = response.data.pelanggaran;
            });
            this.renderForm = true;
        }
    },
    mounted(){
        this.getData()
    }
}
</script>