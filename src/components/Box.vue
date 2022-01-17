<template>
<div  class = "box" v-bind:style="{ width: width + 'px', height: height + 'px' }">
    
</div>
</template>
<script>
export default{
  props: {
color: {type: String, default: ""}
  },
  data() { 
    return {
      width: 40, 
      height: 80 
    };
  }
};
</script>
<style scoped>
.box {
  border: 1px solid #000;
}
.color_1 {
  background-color: blueviolet;
}
</style>