
let app = new Vue({
    el : "#app",
    data : {
        nombre : 'juan',
        numero : 13,
        cant : 0,
        mensaje:'', 
        p_error:false,
        cantidadOne : 3,
        cantidadTwo : 1,
        cantidadthree : 6,
    },
    computer : {
        
    },
    methods : {
        buscarregistro( data ){
            let accion = this.$refs.readWrite.obtenerAccion()
            switch( +accion ){
                case 0 :
                    let obtenerData = this.$refs.linesMostrar.obtenerData()
                    this.$refs.matrizRam.insertarRegistro( data, obtenerData )
                  break;
      
                case 1 :
                    this.$refs.matrizRam.mostrarRegistro( data, accion )
                  break;
              }
            
        },
        mostrarregistroinput(data){
            this.$refs.linesMostrar.mostrarregistroinput( data )
        },
        obtenerdata(){
            return this.$refs.linesMostrar.obtenerData()
        },
        incrementar (){
            this.numero ++
        },
        decrementar(){
            this.numero--
        },
        createdatas( datas ){
            this.cantidadOne = Math.log2( datas.length )
            this.cantidadthree =datas[0].length
            this.$refs.matrizRam.createdatas( datas )
        },
        procesate(){
            this.$refs.primeras.entrada( )
        }   
    },
    watch : {
        numero:function (val){
            console.log("wacth: "+val);
            
        }
    }
})

