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
            <div class="row">
                <div class="col-6 d-flex align-items-center justify-content-center text-secondary">
                        Bus de dirección
                </div> 
                <div class="col-6">
                    <div class="line__container-number" v-for="i in cant" :key="'c-'+i" :class="[ id == 'primera' ? 'line__container-number--flex':'']">
                        <input type="number" class="input-number form-control" v-model="inputArray[i-1]" >
                    </div>
                </div> 
            </div>
            
        </div>
        <div class="lines__wrapper" v-if="id=='segunda'">
            <div class="col">
                <div class="col-2 d-flex align-items-center justify-content-center text-secondary">
                        Leer o Escribir
                </div> 
                <div class="col-6">
                    <div class="line__container-number">
                        <input type="number" class="input-number form-control" v-model="readWrite">
                    </div>
                </div> 
            </div>
            
        </div>
        <div class="lines__wrapper" :class="[ id == 'tercera' || id == 'segunda'? 'lines__wrapper-rotate':'', id == 'segunda'? 'lines__wrapper-bottom':'' ]">
            <div class="line__container" v-for="i in cant" :key="i">
                <!--<div class="line__barra" :style="{width:widthLine+'%'}"></div>-->
                <div class="line__barra" :style="{left:widthLine+'%'}"></div>
            </div>
        </div>
        <div class="lines__wrapper" :class="[id == 'tercera'? 'lines__wrapper-rotate lines__wrapper-margins':'']" v-if="id=='tercera' && showEnd">
            <div class="row">
                <div class="col-6">
                    <div class="line__container-number line__container-number--flex-new" v-for="i in cant" :key="'b-'+i" >
                        <input type="number" class="input-number form-control " v-model="mostrarArray[i-1]">
                    </div>
                </div> 
                <div class="col-6 d-flex align-items-center justify-content-end text-secondary ">
                        Bus de datos
                </div> 
            </div>
            
        </div>
    </div>
    `,

    methods: {
        probando( ){

            setTimeout(() => {
                
                this.widthLine +=20

                if( this.widthLine >= 100 ) {
                    this.widthLine = 0
                    return
                } else {
                    this.probando()
                }

            }, 1000);

        },
        procesos(){
            if( this.inputArray.length != this.cant ) return
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
                this.$emit('buscarregistro', this.inputArray)
            }
            
        },
        entrada(){
            // this.procesos()
            let _this = this
            setTimeout(() => {
                
                this.widthLine +=20

                if( this.widthLine >= 100 ) {
                    this.widthLine = 0

                    _this.procesos()
                    return
                } else {
                    this.entrada()
                }

            }, 1000);

        },
        mostrarregistroinput( data ) {
            let _this = this
            setTimeout(() => {
                
                this.widthLine +=20

                if( this.widthLine >= 100 ) {
                    this.widthLine = 0

                    
                    this.showEnd = false
                    data.forEach( ( item, index) => {
                        this.mostrarArray[ index ] = item
                        this.showEnd = true
                    } )


                    return
                } else {
                    this.mostrarregistroinput( data )
                }

            }, 1000);
            

        },
        obtenerData( ){
            return this.mostrarArray
        },
        obtenerAccion(){
            return this.readWrite
        },
        obtenerAccionWrite(){
            return this.readWrite
        }
    },
    mounted() {
        this.probando()
    }
  })