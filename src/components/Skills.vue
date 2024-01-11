<template>
    <v-container fluid>
        <v-row dense>
            <v-col v-for="skill in skills" :key="skill.title" cols="12">
                <v-card :color="cardColor" elevation="0">
                    <v-card-title><span class="skill__title">{{ $vuetify.lang.t(skill.title) }}</span></v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col v-for="item in skill.skills" :key="item.name" cols="3">
                                <v-card class="skill__card" elevation="0" :color="cardColor">
                                    <v-row align="center" class="spacer" no-gutters>
                                        <v-col>
                                            <v-avatar size="34px" color="#E1E7FE" class="ml-4">
                                                <v-img v-if="item.localAsset" :src="item.icon"></v-img>
                                                <v-icon v-else :color="item.color" size="24px">{{ item.icon }}</v-icon>
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
</template>

<script>
export default {
    name: 'Skills',
    data: () => ({
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
                        icon: require('../assets/icons/icons8-spring-boot.svg'),
                        color: '#6DB33F',
                        localAsset: true,
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
                        icon: require('../assets/icons/light/icons8-django-24.svg'),
                        color: '#092E20',
                        localAsset: true,
                    },
                ],
                icon: 'mdi-code-tags',
                color: '#516CF7',
            },
            {
                title: '$vuetify.database',
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
                title: '$vuetify.tools',
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
    }),
    computed: {
        dark() {
            return this.$vuetify.theme.dark
        },
        cardColor() {
            return this.dark ? '#232338' : '#F7F9FC'
        },
    },

}
</script>