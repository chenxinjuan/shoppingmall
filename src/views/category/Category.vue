<template>
<!--  <view>-->
<!--    <scroll-view @scroll="scroll1" :scroll-left="scrollLeft" class="scroll-x x" scroll-x="true" v-if="finalList.length > 0">-->
<!--      <view class="scroll-x-p">-->
<!--        <view>订单号</view>-->
<!--        <view>产品名称</view>-->
<!--        <view>颜色</view>-->
<!--        <view>箱数</view>-->
<!--        <view>包装规格</view>-->
<!--        <view>托盘尺寸</view>-->
<!--        <view>操作</view>-->
<!--      </view>-->
<!--      <view class="scroll-x-p" v-for="(item, index) in finalList" :key="index">-->
<!--        <view>{{ item.FOrderBillNo }}</view>-->
<!--        <view>{{ item.FName }}</view>-->
<!--        <view>{{ item.FCOLOR }}</view>-->
<!--        <view>{{ item.BoxNum }}</view>-->
<!--        <view>{{ item.FQty }}</view>-->
<!--        <view>{{ item.FSize }}</view>-->
<!--        <view class="removeBar" @click="remove(item,index)">移除</view>-->
<!--      </view>-->
<!--    </scroll-view>-->
<!--    <view class="container" v-if="finalList.length > 0">-->
<!--      <view class="item">-->
<!--        <text>合计:</text>-->
<!--      </view>-->
<!--      <view class="item">-->
<!--        <text>箱数:{{ totalBoxNum }}</text>-->
<!--      </view>-->
<!--      <view class="item">-->
<!--        <text>包装规格:{{ totalSize }}</text>-->
<!--      </view>-->
<!--    </view>-->
<!--    <button v-if="finalList.length > 0 && isShow" class="bt" type="warn" style="margin-top: 10px;" @click="back(buttonMessage)">{{ buttonMessage }}</button>-->
<!--    <button v-if="finalList.length > 0" class="bt" type="warn" style="margin-top: 10px;" @click="submit(0)">暂 存</button>-->
<!--    <button v-if="finalList.length > 0" class="bt" type="warn" style="margin-top: 10px;" @click="submit(1)">提 交</button>-->
<!--    <uni-popup ref="popup" type="dialog" :maskClick="false">-->
<!--      <uni-popup-dialog type="input" mode="base" content="" message="成功消息" title="柜号操作" :duration="1500" :before-close="true" @close="close" @confirm="confirm">-->
<!--        <view style="padding: 0 10px;">-->
<!--          <view class="container">-->
<!--            <view class="item">-->
<!--              <text>柜号</text>-->
<!--              <input style="width: 80%;" class="uni-input" v-model="FNO" placeholder="请输入柜号"/>-->
<!--            </view>-->
<!--          </view>-->
<!--        </view>-->
<!--      </uni-popup-dialog>-->
<!--    </uni-popup>-->
<!--    <scan-code></scan-code>-->
<!--  </view>-->
</template>

