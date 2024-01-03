<template>
    <!-- <v-toolbar dense color="#F7F9FC">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-toolbar> -->
    <v-bottom-navigation :value="value" color="teal" grow horizontal fixed height="48">
        <v-menu top :offset-y="offset" color="teal">
            <template v-slot:activator="{ on, attrs }">
                <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Dropdown
                </v-btn> -->
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

        <v-btn text>
            <span>Dark/Light Mode</span>

            <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
    </v-bottom-navigation>
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
}
</script>
<style scoped>
.toolbar {
    background: var(--Gradient-Primary, linear-gradient(90deg, #A478E8 0%, #516CF7 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>