<template>

    <div>
        <h1>{{title}}</h1>
        <input v-model="title">
    </div>
    <div>
        <input type="checkbox" id="선택" value="선택" v-model="checkedWebtoons">
        <label for="선택">선택</label>
        <input type="checkbox" id="선택-2" value="선택-2" v-model="checkedWebtoons">
        <label for="선택-2">선택-2</label>
        <br>
        <span>선택 보기 : {{ checkedWebtoons }} </span>
    </div>
  const rand = Math.floor(Math.random() *4);
        if (rand==4) rand=0;
        alert(this.data[rand]);
</template>

<script>
    export default {
        data() {
            return {
                title: "",
                checkedWebtoons:[],
            };
        },


    };
</script>
<style scoped>
</style>