<script>
  // import { combineRequsetData, xmlToJson } from '../../utils/util.js'
  // import { mainUrl } from '../../utils/url.js'
  // import scanCode from "@/components/scan-code/scan-code.vue"
  // import uniPopup from '@/components/uni-popup/uni-popup.vue'
  // import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
  // export default {
  //   data() {
  //     return {
  //       packList: [], //整零物料数组
  //       tempPackList: [],
  //       packFSNList: [],
  //       plantList: [], //托盘物料数组
  //       tempPlantList: [],
  //       plantFSNList: [],
  //       finalList: [],
  //       fsn: '',
  //       FDestination: '',
  //       FNO: '',
  //       FBillNO: '',
  //       FInterID: '',
  //       totalBoxNum: 0,
  //       totalSize: 0,
  //       //当前距离顶部位置
  //       scrollLeft:0,
  //       old: {
  //         //记录距离顶部位置
  //         scrollLeft:0
  //       },
  //       isShow: false,
  //       isAdjust: false,
  //       buttonMessage: '回退',
  //       count: 0
  //     }
  //   },
  //   components: {
  //     scanCode,
  //     uniPopup,
  //     uniPopupDialog
  //   },
  //   onLoad:  function (option) {
  //     this.FInterID = option.FInterID
  //     this.FBillNO = option.FBillNO
  //     this.getDetail(this.FInterID)
  //     // this.FPack = option.FPack
  //   },
  //   onShow() {
  //     let _this = this
  //     uni.$off('scancodedate')
  //     uni.$on('scancodedate',(data) => {
  //       // console.log(data)
  //       _this.broadcastBackInfo(data.code)
  //     })
  //
  //   },
  //   methods: {
  //     scroll1(e){
  //       this.old.scrollLeft=e.detail.scrollLeft
  //     },
  //     //获取暂存数据列表
  //     getDetail (finterid) {
  //       console.log(finterid)
  //       if(finterid) {
  //         this.isShow = true
  //         var tmpData = '<FInterID>' + finterid + '</FInterID>'
  //         uni.request({
  //           url: mainUrl,
  //           method: 'POST',
  //           data: combineRequsetData('Bao_OutList', tmpData),
  //           header:{
  //             'Content-Type':'text/xml; charset=utf-8'
  //           },
  //           success: (res) => {
  //             console.log(res)
  //             let temp = res.data
  //             temp.forEach(item => {
  //               if(item.FSize) {
  //                 this.plantList.push({
  //                   FSN: item.FSN,
  //                   FOrderBillNo: item.FOrderBillNo,
  //                   FName: item.FName,
  //                   FCOLOR: item.FCOLOR,
  //                   BoxNum: 1,
  //                   FQty: item.FQty,
  //                   FSize: item.FSize,
  //                   FDestination: item.FDestination
  //                 })
  //                 this.plantFSNList.push({
  //                   FSN: item.FSN,
  //                 })
  //               }else {
  //                 this.packList.push({
  //                   FSN: item.FSN,
  //                   FOrderBillNo: item.FOrderBillNo,
  //                   FName: item.FName,
  //                   FCOLOR: item.FCOLOR,
  //                   FQty: item.FQty,
  //                   BoxNum: 1,
  //                   FDestination: item.FDestination
  //                 })
  //                 this.packFSNList.push({
  //                   FSN: item.FSN
  //                 })
  //               }
  //             })
  //             console.log(this.packFSNList)
  //             this.tempPlantList = this.plantList.reduce((total, cur, index) => {
  //               let hasValue = total.findIndex(current => {
  //                 return current.FOrderBillNo === cur.FOrderBillNo &&
  //                   current.FName === cur.FName &&
  //                   current.FQty === cur.FQty && current.FSize === cur.FSize
  //               })
  //               if(hasValue === -1) {
  //                 total.push({
  //                   ...cur,
  //                   FSize: cur.FSize,
  //                   BoxNum: 1
  //                 })
  //               }
  //               if(hasValue !== -1) {
  //                 total[hasValue].BoxNum = total[hasValue].BoxNum + cur.BoxNum
  //               }
  //               return total
  //             }, [])
  //             this.tempPackList = this.packList.reduce((total, cur, index) => {
  //               let hasValue = total.findIndex(current => {
  //                 return current.FOrderBillNo === cur.FOrderBillNo && current.FName === cur.FName && current.FQty === cur.FQty
  //               })
  //               console.log(hasValue)
  //               if(hasValue === -1) {
  //                 total.push({
  //                   ...cur,
  //                   BoxNum: 1
  //                 })
  //               }
  //               if(hasValue !== -1) {
  //                 total[hasValue].BoxNum = total[hasValue].BoxNum + cur.BoxNum
  //               }
  //               return total
  //             }, [])
  //             this.tempPackList.push(...this.tempPlantList)
  //             this.finalList = this.tempPackList
  //           },
  //           fail: (err) => {
  //             console.log('request fail', err)
  //           },
  //           complete: () => {
  //             this.totalBoxNum = 0
  //             this.totalSize = 0
  //             this.finalList.forEach( totalItem => {
  //               this.totalBoxNum = this.totalBoxNum + totalItem.BoxNum
  //               this.totalSize = this.totalSize + totalItem.BoxNum * totalItem.FQty
  //             })
  //           }
  //         })
  //       }
  //     },
  //     //暂存回退
  //     back(message) {
  //       console.log(message)
  //       switch(message) {
  //         case '回退': {
  //           this.isAdjust = true;
  //           this.buttonMessage = '出库'
  //           break
  //         }
  //         case '出库': {
  //           this.isAdjust = false;
  //           this.buttonMessage = '回退'
  //           break
  //         }
  //       }
  //     },
  //     remove(item,idx) {
  //       let flag = false
  //       let dindex = 0
  //       if(item.FSize) {
  //         this.plantList.forEach( (yItem, index) => {
  //           if(yItem.FOrderBillNo === item.FOrderBillNo &&
  //             yItem.FName === item.FName &&
  //             yItem.FQty === item.FQty &&
  //             yItem.FSize === item.FSize) {
  //             flag = true
  //             dindex = index
  //           }
  //         })
  //         if(flag) {
  //           this.plantList.splice(dindex,1)
  //           this.plantFSNList.splice(dindex,1)
  //         }
  //
  //       }else {
  //         this.packList.forEach( (yItem, index) => {
  //           if(yItem.FOrderBillNo === item.FOrderBillNo &&
  //             yItem.FName === item.FName && yItem.FQty === item.FQty) {
  //             flag = true
  //             dindex = index
  //           }
  //         })
  //         if(flag) {
  //           this.packList.splice(dindex,1)
  //           this.packFSNList.splice(dindex,1)
  //         }
  //       }
  //       this.finalList.splice(idx,1)
  //     },
  //     broadcastBackInfo (result) {
  //       console.log(result)
  //       let packCode = result.split('[')
  //       if( packCode[0] === 'L' || packCode[0] === 'P') {
  //         if(!this.isAdjust) {
  //           let flag1 = false;
  //           this.fsn = packCode[1];
  //           console.log(this.fsn)
  //           console.log(this.FDestinationList)
  //           this.packFSNList.forEach( item => {
  //             if(item.FSN === this.fsn) {
  //               flag1 = true;
  //               uni.showModal({
  //                 content: '物料重复，请重新扫描!',
  //                 showCancel: false
  //               })
  //             }
  //           })
  //           this.plantFSNList.forEach( tItem => {
  //             if(tItem.FSN === this.fsn) {
  //               flag1 = true;
  //               uni.showModal({
  //                 content: '物料与出库托盘号重复，请重新扫描!',
  //                 showCancel: false
  //               })
  //             }
  //           })
  //           if(!flag1) {
  //             let tmpData = '<FSN>' + this.fsn + '</FSN>'
  //             tmpData += '<FType>'+ 1 +'</FType>'
  //             uni.request({
  //               url: mainUrl,
  //               method: 'POST',
  //               data: combineRequsetData('Bao_SN', tmpData),
  //               header:{
  //                 'Content-Type':'text/xml; charset=utf-8'
  //               },
  //               success: (res) => {
  //                 console.log(res)
  //                 if(res.data[0].code) {
  //                   uni.showToast({
  //                     title: res.data[0].code,
  //                     icon: 'none',
  //                     mask: true,
  //                     duration: 1500
  //                   })
  //                 }else {
  //                   this.packList.push({
  //                     FSN: res.data[0].FSN,
  //                     FOrderBillNo: res.data[0].FOrderBillNo,
  //                     FName: res.data[0].FName,
  //                     FCOLOR: res.data[0].FCOLOR,
  //                     FQty: res.data[0].FQty,
  //                     BoxNum: 1,
  //                     FDestination: res.data[0].FDestination
  //                   })
  //                   this.packFSNList.push({
  //                     FSN: res.data[0].FSN
  //                   })
  //                 }
  //               },
  //               fail: (err) => {
  //                 console.log(err)
  //               },
  //               complete: () => {
  //                 this.tempPackList = this.packList.reduce((total, cur, index) => {
  //                   let hasValue = total.findIndex(current => {
  //                     return current.FOrderBillNo === cur.FOrderBillNo && current.FName === cur.FName && current.FQty === cur.FQty
  //                   })
  //                   if(hasValue === -1) {
  //                     total.push({
  //                       ...cur,
  //                       BoxNum: 1
  //                     })
  //                   }
  //                   if(hasValue !== -1) {
  //                     total[hasValue].BoxNum = total[hasValue].BoxNum + cur.BoxNum
  //                   }
  //                   return total
  //                 }, [])
  //                 this.tempPackList.push(...this.tempPlantList)
  //                 this.finalList = this.tempPackList
  //               }
  //             })
  //           }
  //         }else {
  //           let backObj = {}
  //           this.fsn = packCode[1];
  //           let tmpData = '<FSN>' + this.fsn + '</FSN>'
  //           tmpData += '<FType>'+ 0 +'</FType>'
  //           uni.request({
  //             url: mainUrl,
  //             method: 'POST',
  //             data: combineRequsetData('Bao_SN', tmpData),
  //             header:{
  //               'Content-Type':'text/xml; charset=utf-8'
  //             },
  //             success: (res) => {
  //               console.log(res)
  //               if(res.data[0].code) {
  //                 uni.showToast({
  //                   title: res.data[0].code,
  //                   icon: 'none',
  //                   mask: true,
  //                   duration: 1500
  //                 })
  //               }else {
  //                 backObj = {
  //                   FSN: res.data[0].FSN,
  //                   FOrderBillNo: res.data[0].FOrderBillNo,
  //                   FName: res.data[0].FName,
  //                   FCOLOR: res.data[0].FCOLOR,
  //                   FQty: res.data[0].FQty,
  //                   BoxNum: 1,
  //                   FDestination: res.data[0].FDestination
  //                 }
  //
  //               }
  //             },
  //             fail: (err) => {
  //               console.log(err)
  //             },
  //             complete: () => {
  //               let BoxNum = 0
  //               this.packFSNList = this.packFSNList.filter( item => item.FSN !== backObj.FSN)
  //               this.packList = this.packList.filter( item => item.FSN !== backObj.FSN)
  //               this.finalList.forEach(item => {
  //                 if(item.FOrderBillNo === backObj.FOrderBillNo &&
  //                   item.FName === backObj.FName && item.FQty === backObj.FQty) {
  //                   item.BoxNum = item.BoxNum - backObj.BoxNum
  //                   BoxNum =  item.BoxNum
  //                 }
  //               })
  //               if(BoxNum<=0) {
  //                 this.finalList = []
  //                 uni.showToast({
  //                   title: '已没有可退的数据！',
  //                   icon: 'none',
  //                   mask: true,
  //                   duration: 1500
  //                 })
  //               }
  //               console.log(BoxNum)
  //             }
  //           })
  //
  //         }
  //
  //       }else {
  //         let plantCode = packCode.toString().split(']')
  //         console.log(this.isAdjust)
  //         if(plantCode[1]) {
  //           if(!this.isAdjust) {
  //             let flag2 = false;
  //             this.fsn = plantCode[1]
  //             console.log(this.FDestinationList)
  //             this.plantList.forEach( x =>{
  //               this.plantFSNList.forEach(item => {
  //                 if(item.FSN === x.FSN) {
  //                   flag2 = true;
  //                 }
  //               })
  //             })
  //             if(!flag2) {
  //               let tmpData = '<FPack>' + this.fsn + '</FPack>'
  //               tmpData += '<FType>'+ 1 +'</FType>'
  //               uni.request({
  //                 url: mainUrl,
  //                 method: 'POST',
  //                 data: combineRequsetData('Bao_Pack_SN', tmpData),
  //                 header:{
  //                   'Content-Type':'text/xml; charset=utf-8'
  //                 },
  //                 success: (res) => {
  //                   console.log(res)
  //                   let tempList =[];
  //                   if(res.data[0].code) {
  //                     uni.showToast({
  //                       title: res.data[0].code,
  //                       icon: 'none',
  //                       mask: true,
  //                       duration: 1500
  //                     })
  //                   }else {
  //                     tempList = res.data
  //                     tempList.forEach( item => {
  //                       this.plantList.push({
  //                         FSN: item.FSN,
  //                         FOrderBillNo: item.FOrderBillNo,
  //                         FName: item.FName,
  //                         FCOLOR: item.FCOLOR,
  //                         BoxNum: 1,
  //                         FQty: item.FQty,
  //                         FSize: plantCode[0],
  //                         FDestination: item.FDestination
  //                       })
  //                     })
  //                     this.plantList.forEach( item => {
  //                       this.plantFSNList.push({
  //                         FSN: item.FSN,
  //                       })
  //                     })
  //                     this.tempPlantList = this.plantList.reduce((total, cur, index) => {
  //                       let hasValue = total.findIndex(current => {
  //                         return current.FOrderBillNo === cur.FOrderBillNo &&
  //                           current.FName === cur.FName &&
  //                           current.FQty === cur.FQty && current.FSize === cur.FSize
  //                       })
  //                       if(hasValue === -1) {
  //                         total.push({
  //                           ...cur,
  //                           BoxNum: 1
  //                         })
  //                       }
  //                       if(hasValue !== -1) {
  //                         total[hasValue].BoxNum = total[hasValue].BoxNum + cur.BoxNum
  //                       }
  //                       return total
  //                     }, [])
  //                     this.tempPlantList.push(...this.tempPackList)
  //                     this.finalList = this.tempPlantList
  //                   }
  //                 },
  //                 fail: (err) => {
  //                 },
  //                 complete: () => {
  //                 }
  //               })
  //             }else{
  //               uni.showModal({
  //                 content: '物料重复，请重新扫描!',
  //                 showCancel: false
  //               })
  //             }
  //           }else {
  //             let saveList = []
  //             let saveFSNList = []
  //             this.fsn = plantCode[1]
  //             console.log(this.fsn)
  //             let tmpData = '<FPack>' + this.fsn + '</FPack>'
  //             tmpData += '<FType>'+ 0 +'</FType>'
  //             uni.request({
  //               url: mainUrl,
  //               method: 'POST',
  //               data: combineRequsetData('Bao_Pack_SN', tmpData),
  //               header:{
  //                 'Content-Type':'text/xml; charset=utf-8'
  //               },
  //               success: (res) => {
  //                 console.log(res)
  //                 let tempList =[];
  //                 if(res.data[0].code) {
  //                   uni.showToast({
  //                     title: res.data[0].code,
  //                     icon: 'none',
  //                     mask: true,
  //                     duration: 1500
  //                   })
  //                 }else {
  //                   tempList = res.data
  //                   tempList.forEach( item => {
  //                     saveList.push({
  //                       FSN: item.FSN,
  //                       FOrderBillNo: item.FOrderBillNo,
  //                       FName: item.FName,
  //                       FCOLOR: item.FCOLOR,
  //                       BoxNum: 1,
  //                       FQty: item.FQty,
  //                       FSize: plantCode[0],
  //                       FDestination: item.FDestination
  //                     })
  //                   })
  //                   saveList.forEach( item => {
  //                     saveFSNList.push({
  //                       FSN: item.FSN,
  //                     })
  //                   })
  //                 }
  //               },
  //               fail: (err) => {
  //               },
  //               complete: () => {
  //                 this.plantFSNList = this.plantFSNList.filter(item => saveFSNList.find(_item => item.FSN !== _item.FSN))
  //                 this.plantList = this.plantList.filter(item => saveList.find(_item => item.FSN !== _item.FSN))
  //                 this.finalList = this.finalList.filter( item => saveList.find(_item => item.FOrderBillNo !== _item.FOrderBillNo &&
  //                   item.FName !== _item.FName &&
  //                   item.FQty !== _item.FQty &&
  //                   item.FSize !== _item.FSize))
  //               }
  //             })
  //           }
  //         }
  //       }
  //       setTimeout(()=>{
  //         let flag =false
  //         this.packList.forEach(item => {
  //           this.plantList.forEach(x => {
  //             if(item.FDestination !== x.FDestination) {
  //               flag = true
  //             }
  //           })
  //         })
  //         if(flag) {
  //           uni.showModal({
  //             content: '目的地不一致，请移除数据!',
  //             showCancel: false
  //           })
  //           this.finalList = this.tempPackList.filter( item => this.tempPlantList.find(_item => item.FDestination === _item.FDestination))
  //         }
  //         this.totalBoxNum = 0
  //         this.totalSize = 0
  //         this.finalList.forEach( totalItem => {
  //           this.totalBoxNum = this.totalBoxNum + totalItem.BoxNum
  //           this.totalSize = this.totalSize + totalItem.BoxNum * totalItem.FQty
  //         })
  //       },500)
  //     },
  //     submit(status) {
  //       if(status === 0) {
  //         this.FInterID = this.FInterID ? this.FInterID : 0
  //         this.FBillNO = this.FBillNO ? this.FBillNO : ''
  //         this.$refs.popup.close()
  //         this.packFSNList.push(...this.plantFSNList)
  //         let temp = {
  //           items: this.packFSNList
  //         }
  //         console.log(temp)
  //         let tmpData = '<FJSON>' + JSON.stringify(temp) + '</FJSON>'
  //         tmpData += '<FInterID>'+ this.FInterID +'</FInterID>'
  //         tmpData += '<FBillNO>' + this.FBillNO + '</FBillNO>'
  //         tmpData += '<FNO>' + '' + '</FNO>'
  //         console.log(tmpData)
  //         uni.request({
  //           url: mainUrl,
  //           method: 'POST',
  //           data: combineRequsetData('Bao_Out', tmpData),
  //           header:{
  //             'Content-Type':'text/xml; charset=utf-8'
  //           },
  //           success: (res) => {
  //             console.log(res)
  //             if(res.statusCode === 200) {
  //               uni.showToast({
  //                 title: '暂存成功!',
  //                 icon: 'success',
  //                 mask: true,
  //                 duration: 1500
  //               })
  //               setTimeout(() => {
  //                 uni.navigateBack({
  //                   url: './list'
  //                 })
  //               },3000)
  //             }
  //           },
  //           fail: (err) => {
  //           },
  //           complete: () => {
  //
  //           }
  //         })
  //       }else {
  //         this.$refs.popup.open()
  //       }
  //     },
  //     close () {
  //       this.$refs.popup.close()
  //     },
  //     confirm () {
  //       this.FInterID = this.FInterID ? this.FInterID : 0
  //       this.FBillNO = this.FBillNO ? this.FBillNO : ''
  //       this.packFSNList.push(...this.plantFSNList)
  //       let temp = {
  //         items: this.packFSNList
  //       }
  //       let tmpData = '<FJSON>' + JSON.stringify(temp) + '</FJSON>'
  //       tmpData += '<FInterID>'+ this.FInterID +'</FInterID>'
  //       tmpData += '<FBillNO>' + this.FBillNO + '</FBillNO>'
  //       tmpData += '<FNO>' + this.FNO + '</FNO>'
  //       console.log(tmpData)
  //       uni.request({
  //         url: mainUrl,
  //         method: 'POST',
  //         data: combineRequsetData('Bao_Out', tmpData),
  //         header:{
  //           'Content-Type':'text/xml; charset=utf-8'
  //         },
  //         success: (res) => {
  //           console.log(res)
  //           if(res.statusCode === 200) {
  //             uni.showToast({
  //               title: '出库成功!',
  //               icon: 'success',
  //               mask: true,
  //               duration: 1500
  //             })
  //             this.$refs.popup.close()
  //             setTimeout(() => {
  //               uni.navigateBack({
  //                 url: './list'
  //               })
  //             },3000)
  //           }
  //         },
  //         fail: (err) => {
  //         },
  //         complete: () => {
  //
  //         }
  //       })
  //     },
  //   }
  // }
