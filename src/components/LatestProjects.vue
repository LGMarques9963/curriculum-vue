<template>
    <v-container fluid>
        <v-row dense>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                <v-card :color="cardColor">
                    <v-img :src="card.src" class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                        <v-card-title>{{ card.title }}</v-card-title>
                    </v-img>

                    <v-card-actions>
                        <v-btn text color="#8361d1" @click="card.show = !card.show">
                            DESCRIPTION
                            <v-icon v-if="!card.show" right>mdi-chevron-down</v-icon>
                            <v-icon v-else right>mdi-chevron-up</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>

                        <v-btn text :href="card.url" target="_blank">
                            VIEW ON GITHUB
                            <v-icon right>mdi-github</v-icon>
                        </v-btn>

                        <v-btn text :href="card.demo" target="_blank">
                            LIVE DEMO
                            <v-icon right>mdi-open-in-new</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="card.show">
                            <v-divider></v-divider>

                            <v-card-text>
                                {{ card.description }}
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'LatestProjects',
    data: () => ({
        cards: [
            {
                title: 'Curriculum Vitae',
                src: require('../assets/cv.jpeg'),
                flex: 12,
                url: "https://github.com/LGMarques9963/curriculum-vue.git",
                demo: "https://happy-island-05692bd10.4.azurestaticapps.net",
                description: "Curriculum Vitae is a dynamic Vue.js and Vuetify-powered web application that functions as a comprehensive resume. Showcasing my latest projects, professional experience, skills, education, and contact details, this page provides an interactive and aesthetically pleasing overview of my professional journey. Leveraging Vue.js for seamless interactivity and Vuetify for a polished material design, it ensures a responsive and visually appealing presentation of my skills and accomplishments. Explore my CV effortlessly and reach out easily through the provided contact information. 📄✨",
                show: false,
            },
            {
                title: 'Recipes App',
                src: require('../assets/recipe.jpeg'),
                flex: 6,
                url: "https://github.com/LGMarques9963/api-food-vue",
                demo: "https://calm-smoke-0ceaaed10.4.azurestaticapps.net/#/",
                description: "Recipes App is a front-end project developed for Vue.js learning purposes. It utilizes Vue.js, Vuetify, Axios, and VueRouter to create a responsive application. Users can explore and search for recipes based on cuisine, ingredients, and name, with detailed views showcasing preparation steps. Enjoy a seamless experience with this Vue.js-powered recipe app! 🍲",
                show: false,
            },
            {
                title: 'eCommerce System',
                src: require('../assets/ecommerce.jpeg'),
                flex: 6,
                url: "https://github.com/LGMarques9963/FDS-TF-Sistema-de-Vendas",
                demo: "",
                description: "A comprehensive sales system developed as the final project for the Software Development Fundamentals course. The backend, powered by Spring Boot, leverages Java and Maven for robust API functionalities, including client and order management. The frontend, designed with Vue.js, offers an intuitive user interface for seamless interaction. Key features encompass client and order handling, product management, and insightful statistics generation. The combination of Spring Boot and Vue.js showcases proficiency in backend development and frontend design, reflecting a well-rounded skill set in Java, web development, and RESTful API implementation.",
                show: false,
            },
        ],
        show: false,
    }),
    computed: {
        dark() {
            return this.$vuetify.theme.dark
        },
        cardColor() {
            return this.dark ? '#1d1d2f' : ''
        },

    },

    
}
</script>