Vue.component('inputsu-app', {
    data: function () {
      return {
          direcctionBus  : 0,
          wordCant  : 0,
          datas : []
      }
    },
    template: `
    <div id="inputsRam">
        <div class="row">
            <div class="col-3">
                <span>Bus de Direccion</span>
                <input type="number" class="form-control" v-model="direcctionBus">
            </div>
            <div class="col-3">
                <span>Cant. de palabras</span>
                <input type="number" class="form-control" v-model="wordCant">
            </div>
            <div class="col-2">
                <p>&nbsp;</p>
                <button type="button" class="btn btn-success" @click="createArray">CREAR</button>
            </div>
        </div>
        <div class="row pt-3">
            
            <div class="col-2">
                &nbsp;
                <button type="button" class="btn btn-warning" @click="procesate">PROCESAR</button>
            </div>
        </div>
    </div>
    `,

    methods: {
        createArray(){

            this.datas = []

            let words = Math.pow( 2, this.direcctionBus )

            for( let i = 0 ; i < words ; i++ ){
                this.datas[i] = []
            }
            for( let i = 0 ; i < words; i++ ){
                for( let j = 0 ; j < this.wordCant; j++ ){
                    this.datas[i][j] = 0
                }
                
            }
            this.$emit('createdatas', this.datas)

        },
        procesate(){
            this.$emit('procesate')
        }
    },
    mounted() {
    }
  })