Vue.component('line-app', {
    props:[
        'id',
        'cant'
    ],
    data: function () {
      return {
        widthLine: 0,
        inputArray:[],
        mostrarArray:[],
        readWrite : 1,
        showEnd : true
      }
    },
    template: `
    <div id="lines" :class="'lines-'+id">
        <div class="lines__wrapper" v-if="id=='primera'">
            <div class="line__container-number" v-for="i in cant" :key="'c-'+i">
                <input type="number" class="input-number" v-model="inputArray[i-1]" @keyup="entrada"  @change="entrada">
            </div>
        </div>
        <div class="lines__wrapper" v-if="id=='segunda'">
            <div class="line__container-number">
                <input type="number" class="input-number" v-model="readWrite">
            </div>
        </div>
        <div class="lines__wrapper" :class="[id == 'tercera' || id == 'segunda'? 'lines__wrapper-rotate':'', id == 'segunda'? 'lines__wrapper-bottom':'']">
            <div class="line__container" v-for="i in cant" :key="i">
                <!--<div class="line__barra" :style="{width:widthLine+'%'}"></div>-->
                <div class="line__barra" :style="{left:widthLine+'%'}"></div>
            </div>
        </div>
        <div class="lines__wrapper" :class="[id == 'tercera'? 'lines__wrapper-rotate lines__wrapper-margins':'']" v-if="id=='tercera' && showEnd">
            <div class="line__container-number" v-for="i in cant" :key="'b-'+i">
                <input type="number" class="input-number" v-model="mostrarArray[i-1]">
            </div>
        </div>
    </div>
    `,

    methods: {
        async probando(){

            setTimeout(() => {
                
                this.widthLine +=10

                if( this.widthLine >= 100 ) {
                    return
                } else {
                    this.probando()
                }

            }, 1000);

        },
        entrada(){
            console.log('entrooo')
            if( this.inputArray.length != this.cant ) return
            console.log('4654')
            let binario = 0
            this.inputArray.forEach( item => {
                if( item )
                    switch( +item ) {
                        case 0 :
                        case 1 :
                            binario++
                            break;
                    }
            } )

            if( binario == this.inputArray.length ) {
                console.log('cambiando')
                this.$emit('buscarregistro', this.inputArray)
            }

        },
        mostrarregistroinput( data ) {
            console.log(data)
            console.log('mostrandooo4564654')
            this.showEnd = false
            data.forEach( ( item, index) => {
                this.mostrarArray[ index ] = item
                this.showEnd = true
            } )

        },
        obtenerData( ){
            return this.mostrarArray
        },
        obtenerAccion(){
            return this.readWrite
        }
    },
    mounted() {
        this.probando()
    }
  })