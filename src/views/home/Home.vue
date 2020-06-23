<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {getHomeMultidata} from "network/home";
    import axios from 'axios'
    export default {
        name: "Home",
        components:{
            NavBar
        },
        created(){
            // axios.get('/user/userInfo')
            //      .then(function(res){
            //         console.log(res);
            //      })
            //      .catch(function(err){
            //         console.log(err);
            //      })
                    // getHomeMultidata().then(res=>{
                    // console.log(res);
                    // })
        }
    }
</script>

<style scoped>
.home-nav{
  background-color:#ff0000;
  color: #f0f0f0;
}
</style>