</script>

<style>
  .container {
    display: flex;
    flex-direction: row;
    padding: 0 0 0 10px;
    font-size: 14px;
    line-height: 24px;
    background-color: #F0F0F0;
  }
  .item {
    border-bottom: 1px solid #CCCCCC;
    flex: 1;
    justify-content: space-between;
  }
  .item .content{
    width: calc(100% - 10px);
    padding: 10px 10px 10px 0;
    display: flex;
    flex-direction: column;
  }
  .wrap-container {
    display: flex;
    flex-direction: row;
    padding: 0 0 0 10px;
    font-size: 14px;
    line-height: 24px;
    background-color: #FFFFFF;
  }
  .removeBar{
    width: 48rpx;
    height: 48rpx;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FF0000;
    color: #FFFFFF;
  }
  .scroll-x{
    max-width: 100%;
    font-size: 14px;
    text-align: center;
    line-height: 60rpx;
    display: inline-block;
    border-bottom: 1px solid #CCCCCC;
    background-color: #F0F0F0;
  }
  .scroll-x-p  view{
    width: 25%;
    height: 48rpx;
    font-size: 14px;
    text-align: center;
    line-height: 48rpx;
    display: inline-block;
  }
  .x{
    flex-wrap: nowrap;
    white-space: nowrap;
  }
</style>
