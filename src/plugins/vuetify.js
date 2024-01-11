import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import django24 from '../assets/icons/light/icons8-django-24.svg';
import spring from '../assets/icons/icons8-spring-boot.svg';
import VueI18n from 'vue-i18n';

import en from '@/undefined/en';
import es from '@/undefined/es';
import pt from '@/undefined/pt';

Vue.use(Vuetify);
Vue.use(VueI18n);

const messages = {
    en: {
        $vuetify: {
            dataIterator: {
                rowsPerPageText: 'Items per page:',
                rowsPerPageAll: 'All',
                pageText: '{0}-{1} of {2}',
                noResultsText: 'No matching records found',
                nextPage: 'Next page',
                prevPage: 'Previous page'
            },
            dataTable: {
                rowsPerPageText: 'Rows per page:'
            },
            noDataText: 'No data available',
            address: 'Address',
            languages: 'Languages',
            portuguese: 'Portuguese',
            english: 'English',
            spanish: 'Spanish',
            contact: 'Contact Info',
            socials: 'Socials',
            levelNative: 'Native',
            levelFluent: 'Fluent',
            levelIntermediate: 'Intermediate',
            levelBasic: 'Basic',
            latestProjects: 'Latest Projects',
            description: 'Description',
            viwGithub: 'View on Github',
            liveDemo: 'Live Demo',
            technologies: 'Technologies',
            experience: 'Experience',
            education: 'Education',
            skills: 'Skills',
            tools: 'Tools',
            database: 'Database',
        },
        hello: 'Hello World',
    },
    pt: {
        $vuetify: {
            dataIterator: {
                rowsPerPageText: 'Itens por página:',
                rowsPerPageAll: 'Todos',
                pageText: '{0}-{1} de {2}',
                noResultsText: 'Nenhum registro correspondente encontrado',
                nextPage: 'Próxima página',
                prevPage: 'Página anterior'
            },
            dataTable: {
                rowsPerPageText: 'Linhas por página:'
            },
            noDataText: 'Nenhum dado disponível',
            address: 'Endereço',
            languages: 'Idiomas',
            portuguese: 'Português',
            english: 'Inglês',
            spanish: 'Espanhol',
            contact: 'Contato',
            socials: 'Redes Sociais',
            levelNative: 'Nativo',
            levelFluent: 'Fluente',
            levelIntermediate: 'Intermediário',
            levelBasic: 'Básico',
            latestProjects: 'Últimos Projetos',
            description: 'Descrição',
            viwGithub: 'Ver no Github',
            liveDemo: 'Demo',
            technologies: 'Tecnologias',
            experience: 'Experiência',
            education: 'Formação',
            skills: 'Skills',
            tools: 'Ferramentas',
            database: 'Banco de Dados',

        },
        hello: 'Olá Mundo',
    },
    es: {
        $vuetify: {
            dataIterator: {
                rowsPerPageText: 'Artículos por página:',
                rowsPerPageAll: 'Todo',
                pageText: '{0}-{1} de {2}',
                noResultsText: 'No se encontraron registros coincidentes',
                nextPage: 'Siguiente página',
                prevPage: 'Página anterior'
            },
            dataTable: {
                rowsPerPageText: 'Filas por página:'
            },
            noDataText: 'No hay datos disponibles',
            address: 'Dirección',
            languages: 'Idiomas',
            portuguese: 'Portugués',
            english: 'Inglés',
            spanish: 'Español',
            contact: 'Contacto',
            socials: 'Redes Sociales',
            levelNative: 'Nativo',
            levelFluent: 'Fluido',
            levelIntermediate: 'Intermedio',
            levelBasic: 'Básico',
            latestProjects: 'Últimos proyectos',
            description: 'Descripción',
            viwGithub: 'Ver en Github',
            liveDemo: 'Demo',
            technologies: 'Tecnologías',
            experience: 'Experiencia',
            education: 'Educación',
            skills: 'Habilidades',
            tools: 'Herramientas',
            database: 'Base de datos',
        },
        hello: 'Hola Mundo',
    },
}

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
})



export default new Vuetify({
    icons: {
        values: {
            django24: {
                customIconSvg: django24,
                customIconSvgPath: 'M18 6h-1c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h1c.552 0 1 .448 1 1v1C19 5.552 18.552 6 18 6zM19 16.702c0 .952-.213 3.983-2.741 5.135-.25.114-.542.095-.792-.018l-1.541-.698c-.369-.167-.387-.667-.046-.884 1.46-.927 2.12-2.253 2.12-3.535V9c0-.552.448-1 1-1h1c.552 0 1 .448 1 1V16.702zM11 4v4.159C10.653 8.018 9.904 8 9.535 8 6.759 8 4.19 9.306 4.19 13c0 4.42 3.48 5 5.81 5 .703 0 2.085-.053 3.143-.207C13.636 17.721 14 17.3 14 16.802V4c0-.552-.448-1-1-1h-1C11.448 3 11 3.448 11 4zM9.97 15.533c-1.31 0-2.58-.413-2.58-2.533s1.27-2.45 2.58-2.45c.32 0 .68.06 1.03.14v4.703C10.65 15.473 10.29 15.533 9.97 15.533z'
            },
            spring: {
                customIconSvg: spring,
                // customIconSvgPath: 'M12.5 2.5c-1.4 0-2.8.5-3.9 1.6-2.2 2.2-2.2 5.6 0 7.8l3.9 3.9c.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8l3.9-3.9c2.2-2.2 2.2-5.6 0-7.8-1.1-1.1-2.5-1.6-3.9-1.6zm0 1.9c.9 0 1.8.3 2.4.9 1.3 1.3 1.3 3.4 0 4.7l-3.9 3.9-3.9-3.9c-1.3-1.3-1.3-3.4 0-4.7.6-.6 1.5-.9 2.4-.9zm0 1.9c-.5 0-1 .2-1.4.6-.8.8-.8 2.1 0 2.8l1.4 1.4c.4.4 1 .4 1.4 0l1.4-1.4c.8-.8.8-2.1 0-2.8-.4-.4-.9-.6-1.4-.6zm0 1.9c.2 0 .
            },
        }
    },
    theme:
    {
        themes: {
            dark: {
                primary: '#1976D2',
                secondary: '#2E2E48',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            },	
        }
    },
    lang: {
        // t: (key, ...params) => i18n.t(key, params),
        locales: { en, pt, es },
        current: 'en'
    },
});
