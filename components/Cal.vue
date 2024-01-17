<template>
  <div class="wrapper">
    <div class="flex flex-row w-[210px] text-center text-white">
      <div class="day">
        <p>Day</p>
      </div>
      <div class="month">
        <p>Month</p>
      </div>
      <div class="year">
        <p>Year</p>
      </div>
    </div>
    <div class="flex flex-row w-[210px] h-16 text-center text-white">
      <div class="day-val">
        <p>{{day}}</p>
      </div>
      <div class="month-val">
        <p>{{month}}</p>
      </div>
      <div class="year-val">
        <p>{{year}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
    day: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
})

</script>

<style>
.wrapper {
  font: 14px "Didact Gothic";
}

.year {
  font-weight: bold;
  float: left;
  position: relative;
  width: 33.33%;
  height: 100%;
  background: #5dade2;
}

.year-val {
  font-size: 50px;
  font-weight: 900;
  float: left;
  position: relative;
  width: 33.33%;
  height: 100%;
  background: #3498db;
}

.month {
  font-weight: bold;
  float: left;
  position: relative;
  width: 33.33%;
  height: 100%;
  background: #f6b517;
}

.month-val {
  font-size: 50px;
  font-weight: 900;
  float: left;
  position: relative;
  width: 33.33%;
  height: 100%;
  background: #f39c12;
}

.day {
  font-weight: bold;
  float: left;
  position: relative;
  width: 33.33%;
  height: 100%;
  background: #ec7063;
}

.day-val {
  font-size: 50px;
  font-weight: 900;
  float: left;
  position: relative;
  width: 33.33%;
  height: 100%;
  background: #e74c3c;
}
</style>