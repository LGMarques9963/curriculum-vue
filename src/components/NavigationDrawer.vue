<template>
    <v-navigation-drawer v-model="drawer" :class="dark ? 'drawer__dark' :  'drawer'" width="300" :color = "dark ? '#2E2E48' : '#FFF'">
        <div class="content">
            
            <div class="cover">
                <img class="cover__image" alt="" src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" />
            </div>
            <div class="container">
                
                <div :class="dark ? 'drawer__name__dark' : 'drawer__name'">Lorran Marques</div>
                <div class="drawer__role">Full Stack Developer</div>
                
                <div class="divider">
                    <div class="divider1" />
                </div>
                
                <div :class="dark ? 'infos__dark' : 'infos'">
                    <div class="info__text">{{ $vuetify.lang.t('$vuetify.contact') }}</div>
                    <v-list shaped>
                        <v-list-item v-for="(item, i) in basic_info" :key="i">
                            <div class="row pt-4">
                                <v-list-item-icon>
                                    <v-avatar :color="dark ? '#2E2E48' : '#e2e6ee'" size="32">
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </v-avatar>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="info__text">
                                        {{ $vuetify.lang.t(item.header) }}
                                    </v-list-item-subtitle>
                                    <v-list-item-title :class="dark ? 'info__header__dark' : 'info__header'">
                                        <a :href="item.url" target="_blank" :class="dark ? 'info__header__dark no_underline' : 'info__header no_underline'">
                                            {{ $vuetify.lang.t(item.text) }}
                                        </a></v-list-item-title>
                                </v-list-item-content>
                            </div>
                        </v-list-item>
                    </v-list>
                </div>

                <div class="divider">
                    <div class="divider1" />
                </div>
                <div :class="dark ? 'infos__dark' : 'infos'">
                    <div class="info__text">{{ $vuetify.lang.t('$vuetify.socials') }}</div>
                    <v-list shaped>
                        <v-list-item v-for="(item, i) in socials" :key="i">
                            <div class="row pt-4">
                                <v-list-item-icon>
                                    <v-avatar :color="dark ? '#2E2E48' : '#e2e6ee'" size="32">
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </v-avatar>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="info__text">
                                        {{ item.header }}
                                    </v-list-item-subtitle>
                                    <v-list-item-title :class="dark ? 'info__header__dark' : 'info__header'">
                                        <a :href="item.url" target="_blank" :class="dark ? 'info__header__dark no_underline' : 'info__header no_underline'">
                                            {{ item.text }}
                                        </a>
                                    </v-list-item-title>
                                </v-list-item-content>
                            </div>
                        </v-list-item>
                    </v-list>
                </div>
                
                <div class="divider">
                    <div class="divider1" />
                </div>
                <div :class="dark ? 'infos__dark' : 'infos'">
                    <div class="info__text">{{ $vuetify.lang.t('$vuetify.languages') }}</div>
                    <v-list shaped>
                        <v-list-item v-for="(item, i) in languages" :key="i">
                            <div class="row pt-4">
                                <v-list-item-icon>
                                    <span :class="item.icon"></span>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title :class="dark ? 'info__header__dark' : 'info__header'">
                                        {{ $vuetify.lang.t(item.text) }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="info__text">
                                        {{ $vuetify.lang.t(item.header) }}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </div>
                        </v-list-item>
                    </v-list>
                </div>

            </div>
        </div>
    </v-navigation-drawer>
</template>

<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";

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
        basic_info: [
            { 
                text: 'lorrangmarques@gmail.com', 
                icon: 'mdi-email-outline',
                header: '$vuetify.email',
                url: "mailto:lorrangmarques@gmail.com" },
            { 
                text: 'lgmarques.netlify.app', 
                icon: 'mdi-link-variant',
                header: '$vuetify.website',
                url: "https://lgmarques.netlify.app" },
            { 
                text: 'Porto Alegre, Brazil', 
                icon: 'mdi-map-marker',
                header: '$vuetify.address'
            }
        ],
        socials: [
            { text: '@lorrangmarques', icon: 'mdi-linkedin', header: 'LinkedIn', url: "https://www.linkedin.com/in/lgmarques/" },
            { text: '@LGMarques9963', icon: 'mdi-github', header: 'GitHub', url: "https://github.com/LGMarques9963" },
            { text: '@lorrangmarques', icon: 'mdi-instagram', header: 'Instagram' }
        ],
        languages: [
            { text: '$vuetify.portuguese', icon: 'fi fi-br', header: '$vuetify.levelNative' },
            { text: '$vuetify.english', icon: 'fi fi-gb', header: '$vuetify.levelFluent' },
            { text: '$vuetify.spanish', icon: 'fi fi-es', header: '$vuetify.levelAdvanced' },
        ],
    }),
    computed: {
        dark() {
            return this.$vuetify.theme.dark
        },
    },

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
    font-family: Outfit, sans-serif;
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
    position: relative;
    border-radius: 0px 8px 8px 0px;
    width: 300px;
    height: 120px;
    background: lightgray 50% / cover no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: cover;
}

.drawer {
    width: 256px;
    background: var(--White, #FFF);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    height: 100%;
}

.drawer__dark {
    width: 256px;
    background: var(--Gray-Darker, #2E2E48);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    height: 100%;

}

.content {
    padding: 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    top: 0px;
    overflow: auto;
    max-height: 100%;
    -webkit-overflow-scrolling: touch;

}

.container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
    width: 100%;
}

.drawer__name {
    align-self: stretch;

    color: var(--Gray-Darker, #2E2E48);

    /* Heading/Heading 1 bold */
    font-family: Outfit, sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    /* 125% */
    letter-spacing: -0.02em;
}

.drawer__name__dark {
    align-self: stretch;

    color: var(--Gray-Lightest, #E2E6EE);

    /* Heading/Heading 1 bold */
    font-family: Outfit, sans-serif;
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
    font-family: Outfit, sans-serif;
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

.infos {
    color: #79819a;
    font-family: 'DM Sans', sans-serif;
}

.infos__dark {
    color: var(--Gray-Light, #ACB1C3);
    font-family: 'DM Sans', sans-serif;

}

.info__text {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.01em;
    line-height: 16px;
}

.info__header {
    align-self: stretch;
    position: relative;
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
    color: #47516b;
}

.info__header__dark {
    align-self: stretch;
    position: relative;
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
    color:  var(--Gray-Lighter, #D9DFE8);

}

.divider1 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border: 7px solid #e2e6ee;
    box-sizing: border-box;
}

.divider {
    width: 100%;
    position: relative;
    height: 1px;
    overflow: hidden;
    flex-shrink: 0;
}

.no_underline {
    text-decoration: none;
}
</style>