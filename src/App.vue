<template>
  <div id="app" style="height: 100vh">
    <amap :zoom="5" @map-click="onCloseClick">
      <amap-marker v-for="(point, key) in points" :key="key" :position="point.location" clickable @click="onMarkerClick(key)" />
      <amap-info-window v-if="active != null" :position="active != null ? points[active].location : null" :offset="[0, -50]" is-custom>
        <div class="info-window-content">
          <md-card>
            <md-card-header>
              <div class="md-title">有哪些人</div>
            </md-card-header>
            <md-card-content>
              <md-chip class="md-primary" v-for="(name, key) in points[active].names" :key="key">{{ name }}</md-chip>
            </md-card-content>
            <md-card-actions>
              <md-button @click="onCloseClick()">Close</md-button>
            </md-card-actions>
          </md-card>
        </div>
      </amap-info-window>
    </amap>
  </div>
</template>

<script>
import Amap from "@amap/amap-vue/lib/amap";
import AmapMarker from "@amap/amap-vue/lib/marker";
import AmapInfoWindow from "@amap/amap-vue/lib/info-window";

export default {
  name: "App",
  components: {
    Amap,
    AmapMarker,
    AmapInfoWindow,
  },
  methods: {
    onCloseClick() {
      this.active = null;
    },
    onMarkerClick(key) {
      this.onCloseClick();
      new Promise((resolve) => setTimeout(resolve, 0)).then(() => {this.active = key});
    },
  },
  data() {
    return {
      active: null,
      points: [
        {
          location: [87.616848, 43.825592],
          names: ["王子奕"]
        },
        {
          location: [104.066541, 30.572269],
          names: ["刘煜锟", "曾笑芙蓉", "谢可"]
        },
        {
          location: [106.551556, 29.563009],
          names: ["李畋昊"]
        },
        {
          location: [108.366543, 22.817002],
          names: ["刘浩然", "吴瑞洁"]
        },
        {
          location: [110.198293, 20.044001],
          names: ["刘佳璐"]
        },
        {
          location: [113.264434, 23.129162],
          names: ["欧阳翔"]
        },
        {
          location: [113.576726, 22.270715],
          names: ["刘思静", "刘家麟"]
        },
        {
          location: [113.014717, 25.770509],
          names: ["沈臻君"]
        },
        {
          location: [111.467791, 27.238892],
          names: ["彭思谏"]
        },
        {
          location: [112.944049, 27.829738],
          names: ["易森权"]
        },
        {
          location: [112.571997, 26.893230],
          names: ["李轩昂", "李珊蔓", "肖洞熙"]
        },
        {
          location: [112.938814, 28.228209],
          names: ["付东宸", "梁明康", "汤嘉豪", "阳潘承", "罗阳奕", "刘一莹", "余乐勤", "陈汉英"]
        },
        {
          location: [115.858197, 28.682892],
          names: ["黄艺霖"]
        },
        {
          location: [120.699366, 27.994267],
          names: ["贺尔斯"]
        },
        {
          location: [120.155070, 30.274084],
          names: ["周琪凯", "周子涵"]
        },
        {
          location: [121.473701, 31.230416],
          names: ["刘宏韬", "文炫钧"]
        },
        {
          location: [120.311910, 31.491169],
          names: ["阳鑫"]
        },
        {
          location: [120.585315, 31.298886],
          names: ["王政豪", "谢子麟"]
        },
        {
          location: [118.796877, 32.060255],
          names: ["陈彦松", "朱逸晨", "辛婉瑢"]
        },
        {
          location: [117.119999, 36.651216],
          names: ["李毅"]
        },
        {
          location: [116.407526, 39.904030],
          names: ["王子煊", "黄瑞英", "朱汝晴", "曾诗懿"]
        },
        {
          location: [125.323544, 43.817071],
          names: ["谭鑫鹏"]
        },
        {
          location: [126.661669, 45.742347],
          names: ["胡海帆", "谢燚"]
        },
        {
          location: [112.454040, 34.619682],
          names: ["嵇诗威"]
        },
        {
          location: [118.758816, 30.940718],
          names: ["李静怡"]
        },
        {
          location: [114.305392, 30.593098],
          names: ["李锦亮", "赵高翔"]
        }
      ]
    };
  }
};
</script>