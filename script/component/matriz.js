Vue.component('matriz-app', {
    data: function () {
      return {
        tamRam: [],
      }
    },
    template: `
    <div id="matriz" class="matriz">
        <div v-for="n in 10">
            <div v-for="j in 5">
                <input type="number" v-model="tamRam[n-1]" @keyup="inputsChar( tamRam[n-1], n-1 )" value="0">
            </div>
        </div>

        <div v-for="n in 10">
            <span>{{ tamRam[n] }}</span>
        </div>
    </div>
    `,

    methods: {
        inputsChar( tamRam, n ){

            if( tamRam == 0 || tamRam == 1 ) {
                console.log('entro')
                this.tamRam[n] = tamRam
            } else {
                this.tamRam[n] = 0
            }
        },
        mostrarRegistro(){
            console.log('mostrar')
        }
    },
    mounted() {
    },
  })