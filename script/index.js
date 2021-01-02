
let app = new Vue({
    el : "#app",
    data : {
        nombre : 'juan',
        numero : 13,
        cant : 0,
        mensaje:'', 
        p_error:false
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
            console.log('obtener Datos---')
            console.log(this.$refs.linesMostrar.obtenerData())
            return 486
            return this.$refs.linesMostrar.obtenerData()
        },
        incrementar (){
            this.numero ++
        },
        decrementar(){
            this.numero--
        },   
    },
    watch : {
        numero:function (val){
            console.log("wacth: "+val);
            
        }
    }
})

