<template>
    <v-navigation-drawer v-model="drawer" class="drawer">
        <div class="content">
            
            <div class="cover">
                <img class="cover__image" alt="" src="https://s3-alpha-sig.figma.com/img/f6ef/acfa/cb2a2ed7edbd45bea34a5190c44c0411?Expires=1704672000&Signature=XLvsUd1U9KlSLDSjAMQ-tyeXxEhogUzjDVHAEX9svP5Mvgrw4dZxiZs7h8xV7rxEjAbDwA6AuC8SkA~JD2K0FZ8-dmLtxxeKEnx3vljkjPKG8kKKSbMUPg4FxQQ5U6J~7Fc9BP7fz-0o8lX3Vw1ccS9p1YB50K3CmgxDXgqOTWZRUgpdn3uYEplCU2nLORi5ER57YsXdPwqp7jAQ~Z59GNkSWnF-IcFMEQ8iMmcOpiGz6E4IvGxoOVe~RefD5kIyDb7rU09y5FXWU6d7O~vzA8NQB1LPIdwzrUqQ8k7WrEkSjIjqovK~z5Bd6YxbE379Y4O4XeWoYdVYfblMkRF0Rg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </div>
            <div class="container">
                
                <div class="drawer__name">Lorran Marques</div>
                <div class="drawer__role">Full Stack Developer</div>
                
                <div class="divider">
                    <div class="divider1" />
                </div>
                
                <div class="infos">
                    <div class="info__text">Contact Info</div>
                    <v-list shaped>
                        <v-list-item v-for="(item, i) in basic_info" :key="i">
                            <div class="row pt-4">
                                <v-list-item-icon>
                                    <v-avatar color="#e2e6ee" size="32">
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </v-avatar>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="info__text">
                                        {{ item.header }}
                                    </v-list-item-subtitle>
                                    <v-list-item-title class="info__text info__header">{{ item.text }}</v-list-item-title>
                                </v-list-item-content>
                            </div>
                        </v-list-item>
                    </v-list>
                </div>

                <div class="divider">
                    <div class="divider1" />
                </div>
                <div class="infos">
                    <div class="info__text">Socials</div>
                    <v-list shaped>
                        <v-list-item v-for="(item, i) in socials" :key="i">
                            <div class="row pt-4">
                                <v-list-item-icon>
                                    <v-avatar color="#e2e6ee" size="32">
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </v-avatar>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="info__text">
                                        {{ item.header }}
                                    </v-list-item-subtitle>
                                    <v-list-item-title class="info__text info__header">{{ item.text }}</v-list-item-title>
                                </v-list-item-content>
                            </div>
                        </v-list-item>
                    </v-list>
                </div>
                
                <div class="divider">
                    <div class="divider1" />
                </div>
                <div class="infos">
                    <div class="info__text">Languages</div>
                    <v-list shaped>
                        <v-list-item v-for="(item, i) in languages" :key="i">
                            <div class="row pt-4">
                                <v-list-item-icon>
                                    <span :class="item.icon"></span>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title class="info__text info__header">{{ item.text }}</v-list-item-title>
                                    <v-list-item-subtitle class="info__text">
                                        {{ item.header }}
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
            { text: 'lorrangmarques@gmail.com', icon: 'mdi-email-outline', header: 'Email' },
            { text: '##', icon: 'mdi-link-variant', header: 'Website' },
            { text: '+55 11 91234-5678', icon: 'mdi-phone', header: 'Phone' },
            { text: 'São Paulo, Brazil', icon: 'mdi-map-marker', header: 'Address' }
        ],
        socials: [
            { text: '@lorrangmarques', icon: 'mdi-linkedin', header: 'LinkedIn' },
            { text: '@LGMarques9963', icon: 'mdi-github', header: 'GitHub' },
            { text: '@lorrangmarques', icon: 'mdi-instagram', header: 'Instagram' }
        ],
        languages: [
            { text: 'Portuguese', icon: 'fi fi-br', header: 'Native' },
            { text: 'English', icon: 'fi fi-gb', header: 'Fluent' },
            { text: 'Spanish', icon: 'fi fi-es', header: 'Fluent' },
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
    position: relative;
    border-radius: 0px 8px 8px 0px;
    width: 256px;
    height: 120px;
    background: lightgray 50% / cover no-repeat;
    /* background-image: url(); */
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

.infos {
    color: #79819a;
    font-family: 'DM Sans';
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

/* 
.row {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
} */

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
</style>