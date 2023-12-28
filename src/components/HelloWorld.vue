<template>
  <v-app id="inspire">
    <v-row>
      <v-col cols="auto">

        <navigation-drawer />
      </v-col>
      <v-col>
        <v-main>

          <v-container class="py-8 px-6 content__container" fluid light>
            <v-timeline dense clipped align-top>
              <v-timeline-item class="mb-4" color="#5531A7" icon-color="#5531A7" small>
                <!-- <v-row justify="space-between">
                  <v-col cols="7">
                    This order was archived.
                  </v-col>
                  <v-col class="text-right" cols="5">
                    15:26 EDT
                  </v-col>
                </v-row> -->
                <v-card color="#F7F9FC">
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
                            <v-btn text color="#5531A7" @click = "show = !show">
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

              <v-timeline-item class="mb-4" small>
                <v-row justify="space-between">
                  <v-col cols="7">
                    <v-chip class="white--text ml-0" color="purple" label small>
                      APP
                    </v-chip>
                    Digital Downloads fulfilled 1 item.
                  </v-col>
                  <v-col class="text-right" cols="5">
                    15:25 EDT
                  </v-col>
                </v-row>
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
        url: "https://git",
        description: "An eCommerce System"
      },
    ],
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
    show: false,
  }),
}
</script>

<style scoped>
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