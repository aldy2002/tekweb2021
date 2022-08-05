Vue.createApp({
    data() {
        return {
            message: "Hello Vue!",
            header: {},
            about: {},
            articles: [],
        };
    },
    methods: {
        getHeaderData() {
            axios
                .get(
                    "https://raw.githubusercontent.com/aldy2002/tekweb2021/main/assets/js/header.json"
                )
                .then((res) => {
                    console.log(res.data); //melihat respon data pada console browser
                    this.header = res.data; //memperbarui variabel header pada bagian data()
                })
                .catch((error) => {
                    console.log(error); //melihat error jika pengambilan data adalah gagal
                });
        },
        getAboutData() {
            axios
                .get(
                    "https://raw.githubusercontent.com/aldy2002/tekweb2021/main/assets/js/about.json"
                )
                .then((res) => {
                    console.log(res.data); //melihat respon data pada console browser
                    this.about = res.data; //memperbarui variabel header pada bagian data()
                })
                .catch((error) => {
                    console.log(error); //melihat error jika pengambilan data adalah gagal
                });
        },
        getArticlesData() {
            axios
                .get(
                    "https://raw.githubusercontent.com/aldy2002/tekweb2021/main/content/articles.json"
                )
                .then((res) => {
                    console.log(res.data); //melihat respon data pada console browser
                    this.articles = res.data; //memperbarui variabel header pada bagian data()
                })
                .catch((error) => {
                    console.log(error); //melihat error jika pengambilan data adalah gagal
                });
        },

    },
    beforeMount() {
        this.getHeaderData()
        this.getAboutData()
        this.getArticlesData()
    },
}).mount("#app");