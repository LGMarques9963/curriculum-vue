<template>
    <v-container fluid>
        <v-list subheader two-line :color="listItemBackgroundColor">
            <v-list-item v-for="experience in experiences" :key="experience.title"
                :class="{ 'active-item': experience.active }">
                <v-list-item-avatar>
                    <v-icon :class="experience.color" dark>
                        {{ experience.icon }}
                    </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-subtitle>{{ $vuetify.lang.t(experience.subtitle) }}</v-list-item-subtitle>

                    <v-list-item-title>{{ experience.title }}</v-list-item-title>

                </v-list-item-content>

                <v-list-item-action>
                    <v-chip v-if="experience.active" class="ma-2" :color="chipBackgroundColor" :text-color="chipTextColor">
                        {{ $vuetify.lang.t('$vuetify.presentTime') }}
                    </v-chip>
                    <v-btn text v-if="!experience.active">
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
</template>

<script>
export default {
    name: 'Experiences',
    data: () => ({
        experiences: [
            {
                color: 'green',
                icon: 'mdi-briefcase',
                subtitle: '$vuetify.techSupport',
                title: 'PagBrasil',
                period: 'Oct 2021 - ',
                active: true,
                location: 'Porto Alegre, RS',
            },
            {
                color: 'amber',
                icon: 'mdi-gesture-tap-button',
                subtitle: '$vuetify.itIntern',
                title: 'CSN',
                period: 'Apr 2016 - Dec 2016',
                active: false,
                location: 'Volta Redonda, RJ',
            },
        ],
    }),

    computed: {
        dark(){
            return this.$vuetify.theme.dark
        },
        chipBackgroundColor() {
            return this.dark ? '#5531A7' : '#efe2f9'
        },
        chipTextColor() {
            return this.dark ? '#EFE2F9' : '#9251f7'
        },
        listItemBackgroundColor() {
            return this.dark ? '#2E2E48' : '#fff'
        },
    },
}
</script>

<style>


</style>