<template>
    <div>
        <div v-if="series">
            <mapa :series="series"></mapa>
        </div>
        <div v-else>
            Data is loading
        </div>
    </div>
</template>
<script>
import mapa from "@/components/mapa.vue"
import { mapGetters } from 'vuex'

export default {

    name: 'preCargaMap',
    components: {
        mapa
    },
    data() {
        return {

        }
    },
    mounted() {
        this.getDataCovid()
    },
    methods: {
        getDataCovid() {
            this.$store.dispatch('FETCH_DATA_COVID')
        }
    },
    computed: {
        ...mapGetters(["series"])
    }
}
</script>
<style lang="css" scoped>
</style> 