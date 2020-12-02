<template>
    <div>
        <v-btn-toggle v-model="toggle_exclusive" mandatory>
            <v-btn @click="loadCasos">
                <span class="hidden-sm-and-down">Casos</span>
                <v-icon right>mdi-emoticon-sick</v-icon>
            </v-btn>
            <v-btn @click="loadMuertos">
                <span class="hidden-sm-and-down">Fallecidos</span>
                <v-icon right>mdi-emoticon-dead</v-icon>
            </v-btn>
            <v-btn @click="loadRecuperados">
                <span class="hidden-sm-and-down">Recuperados</span>
                <v-icon right>mdi-emoticon-happy</v-icon>
            </v-btn>
        </v-btn-toggle>
        <v-container height="750">
            <highcharts :constructorType="'mapChart'" class="hc" :options="chartOptions" :updateArgs="[true, false]" ref="chart"></highcharts>
        </v-container>
    </div>
</template>
<script>
import Highcharts from "highcharts";
import Maps from "highcharts/modules/map";
import darkUnica from "highcharts/themes/dark-unica";

darkUnica(Highcharts);

Maps(Highcharts);

//install: npm i @highcharts/map-collection
import Argentina from '@highcharts/map-collection/countries/ar/ar-all.geo.json'

export default {

    name: 'mapa',
    props: {
        series: { type: Array, required: true }
    },
    data() {
        return {
            toggle_exclusive: undefined,
        }
    },
    computed: {
        chartOptions() {
            return {
                chart: {
                    height: '100%',
                    map: Argentina,
                    backgroundColor: 'rgba(255, 255, 255, 0.0)'
                },
                title: {
                    text: ''
                },
                legend: {
                    enabled: true
                },
                credits: {
                    enabled: false
                },
                colorAxis: {
                    min: 0,
                    minColor: '#E6E7E8',
                    maxColor: '#ff0000'
                },
                plotOptions: {
                    map: {
                        states: {
                            hover: {
                                color: '#808080',
                                borderColor: 'red',
                            },
                            select: {
                                color: '#7db7ed',
                                borderColor: 'red',
                            }
                        }
                    }
                },
                series: this.series,
            };
        },
    },
    methods: {
        loadCasos() {
            this.$store.dispatch('GENERATE', { option: 'casos' })
        },
        loadMuertos() {
            this.$store.dispatch('GENERATE', { option: 'muertos' })
        },
        loadRecuperados() {
            this.$store.dispatch('GENERATE', { option: 'recuperados' })
        }
    }
}
</script>
<style lang="css" scoped>
</style>