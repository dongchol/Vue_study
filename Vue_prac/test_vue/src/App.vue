<template>
  <div id="jdc_prac" class="demo">
    <p> 값 선택</p>
    <select v-model="select_box">
      <option
        v-for="(item, index) in selectList"
        :key="index"
        :value="item.value"
        >{{ item.name }}</option
      >
    </select>
    <br>
    <br>
    <span> 출력 값: {{ select_box }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select_box: "",
      selectList: [
        { name: "선택 창", value: "" },
        { name: "1", value: "첫번째 값" },
        { name: "2", value: "두번째 값" },
        { name: "3", value: "세번째 값" },
        { name: "4", value: "네번째 값" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>