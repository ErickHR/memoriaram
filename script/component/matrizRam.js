Vue.component('matriz-ram', {
    data: function () {
      return {
        tamRam: [
            [1,0,1,0,1,0],
            [1,0,1,0,1,0],
            [0,1,0,1,0,1],
            [1,0,1,0,1,0],
            [0,1,0,1,0,1],
            [1,0,1,0,1,0],
            [1,0,1,0,1,0],
            [1,0,1,0,1,0],
        ],
        mostrarIf : true
      }
    },
    template: `
    <div id="matriz-ram" class="matriz-ram">
        <div class="matriz__container" v-for="listItem in tamRam" v-if="mostrarIf">
            <input type="number" class="matriz__input" v-for="(item,index) in listItem"  v-model="listItem[index]">
        </div>
    </div>
    `,

    methods: {
      convertirBinario( data ) {
        let multi = 0
        data.forEach( (item, index) => {
            multi += item*Math.pow(2, index)
        }  )
        return multi
      },
      async mostrarRegistro( data, accion ){
        let index = this.convertirBinario(data)
        this.$emit('mostrarregistroinput', this.tamRam[index])
      }, 
      async insertarRegistro( posicion, data ){
        let posicions = this.convertirBinario(posicion)
        this.tamRam[posicions].forEach( (item, index) => {
          this.tamRam[posicions][index] = +data[index]
        } )
        
        this.mostrarIf = !this.mostrarIf
        this.mostrarIf = !this.mostrarIf
        
      },
      createdatas( datas ) {
        this.tamRam = datas
      }
    },
    mounted() {
    },
    computed: {
      render: function () {
        return this.tamRam.length > 0;
      }
    }
  })