<template>
    <div>
      <h2>我的</h2>
      <button @click="chooseClick">删选相同项</button>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        data() {
          return {
            newList: [{FSN:201301405012},{FSN:201301405013},{FSN:201301405014}],
            oldList: [{FSN:201301405012},{FSN:201301405013},{FSN:201301405014}]
          }
        },
        methods: {
          chooseClick() {
            let temp = this.newList.filter(item => this.oldList.find(_item => item.name !== _item.name))
            console.log(temp)
            let arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7,8,8,0,8,6,3,4,56,2];
            let arr2 = arr.filter((x, index,self)=>{
              return self.indexOf(x)===index
            })
            console.log(arr2); //[1, 2, 3, 4, 5, 6, 7, 8, 0, 56]
            function animals(...types) {

              console.log(...types)
            }
            animals('cat','dog','rabbit')
          }
        }

    }
</script>

<style scoped>

</style>
