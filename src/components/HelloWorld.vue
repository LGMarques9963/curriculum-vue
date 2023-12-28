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
                          <v-list-item-subtitle v-text="experience.subtitle"></v-list-item-subtitle>

                          <v-list-item-title v-text="experience.title"></v-list-item-title>

                        </v-list-item-content>

                        <v-list-item-action>
                          <v-chip v-if="experience.active" class="ma-2" color="#efe2f9" text-color="#9251f7">
                            Present
                          </v-chip>
                          <v-btn text v-else>
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

              <v-timeline-item class="mb-4" color="grey" small>
                <v-row justify="space-between">
                  <v-col cols="7">
                    Order confirmation email was sent to John Leider (john@vuetifyjs.com).
                  </v-col>
                  <v-col class="text-right" cols="5">
                    15:25 EDT
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item class="mb-4" hide-dot>
                <v-btn class="mx-0">
                  Resend Email
                </v-btn>
              </v-timeline-item>

              <v-timeline-item class="mb-4" color="grey" small>
                <v-row justify="space-between">
                  <v-col cols="7">
                    A $15.00 USD payment was processed on PayPal Express Checkout
                  </v-col>
                  <v-col class="text-right" cols="5">
                    15:25 EDT
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item color="grey" small>
                <v-row justify="space-between">
                  <v-col cols="7">
                    John Leider placed this order on Online Store (checkout #1937432132572).
                  </v-col>
                  <v-col class="text-right" cols="5">
                    15:25 EDT
                  </v-col>
                </v-row>
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
        url: "https://git",
        description: "A Recipes App"
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
        color: 'black',
        icon: 'mdi-apple',
        subtitle: 'Tech Lead',
        title: 'Apple',
        period: 'Oct 2021 - Present',
        active: true,
        location: 'Cupertino, CA',
      },
      {
        color: 'amber',
        icon: 'mdi-gesture-tap-button',
        subtitle: 'Software Engineer',
        title: 'Google',
        period: 'Apr 2016 - Dec 2016',
        active: false,
        location: 'Cupertino, CA',
      },
      {
        color: 'green',
        icon: 'mdi-gesture-tap',
        subtitle: 'Software Engineer',
        title: 'Facebook',
        period: 'Jan 2016 - Apr 2016',
        active: false,
        location: 'Cupertino, CA',
      },
      {
        color: 'blue',
        icon: 'mdi-gesture-swipe-right',
        subtitle: 'Software Engineer',
        title: 'Microsoft',
        period: 'Jun 2015 - Dec 2015',
        active: false,
        location: 'Cupertino, CA',
      },
      {
        color: 'purple',
        icon: 'mdi-gesture-swipe-left',
        subtitle: 'Software Engineer',
        title: 'Amazon',
        period: 'Jun 2014 - Jun 2015',
        active: false,
        location: 'Cupertino, CA',
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
</style>