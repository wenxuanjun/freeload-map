<template>
  <v-app id="app">
    <v-app-bar app>
      <v-autocomplete v-model="value" class="mr-4" :items="names" label="要找哪个同学呢?" hide-no-data hide-details clearable solo rounded></v-autocomplete>
      <v-menu left bottom offset-y min-width="100" transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
        </template>
        <v-list close-on-click>
          <v-list-item link>
            <v-list-item-title @click="about = true">关于</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-dialog v-model="about" max-width="500">
      <v-card>
        <v-card-title>关于</v-card-title>
        <v-card-text>
          <div class="font-weight-black">这是1808班的蹭饭地图</div>
          <div class="text-caption my-1">制作人：文炫钧、周子涵</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="about = false">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-app-bar>
    <v-main>
    <amap :zoom="5">
      <amap-marker v-for="(name, key) in names" :key="key" :position="locations[key]" clickable @click="onMarkerClick(key)" />
      <amap-info-window v-if="active != null" :position="active != null ? locations[active] : null" :offset="[0, -50]" is-custom>
        <div class="info-window-content">
          <v-card min-width="180">
            <v-card-title>有哪些人</v-card-title>
            <v-card-text>
              <v-chip v-for="(name, key) in getSameLocalNames(active)" :key="key" class="mr-1 mb-1" color="primary" @click="openDialog(name)">{{ name }}</v-chip>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="onCloseClick()">关闭</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </amap-info-window>
    </amap>
    <v-dialog v-if="dialog" v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title>{{ value }}</v-card-title>
        <v-card-text>我是{{ value }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import Amap from "@amap/amap-vue/lib/amap";
import AmapMarker from "@amap/amap-vue/lib/marker";
import AmapInfoWindow from "@amap/amap-vue/lib/info-window";
import { mdiMenu } from '@mdi/js'

export default {
  name: "App",
  components: {
    Amap,
    AmapMarker,
    AmapInfoWindow,
  },
  created() {
    try {
      document.body.removeChild(document.getElementById("app-loader"));
      this.$vuetify.theme.dark = this.settings.theme.value;
    } catch {
      console.log("Have a nice day!")
    }
  },
  methods: {
    onCloseClick () {
      this.active = null;
    },
    onMarkerClick (key) {
      if (key != this.active) {
        this.onCloseClick();
        new Promise((resolve) => setTimeout(resolve, 0)).then(() => {
          this.active = key;
        });
      }
    },
    openDialog (name) {
      this.value = name;
      this.dialog = true;
    },
    getSameLocalNames (key) {
      const location = this.locations[key];
      let names = [];
      for (let i = 0; i < this.locations.length; i++) {
        if (JSON.stringify(this.locations[i]) == JSON.stringify(location))
          names.push(this.names[i]);
      }
      return names;
    }
  },
  watch: {
    value () {
      if (this.value) this.dialog = true;
    }
  },
  data() {
    return {
      active: null,
      value: null,
      dialog: false,
      about: false,
      icon: mdiMenu,
      names: [
        "王子奕",
        "刘煜锟",
        "曾笑芙蓉",
        "谢可",
        "李畋昊",
        "刘浩然",
        "吴瑞洁",
        "刘佳璐",
        "欧阳翔",
        "刘思静",
        "刘家麟",
        "沈臻君",
        "彭思谏",
        "易森权",
        "李轩昂",
        "李姗蔓",
        "肖洞熙",
        "付东宸",
        "梁明康",
        "汤嘉豪",
        "阳潘承",
        "罗阳奕",
        "刘一莹",
        "余乐勤",
        "陈汉英",
        "黄艺霖",
        "贺尔斯",
        "周琪凯",
        "周子涵",
        "刘宏韬",
        "文炫钧",
        "阳鑫",
        "王政豪",
        "谢子麟",
        "陈彦松",
        "朱逸晨",
        "辛婉瑢",
        "李毅",
        "王子煊",
        "黄瑞英",
        "朱汝晴",
        "曾诗懿",
        "谭鑫鹏",
        "胡海帆",
        "谢燚",
        "嵇诗威",
        "李静怡",
        "李锦亮",
        "赵高翔"
      ],
      locations: [
        [87.616848, 43.825592],
        [104.066541, 30.572269],
        [104.066541, 30.572269],
        [104.066541, 30.572269],
        [106.551556, 29.563009],
        [108.366543, 22.817002],
        [108.366543, 22.817002],
        [110.198293, 20.044001],
        [113.264434, 23.129162],
        [113.576726, 22.270715],
        [113.576726, 22.270715],
        [113.014717, 25.770509],
        [111.467791, 27.238892],
        [112.944049, 27.829738],
        [112.571997, 26.89323],
        [112.571997, 26.89323],
        [112.571997, 26.89323],
        [112.938814, 28.228209],
        [112.938814, 28.228209],
        [112.938814, 28.228209],
        [112.938814, 28.228209],
        [112.938814, 28.228209],
        [112.938814, 28.228209],
        [112.938814, 28.228209],
        [112.938814, 28.228209],
        [115.858197, 28.682892],
        [120.699366, 27.994267],
        [120.15507, 30.274084],
        [120.15507, 30.274084],
        [121.473701, 31.230416],
        [121.473701, 31.230416],
        [120.31191, 31.491169],
        [120.585315, 31.298886],
        [120.585315, 31.298886],
        [118.796877, 32.060255],
        [118.796877, 32.060255],
        [118.796877, 32.060255],
        [117.119999, 36.651216],
        [116.407526, 39.90403],
        [116.407526, 39.90403],
        [116.407526, 39.90403],
        [116.407526, 39.90403],
        [125.323544, 43.817071],
        [126.661669, 45.742347],
        [126.661669, 45.742347],
        [112.45404, 34.619682],
        [118.758816, 30.940718],
        [114.305392, 30.593098],
        [114.305392, 30.593098]
      ],
    };
  },
};
</script>