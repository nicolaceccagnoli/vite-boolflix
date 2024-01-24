<script >
import { store } from '../store';

    export default {
        data() {
            return {
                store
            };
        },
        methods: {

        }, 
        props: {
            film: Array
        }

    }
</script>

<template>
    <main>
        <div class="film-info">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">
                        {{ film.title }}
                    </h5>
                    <p class="card-text">
                        {{ film.original_title }}
                    </p>
                    <p class="card-text">
                        {{ film.original_language }}
                    </p>
                    <p class="card-text">
                        {{ film.vote_average }}
                    </p>
                </div>
            </div>            
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
