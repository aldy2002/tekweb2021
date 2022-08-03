Vue.createApp({
    data() {
        return {
            message: "Hello Vue",
            header: {
                title: "Aldy Amrullah",
                description: "It's a lack of faith that makes people afraid of meeting challenges, and I believed in myself.",
                social: {
                    ig: {
                        url: "https://www.instagram.com/arh_cum/",
                    },
                    github: {
                        url: "https://github.com/aldy2002/AldyTekweb2022",
                    },
                    yt: {
                        url: "https://line.me/id/",
                    }
                }
            },
            about: {
                title: "Aldy Amrullah",
                subtitle: "Sistem Informasi",
                description: "It's a lack of faith that makes people afraid of meeting challenges, and I believed in myself.",
            },
            articles: {
                title: "M.Excel",
                title1: "Ms Word",
                title2: "Editing",
                desc: "1# Tutorial to learn Microsoft Excel Indonesia discusses excel formulas, excel functions, VBA excel macros & complete excel learning tips for advanced beginners.",
                desc1: "A complete Microsoft Word study guide for beginners who want to learn from basic to advanced. The material is accompanied by picture.",
                desc2: "Create Beautiful 3D Drawings, Graphics, Paintings And Artwork On Your Desktop And iPad. If You Can Dream It, You Can Make It With Photoshop.",
            },

        }
    }
}).mount('#app')