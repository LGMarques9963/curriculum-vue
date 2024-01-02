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
                <span class="tile__text">
                  Latest Projects
                </span>
                <latest-projects />
              </v-timeline-item>

              <v-timeline-item class="mb-4" color="#5531A7" icon-color="#5531A7" small>


                <span class="tile__text">
                  Experience
                </span>

                <experiences />

              </v-timeline-item>

              <v-timeline-item class="mb-4" color="#5531A7" icon-color="#5531A7" small>
                <span class="tile__text">
                  Skills
                </span>
                <skills />
              </v-timeline-item>

              <v-timeline-item class="mb-4" color="#5531A7" icon-color="#5531A7" small>
                <span class="tile__text">
                  Education
                </span>
                <education />


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
import LatestProjects from './LatestProjects.vue';
import Experiences from './Experiences.vue';
import Skills from './Skills.vue';
import Education from './Education.vue';

export default {
  name: 'HelloWorld',
  components: {
    NavigationDrawer,
    LatestProjects,
    Experiences,
    Skills,
    Education,
  },
  data: () => ({
    drawer: null,


    show: false,
  }),
}
</script>

<style>
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
  font-family: Outfit, sans-serif;
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
  font-family: 'DM Sans', sans-serif;
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
  font-family: DM Sans, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.05px;
}

.skill__title {
  color: var(--Gray-Darker, #2E2E48);

  /* Body/Body 2 bold */
  font-family: DM Sans, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 9px;
  /* 128.571% */
}

.skill__card {
  border-radius: 4px 0px 0px 4px;
  background: var(--White, #FFF);
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
  font-family: DM Sans, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 9px;
  /* 128.571% */
}
</style>