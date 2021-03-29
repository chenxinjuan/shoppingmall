<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
<!--      <Table :columns="column" :data="tableData"></Table> //iview的Table组件-->
      <table>
        <thead>
          <tr>
            <td>序列</td>
            <td>姓名</td>
            <td>年龄</td>
            <td>性别</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in tableData" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.sex }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="toExcel">导出表格数据到Excel</button>
<!--      <div style="width:100px;height: 100px">-->
<!--        <img :src="imgUrl" style="width:100%;height: 100%;">-->
<!--      </div>-->
<!--      <div ref="html2canvas">-->
<!--        <h2>我是要被转成图片的部分</h2>-->
<!--        <ul>-->
<!--          <li>匆匆那年</li>-->
<!--          <li>致青春</li>-->
<!--          <li>我和我的祖国</li>-->
<!--          <li>我和我的家乡</li>-->
<!--          <li>原来我还在这里</li>-->
<!--        </ul>-->
<!--        <div class="bg">-->
<!--          切换图片-->
<!--        </div>-->
<!--      </div>-->
<!--      <button @click="exportClick">导出</button>-->
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import transform from "../../utils/exportToExcel"
    import html2canvas from "html2canvas"
    import { getHomeMultidata } from "../../network/api";
    import axios from 'axios'
    export default {
        name: "Home",
        components:{
            NavBar
        },
        data() {
            return {
              imgUrl: '',
              buildingList:[{
                building_number: "1",
                unitList:[{
                  unit: "1",
                  houseList:[{
                    house_number: "01",
                    area: 96,
                    floorList:[{
                      floor_number: 26,
                      fstatus: 1,
                      id: "1321333750841593857",
                      sale_number: "百合苑/1-1#2601",
                      unit_price: 18000,
                      unit_total: 1728000
                    }]
                  }]
                }]
              },{
                building_number: "2",
                unitList:[{
                  unit: "1",
                  houseList:[{
                    house_number: "01",
                    area: 96,
                    floorList:[{
                      floor_number: 26,
                      fstatus: 1,
                      id: "1321333750841593857",
                      sale_number: "百合苑/1-1#2601",
                      unit_price: 18000,
                      unit_total: 1728000
                    }]
                  }]
                }]
              }],
              tableData: [
                {index:1,name:'我是1号',age:18,sex:'男',hobby:'web',hair:'thick',salaried:'99999999'},
                {index:2,name:'我是2号',age:18,sex:'男',hobby:'web',hair:'thick',salaried:'99999999'},
                {index:3,name:'我是3号',age:18,sex:'男',hobby:'web',hair:'thick',salaried:'99999999'},
                {index:4,name:'我是4号',age:18,sex:'男',hobby:'web',hair:'thick',salaried:'99999999'},
                {index:5,name:'我是5号',age:18,sex:'男',hobby:'web',hair:'thick',salaried:'99999999'},
                {index:6,name:'我是6号',age:18,sex:'女',hobby:'web',hair:'thick',salaried:'99999999'},
                {index:7,name:'我是7号',age:18,sex:'女',hobby:'web',hair:'thick',salaried:'99999999'},
                {index:8,name:'我是8号',age:18,sex:'女',hobby:'web',hair:'thick',salaried:'99999999'},
                {index:9,name:'我是9号',age:18,sex:'女',hobby:'web',hair:'thick',salaried:'99999999'},
                {index:10,name:'我是10号',age:18,sex:'女',hobby:'web',hair:'thick',salaried:'99999999'},
                {index:11,name:'我是11号',age:18,sex:'男',hobby:'web',hair:'thick',salaried:'99999999'},
                {index:12,name:'我是12号',age:18,sex:'男',hobby:'web',hair:'thick',salaried:'99999999'},
                {index:13,name:'我是13号',age:18,sex:'女',hobby:'web',hair:'thick',salaried:'99999999'},
                {index:14,name:'我是14号',age:18,sex:'女',hobby:'web',hair:'thick',salaried:'99999999'},
                {index:15,name:'我是15号',age:18,sex:'男',hobby:'web',hair:'thick',salaried:'99999999'}
              ]
            }
        },
        created(){
            getHomeMultidata({pageNo: 1, pageSize: 10}).then(res=>{
              console.log(res);
            })
        },
      methods: {
        toExcel(){
          //调用我们封装好的方法，传3个参数过去，分别为：数据，文件名，回到函数(可根据自己需求决定回调是否需要)
          transform(this.buildingList, '我是文件名.xls', this.callback)
        },
        callback(info){
          console.log(info)
        }
        // exportClick() {
        //   html2canvas(this.$refs.html2canvas).then(canvas => {
        //     // 生成图片地址
        //     this.imgUrl = canvas.toDataURL("image/png");
        //   });
        //   console.log(this.imgUrl)
        // }
      }
    }
</script>

<style scoped>
.home-nav{
  background-color:#ff0000;
  color: #f0f0f0;
}
.bg {
  background-color: #ff0000;
  width: 100%;
  height: 100px;
  text-align: center;
}
</style>
