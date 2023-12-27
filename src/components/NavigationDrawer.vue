<template>
    <v-navigation-drawer v-model="drawer" class="drawer">
        <div class="mb-4 cover">
            <img class="cover__image" alt="" src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
        </div>

        <div class="drawer__name">Lorran Marques</div>
        <div class="drawer__role pt-4">Full Stack Developer</div>

        <v-divider></v-divider>

        <v-list dark>
            <v-list-item v-for="[icon, text] in links" :key="icon" :prepend-icon="icon" :title="text" link></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { ref } from 'vue'
const links = [
    ['mdi-inbox-arrow-down', 'Inbox'],
    ['mdi-send', 'Send'],
    ['mdi-delete', 'Trash'],
    ['mdi-alert-octagon', 'Spam'],
]

const drawer = ref(null)

export default {
    name: 'NavigationDrawer',
    data: () => ({
        drawer: null,
        links: [
            ['mdi-inbox-arrow-down', 'Inbox'],
            ['mdi-send', 'Send'],
            ['mdi-delete', 'Trash'],
            ['mdi-alert-octagon', 'Spam'],
        ],
    }),

}
</script>

<style scoped>
.text {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4px;
}

.header {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 16px;
    color: #2e2e48;
    font-family: Outfit;
}

.cover {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
}

.cover__image {
    width: 100%;
    height: 80px;
    border-radius: 0px 4px 4px 0px;
    background: lightgray 50% / cover no-repeat;
    /* background-image: url(); */
    background-size: cover;
    background-position: center;
    object-fit: cover;
    position: relative;
}

.drawer {
    width: 256px;
    background: var(--White, #FFF);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

}

.drawer__name {
    align-self: stretch;

    color: var(--Gray-Darker, #2E2E48);

    /* Heading/Heading 1 bold */
    font-family: Outfit;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    /* 125% */
    letter-spacing: -0.02em;
}

.drawer__role {
    align-self: stretch;


    /* Heading/Heading 2 bold */
    font-family: Outfit;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    /* 133.333% */
    letter-spacing: 0.12px;

    background: var(--Gradient-Primary, linear-gradient(90deg, #A478E8 0%, #516CF7 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>