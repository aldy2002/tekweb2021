Vue.createApp({
    data() {
        return {
            message: "Hello Vue",
            header: {
                title: "Ferman Alfiansyah",
                description: "Mahasiswa Program Studi Sistem Informasi Angkatan 2020. Universitas Ahmad Dahlan Yogyakarta.",
                social: {
                    ig: {
                        url: "https://www.instagram.com/arh_cum/",
                    },
                    github: {
                        url: "https://github.com/aldy2002",
                    },
                    line:{
                        url: "https://line.me/id/",
                    }
                }
            },
            about: {
                title: "Aldy Amrullah",
                subtitle: "Sistem Informasi",
                description: "Mahasiswa Universitas Ahmad Dahlan Angkatan 2020. Mata Kuliah Teknologi Website Lanjut.",
            },
            articles: {
                "title": "Excel",
                "title1": "Word",
                "title2": "Editing",
                "title3": "Reading",
                "desc": "Microsoft Excel Indonesia discusses excel formulas, excel functions, VBA excel macros & complete excel learning tips for advanced beginners.",
                "desc1": "A complete Microsoft Word study guide for beginners who want to learn from basic to advanced. The material is accompanied by picture.",
                "desc2": "Create Beautiful 3D Drawings, Graphics, Paintings And Artwork On Your Desktop And iPad. If You Can Dream It, You Can Make It With Photoshop.",
                "desc3": "Reading is an activity in the form of reciting or spelling a piece of writing."
            },

        }
    }
}).mount('#app')