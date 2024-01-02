<template>
  <v-app id="inspire" class="main__background">
    <v-row>
      <v-col cols="auto">

        <navigation-drawer />
      </v-col>
      <v-col>
        <v-main class="main__background">

          <v-container class="py-8 px-6 content__container" fluid light>
            <v-timeline dense clipped align-top>
              <v-timeline-item class="mb-4" color="#5531A7" icon-color="#5531A7" small>
                <v-card color="#F7F9FC" elevation="0">
                  <v-card-title><span class="tile__text">
                      Latest Projects
                    </span>
                  </v-card-title>
                  <v-container fluid>
                    <v-row dense>
                      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                        <v-card>
                          <v-img :src="card.src" class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                            <v-card-title>{{ card.title }}</v-card-title>
                          </v-img>

                          <v-card-actions>
                            <v-btn text color="#5531A7" @click="show = !show">
                              DESCRIPTION
                            </v-btn>
                            <v-spacer></v-spacer>

                            <v-btn text :href="card.url" target="_blank">
                              VIEW ON GITHUB
                              <v-icon right>mdi-github</v-icon>
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                            <div v-show="show">
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
                </v-card>
              </v-timeline-item>

              <v-timeline-item class="mb-4" color="#5531A7" icon-color="#5531A7" small>
                <v-card color="#F7F9FC" elevation="0">
                  <v-card-title><span class="tile__text">
                      Experience
                    </span></v-card-title>
                  <v-container fluid>
                    <v-list subheader two-line>
                      <v-list-item v-for="experience in experiences" :key="experience.title"
                        :class="{ 'active-item': experience.active }">
                        <v-list-item-avatar>
                          <v-icon :class="experience.color" dark>
                            {{ experience.icon }}
                          </v-icon>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-subtitle>{{ experience.subtitle }}</v-list-item-subtitle>

                          <v-list-item-title>{{ experience.title }}</v-list-item-title>

                        </v-list-item-content>

                        <v-list-item-action>
                          <v-chip v-if="experience.active" class="ma-2" color="#efe2f9" text-color="#9251f7">
                            Present
                          </v-chip>
                          <v-btn text>
                            <v-icon color="grey lighten-1" size="12" left>mdi-calendar</v-icon>
                            <span class="experience__period">{{ experience.period }}</span>
                          </v-btn>
                          <v-btn text>
                            <v-icon color="grey lighten-1" size="12" left>mdi-map-marker</v-icon>
                            <span class="experience__location">{{ experience.location }}</span>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>
                  </v-container>
                </v-card>
              </v-timeline-item>

              <v-timeline-item class="mb-4" color="#5531A7" icon-color="#5531A7" small>
                <v-card color="#F7F9FC" elevation="0">
                  <v-card-title><span class="tile__text">
                      Skills
                    </span></v-card-title>
                  <v-container fluid>
                    <v-row dense>
                      <v-col v-for="skill in skills" :key="skill.title" cols="12">
                        <v-card color="#F7F9FC" elevation="0">
                          <v-card-title><span class="skill__title">{{ skill.title }}</span></v-card-title>

                          <v-card-text>
                            <v-row>
                              <v-col v-for="item in skill.skills" :key="item.name" cols="3">
                                <v-card class="skill__card" elevation="0" color="#F7F9FC">
                                  <v-row align="center" class="spacer" no-gutters>
                                    <v-col>
                                      <v-avatar size="34px" color="#E1E7FE" class="ml-4">
                                        <v-icon :color="item.color" size="24px">{{ item.icon }}</v-icon>
                                      </v-avatar>
                                    </v-col>

                                    <v-col cols="auto">
                                      <span v-html="item.name" class="skill__text mx-3"></span>
                                    </v-col>
                                  </v-row>
                                </v-card>
                              </v-col>
                            </v-row>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>

              <v-timeline-item class="mb-4" color="#5531A7" icon-color="#5531A7" small>
                <v-card color="#F7F9FC" elevation="0">
                  <v-card-title><span class="tile__text">
                      Education
                    </span></v-card-title>
                  <v-container fluid>
                    <v-list subheader two-line>
                      <v-list-item v-for="e in education" :key="e.title">
                        <v-list-item-avatar>
                          <v-icon color="#5531A7" size="24px">mdi-school</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-subtitle>{{ e.subtitle }}</v-list-item-subtitle>
                          <v-list-item-title>{{ e.title }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-btn text>
                            <v-icon color="grey lighten-1" size="12" left>mdi-calendar</v-icon>
                            <span class="experience__period">{{ e.period }}</span>
                          </v-btn>
                          <v-btn text>
                            <v-icon color="grey lighten-1" size="12" left>mdi-map-marker</v-icon>
                            <span class="experience__location">{{ e.location }}</span>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>
                  </v-container>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-container>
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import NavigationDrawer from './NavigationDrawer.vue'
export default {
  name: 'HelloWorld',
  components: {
    NavigationDrawer,
  },
  data: () => ({
    cards: [
      {
        title: 'Curriculum Vitae',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 12,
        url: "https://git",
        description: "A Curriculum WebPage"
      },
      {
        title: 'Recipes App',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 6,
        url: "https://github.com/LGMarques9963/api-food-vue",
        description: "Recipes App is a front-end project developed for Vue.js learning purposes. It utilizes Vue.js, Vuetify, Axios, and VueRouter to create a responsive application. Users can explore and search for recipes based on cuisine, ingredients, and name, with detailed views showcasing preparation steps. Enjoy a seamless experience with this Vue.js-powered recipe app! 🍲"
      },
      {
        title: 'eCommerce System',
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        flex: 6,
        url: "https://github.com/LGMarques9963/FDS-TF-Sistema-de-Vendas",
        description: "A comprehensive sales system developed as the final project for the Software Development Fundamentals course. The backend, powered by Spring Boot, leverages Java and Maven for robust API functionalities, including client and order management. The frontend, designed with Vue.js, offers an intuitive user interface for seamless interaction. Key features encompass client and order handling, product management, and insightful statistics generation. The combination of Spring Boot and Vue.js showcases proficiency in backend development and frontend design, reflecting a well-rounded skill set in Java, web development, and RESTful API implementation."
      },
    ],
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
    experiences: [
      {
        color: 'green',
        icon: 'mdi-briefcase',
        subtitle: 'Technical Support Analyst Jr.',
        title: 'PagBrasil',
        period: 'Oct 2021 - ',
        active: true,
        location: 'Porto Alegre, RS',
      },
      {
        color: 'amber',
        icon: 'mdi-gesture-tap-button',
        subtitle: 'IT Intern',
        title: 'CSN',
        period: 'Apr 2016 - Dec 2016',
        active: false,
        location: 'Volta Redonda, RJ',
      },
    ],
    skills: [
      {
        title: 'Frontend',
        skills: [
          {
            name: 'Vue.js',
            icon: 'mdi-vuejs',
            color: '#41B883',
          },
          {
            name: 'HTML',
            icon: 'mdi-language-html5',
            color: '#E34F26',
          },
          {
            name: 'CSS',
            icon: 'mdi-language-css3',
            color: '#1572B6',
          },
          {
            name: 'JavaScript',
            icon: 'mdi-language-javascript',
            color: '#F7DF1E',
          },
        ],
        icon: 'mdi-language-javascript',
        color: '#F7DF1E',
      },
      {
        title: 'Backend',
        skills: [
          {
            name: 'Java',
            icon: 'mdi-language-java',
            color: '#007396',
          },
          {
            name: 'Spring Boot',
            icon: 'spring',
            color: '#6DB33F',
          },
          {
            name: 'PHP',
            icon: 'mdi-language-php',
            color: '#777BB4',
          },
          {
            name: 'Python',
            icon: 'mdi-language-python',
            color: '#3776AB',
          },
          {
            name: 'Django',
            icon: 'django24',
            color: '#092E20',
          },
        ],
        icon: 'mdi-code-tags',
        color: '#516CF7',
      },
      {
        title: 'Database',
        skills: [
          {
            name: 'MySQL',
            icon: 'mdi-database',
            color: '#4479A1',
          },
          {
            name: 'PostgreSQL',
            icon: 'mdi-database',
            color: '#336791',
          },
          {
            name: 'Oracle',
            icon: 'mdi-database',
            color: '#F80000',
          },
          {
            name: 'MongoDB',
            icon: 'mdi-database',
            color: '#47A248',
          },
        ],
        icon: 'mdi-database',
        color: '#4479A1',
      },
      {
        title: 'DevOps',
        skills: [
          {
            name: 'Docker',
            icon: 'mdi-docker',
            color: '#2496ED',
          },
          {
            name: 'AWS',
            icon: 'mdi-aws',
            color: '#FF9900',
          },
          {
            name: 'Azure',
            icon: 'mdi-microsoft-azure',
            color: '#0089D6',
          },
        ],
      },
      {
        title: 'Tools',
        skills: [
          {
            name: 'Git',
            icon: 'mdi-git',
            color: '#F05032',
          },
          {
            name: 'GitHub',
            icon: 'mdi-github',
            color: '#181717',
          },
          {
            name: 'GitLab',
            icon: 'mdi-gitlab',
            color: '#FCA121',
          },
          {
            name: 'Jira',
            icon: 'mdi-jira',
            color: '#0052CC',
          },
        ],
      },
    ],
    education: [
      {
        title: 'Pontifícia Universidade Católica do Rio Grande do Sul',
        subtitle: 'Bachelor of Science - BS, Computer Science',
        period: '2022-2026',
        location: 'Porto Alegre, RS',
      },
      {
        title: 'Escola Técnica Pandiá Calógeras',
        subtitle: 'Técnico em Informática',
        period: '2014 - 2016',
        location: 'Volta Redonda, RJ',
      },
    ],
    show: false,
  }),
}
</script>

<style scoped>
.main__background {
  background: var(--Gray-Lightest-2, #F7F9FC) !important;

}

.main__container {
  display: flex;
  flex-direction: row;
  background: var(--Gray-Lightest-2, #F7F9FC);
  height: auto;
}

.content__container {
  flex: 1;
}

.tile__text {
  color: var(--Gray-Darker, #2E2E48) !important;

  /* Heading/Heading 2 bold */
  font-family: Outfit;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  /* 133.333% */
  letter-spacing: 0.12px;
}

.active-item {
  border-radius: 4px 4px 0px 0px;
  background: var(--Primary-Lightest, #F8F2FC);
}

.experience__period {
  color: var(--Gray-Dark, #47516B);

  /* Body/Caption 1 */
  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 8px;
  /* 133.333% */
  letter-spacing: 0.06px;
}

.experience__location {
  color: var(--Gray-Default, #79819A);

  /* Body/Caption 2 */
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.05px;
}

.skill__title {
  color: var(--Gray-Darker, #2E2E48);

  /* Body/Body 2 bold */
  font-family: DM Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 9px;
  /* 128.571% */
}

.skill__card {
  border-radius: 4px 0px 0px 4px;
  background: var(--White, #FFF);
  /* border: 1px solid var(--Gray-Light, #E4E7EB);
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04); */
  display: flex;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
  align-self: stretch;
}

.skill__text {
  color: var(--Gray-Darker, #2E2E48);

  /* Body/Body 2 bold */
  font-family: DM Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 9px;
  /* 128.571% */
}
</style>