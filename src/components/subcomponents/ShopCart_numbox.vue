<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input
        id="test"
        class="mui-input-numbox"
        type="number"
        :value="initcount"
        @change="CountChange"
        ref="numbox"
        readonly
      />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
    mounted(){
        mui('.mui-numbox').numbox();
    },
    methods: {
        CountChange(){//文本框数据被修改的时候
        this.$store.commit("Update",{
            id: this.goodsid,
            count: this.$refs.numbox.value
        })
        }
    },
    props:[
        "initcount",
        "goodsid"
    ]
}
</script>

<style lang="scss" scoped>
</style>
