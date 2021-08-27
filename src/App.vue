<template>
  <div id="app" style="height: 100vh">
    <amap :zoom="5" @map-click="onCloseClick">
      <amap-marker v-for="(student, key) in students" :key="key" :position="student.location" clickable @click="onMarkerClick(key)" />
      <amap-info-window v-if="active != null" :position="active != null ? students[active].location : null" :offset="[0, -50]" is-custom>
        <div class="info-window-content">
          <md-card>
            <md-card-header>
              <div class="md-title">有哪些人</div>
            </md-card-header>
            <md-card-content>
              <md-chip class="md-primary" v-for="(name, key) in getSameLocalStudents(active)" :key="key">{{ name }}</md-chip>
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
      if (key != this.active) {
        this.onCloseClick();
        new Promise((resolve) => setTimeout(resolve, 0)).then(() => {this.active = key});
      }
    },
    getSameLocalStudents (key) {
      const location = this.students[key].location;
      let students = [];
      for (let i = 0; i < this.students.length; i++) {
        if (JSON.stringify(this.students[i].location) == JSON.stringify(location))
          students.push(this.students[i].name);
      }
      return students;
    }
  },
  data() {
    return {
      active: null,
      students: [
        { name: "王子奕", location: [87.616848, 43.825592] },
        { name: "刘煜锟", location: [104.066541, 30.572269] },
        { name: "曾笑芙蓉", location: [104.066541, 30.572269] },
        { name: "谢可", location: [104.066541, 30.572269] },
        { name: "李畋昊", location: [106.551556, 29.563009] },
        { name: "刘浩然", location: [108.366543, 22.817002] },
        { name: "吴瑞洁", location: [108.366543, 22.817002] },
        { name: "刘佳璐", location: [110.198293, 20.044001] },
        { name: "欧阳翔", location: [113.264434, 23.129162] },
        { name: "刘思静", location: [113.576726, 22.270715] },
        { name: "刘家麟", location: [113.576726, 22.270715] },
        { name: "沈臻君", location: [113.014717, 25.770509] },
        { name: "彭思谏", location: [111.467791, 27.238892] },
        { name: "易森权", location: [112.944049, 27.829738] },
        { name: "李轩昂", location: [112.571997, 26.893230] },
        { name: "李珊蔓", location: [112.571997, 26.893230] },
        { name: "肖洞熙", location: [112.571997, 26.893230] },
        { name: "付东宸", location: [112.938814, 28.228209] },
        { name: "梁明康", location: [112.938814, 28.228209] },
        { name: "汤嘉豪", location: [112.938814, 28.228209] },
        { name: "阳潘承", location: [112.938814, 28.228209] },
        { name: "罗阳奕", location: [112.938814, 28.228209] },
        { name: "刘一莹", location: [112.938814, 28.228209] },
        { name: "余乐勤", location: [112.938814, 28.228209] },
        { name: "陈汉英", location: [112.938814, 28.228209] },
        { name: "黄艺霖", location: [115.858197, 28.682892] },
        { name: "贺尔斯", location: [120.699366, 27.994267] },
        { name: "周琪凯", location: [120.155070, 30.274084] },
        { name: "周子涵", location: [120.155070, 30.274084] },
        { name: "刘宏韬", location: [121.473701, 31.230416] },
        { name: "文炫钧", location: [121.473701, 31.230416] },
        { name: "阳鑫", location: [120.311910, 31.491169] },
        { name: "王政豪", location: [120.585315, 31.298886] },
        { name: "谢子麟", location: [120.585315, 31.298886] },
        { name: "陈彦松", location: [118.796877, 32.060255] },
        { name: "朱逸晨", location: [118.796877, 32.060255] },
        { name: "辛婉瑢", location: [118.796877, 32.060255] },
        { name: "李毅", location: [117.119999, 36.651216] },
        { name: "王子煊", location: [116.407526, 39.904030] },
        { name: "黄瑞英", location: [116.407526, 39.904030] },
        { name: "朱汝晴", location: [116.407526, 39.904030] },
        { name: "曾诗懿", location: [116.407526, 39.904030] },
        { name: "谭鑫鹏", location: [125.323544, 43.817071] },
        { name: "胡海帆", location: [126.661669, 45.742347] },
        { name: "谢燚", location: [126.661669, 45.742347] },
        { name: "嵇诗威", location: [112.454040, 34.619682] },
        { name: "李静怡", location: [118.758816, 30.940718] },
        { name: "李锦亮", location: [114.305392, 30.593098] },
        { name: "赵高翔", location: [114.305392, 30.593098] }
      ]
    };
  }
};
</script>