<template>
    <v-theme-provider root>

        <v-bottom-navigation :value="value" :color="this.$vuetify.theme.dark ? '#232339' : 'teal'" grow horizontal fixed height="48">
            <v-menu top :offset-y="offset" :color="this.$vuetify.theme.dark ? '#232339' : 'teal'" open-on-hover>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" color="white">
                        <span>Language</span>

                        <v-icon>mdi-translate</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                        <v-list-item-icon>
                            <span :class="item.icon"></span>
                        </v-list-item-icon>
                        <v-list-item-title>
                            <v-btn text>
                                {{ item.title }}

                            </v-btn>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text @click="toggle">
                <span>Dark/Light Mode</span>

                <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </v-theme-provider>
</template>
<script>

export default {
    name: 'ToolBar',
    data: () => ({
        value: 0,
        offset: true,
        items: [
            { title: 'English', icon: "fi fi-gb" },
            { title: 'Português', icon: "fi fi-br" },
            { title: 'Español', icon: "fi fi-es" },
        ],
    }),

    methods: {
        toggle() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
    },
}
</script>