<template>
    <v-container fluid>
        <v-list subheader two-line :color="listItemBackgroundColor">
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
</template>

<script>
export default {
    name: 'Education',
    data: () => ({
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
    }),
    computed: {
        dark() {
            return this.$vuetify.theme.dark
        },
        listItemBackgroundColor() {
            return this.dark ? '#2E2E48' : '#fff'
        },
    },
}
</script>