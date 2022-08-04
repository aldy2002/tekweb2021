let apiUrl = "https://myapi.ruang-ekspresi.id/index.php/";

Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        header: {},
        articles: []
      };
    },
    methods:{    
        getHeaderData()
        {
          axios
            .get("https://raw.githubusercontent.com/aldy2002/AldyTekweb2022/main/assets/js/header.json"

            )
            .then((res) => {              
              this.header = res.data;
              this.getArticles();
            })
            .catch((error) => {
              console.log(error);
            });
        },
        getAboutData()
        {
          axios
            .get("https://raw.githubusercontent.com/aldy2002/AldyTekweb2022/main/assets/js/about.json"

            )
            .then((res) => {              
              this.about = res.data;
              this.getAbout();
            })
            .catch((error) => {
              console.log(error);
            });
        },
        getArticles()
        {
            axios
            .get(
              "https://raw.githubusercontent.com/aldy2002/AldyTekweb2022/main/content/articles.json"
            )
            .then((res) => {              
              this.articles = res.data;
            })
            .catch((error) => {
              console.log(error);
            });
        }
    },
    beforeMount() {
        this.getHeaderData()
    }
  }).mount("#app");