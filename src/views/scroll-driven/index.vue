<!-- https://craftofui.substack.com/p/scrolling-a-page-out-of-the-playbook -->
<script setup lang="ts">
import { onMounted } from 'vue'
defineOptions({
  name: 'scroll-driven',
})

onMounted(() => {})
/**
 * @description o 表示外层, i 表示内层, c 表示中间
 *
 * o i c i o
 * o i * i o
 * o i c i o
 */
const outerImages = Array.from(
  { length: 6 },
  (_, i) => `https://picsum.photos/id/${i + 666}/1920/1080`,
)

const innerImages = Array.from(
  { length: 6 },
  (_, i) => `https://picsum.photos/id/${i + 777}/1920/1080`,
)

const centerImages = Array.from(
  { length: 2 },
  (_, i) => `https://picsum.photos/id/${i + 889}/1920/1080`,
)

const masterImage = 'https://picsum.photos/id/888/1920/1080'
</script>
<template>
  <div h-100vh flex-center position-relative z-10>
    <h1 text-6vw font-bold>Scroll driven</h1>
  </div>
  <div class="wrapper" h-200vh box-border>
    <div w-full h-100vh flex-center sticky top-0 box-border>
      <div class="layer" grid grid-cols-5 grid-rows-3 gap-8 content-center mx-auto>
        <!-- 外层 -->
        <div class="outer ordinary">
          <div v-for="image in outerImages" :key="image" rounded-lg overflow-hidden>
            <img :src="image" alt="" w-full h-full object-cover />
          </div>
        </div>

        <!-- 内层 -->
        <div class="inner ordinary">
          <div v-for="image in innerImages" :key="image" rounded-lg overflow-hidden>
            <img :src="image" alt="" w-full h-full object-cover />
          </div>
        </div>

        <!-- 中间 -->
        <div class="center ordinary">
          <div v-for="image in centerImages" :key="image" rounded-lg overflow-hidden>
            <img :src="image" alt="" w-full h-full object-cover />
          </div>
        </div>

        <!-- 主图 -->
        <div class="master" rounded-lg>
          <img :src="masterImage" alt="" w-full h-full object-cover />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
:root {
  --power-1-out: linear(
    0 0%,
    0.0027 3.64%,
    0.0106 7.29%,
    0.0425 14.58%,
    0.0957 21.87%,
    0.1701 29.16%,
    0.2477 35.19%,
    0.3401 41.23%,
    0.5982 55.18%,
    0.7044 61.56%,
    0.7987 68.28%,
    0.875 75%,
    0.9297 81.25%,
    0.9687 87.5%,
    0.9922 93.75%,
    1 100%
  );
  --power-2-out: linear(
    0 0%,
    0.0036 9.62%,
    0.0185 16.66%,
    0.0489 23.03%,
    0.0962 28.86%,
    0.1705 34.93%,
    0.269 40.66%,
    0.3867 45.89%,
    0.5833 52.95%,
    0.683 57.05%,
    0.7829 62.14%,
    0.8621 67.46%,
    0.8991 70.68%,
    0.9299 74.03%,
    0.9545 77.52%,
    0.9735 81.21%,
    0.9865 85%,
    0.9949 89.15%,
    1 100%
  );
  --power-3-out: linear(
    0 0%,
    0.0029 13.8%,
    0.0184 21.9%,
    0.0339 25.51%,
    0.0551 28.81%,
    0.0827 31.88%,
    0.1168 34.76%,
    0.1962 39.57%,
    0.3005 44.02%,
    0.4084 47.53%,
    0.6242 53.45%,
    0.7493 57.93%,
    0.8495 62.97%,
    0.8888 65.67%,
    0.9213 68.51%,
    0.9629 73.9%,
    0.9876 80.16%,
    0.998 87.5%,
    1 100%
  );
  --sine: linear(
    0 0%,
    0.2861 18.47%,
    0.4829 32.08%,
    0.6437 44.52%,
    0.7712 56.07%,
    0.8722 67.47%,
    0.9115 73.02%,
    0.9434 78.49%,
    0.9682 83.91%,
    0.9859 89.3%,
    0.9965 94.66%,
    1 100%
  );
}

.ordinary,
.master {
  display: grid;
  // 继承父级 grid-cols-5、grid-rows-3
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;

  // 都占满整个父级的格子
  grid-column: 1 / -1;
  grid-row: 1 / -1;
}

// 外层奇数列在第一列，偶数列在最后一列
.outer > div:nth-of-type(odd) {
  grid-column: 1;
}
.outer > div:nth-of-type(even) {
  grid-column: -1;
}

// 内层奇数列在第二列，偶数列在倒数第二列
.inner > div:nth-of-type(odd) {
  grid-column: 2 / 3;
}
.inner > div:nth-of-type(even) {
  grid-column: 4 / 5;
}

// 中间
.center > div:nth-of-type(odd) {
  grid-area: 1 / 3;
}
.center > div:nth-of-type(even) {
  grid-area: 3 / 3;
}

// 主图位于中心
.master {
  grid-area: 2 / 3;

  position: relative;
  z-index: 1;
}

.wrapper {
  // 基于当前元素设置动画的滚动轴
  view-timeline: --wrapper;
}

.layer {
  width: 90%;
}

// 是否启用动画(默认启用)
@media (prefers-reduced-motion: no-preference) {
  // 是否支持新特性
  @supports (animation-timeline: scroll()) and (animation-range: 0 100%) {
    .master > img {
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;

      @apply rounded-lg;
      // 动画填充模式, both 表示动画在开始前和结束后都保持动画状态
      animation-fill-mode: both;
      animation-name: scale-x, scale-y;
      animation-timing-function: var(--power-2-out), var(--power-1-out);

      // 动画范围, entry 100% 表示容器到达顶部时, 动画开始, exit 0
      animation-range: entry 100% exit 0%;
      // 也可以使用 scroll(xxx)
      animation-timeline: --wrapper;
    }

    .ordinary {
      animation-timeline: --wrapper;
      animation-fill-mode: both;
      animation-name: fade, reveal;
      animation-timing-function: var(--sine), var(--power-3-out);
      animation-range: entry 100% exit 20%;
    }

    .outer > div {
      animation-name: fade, reveal, move-left;
      animation-range: entry 100% exit 0%;
    }

    .outer {
      animation-range: entry 100% exit 0%;
    }
    .inner {
      animation-range: entry 100% exit -20%;
    }
    .center {
      animation-range: entry 100% exit -40%;
    }
  }
}

@keyframes scale-x {
  // 在 0 - 10% 保持 100vw - 100px
  0%,
  10% {
    width: calc(100vw - 4rem);
  }
}
@keyframes scale-y {
  0%,
  10% {
    height: calc(100vh - 4rem);
  }
}

@keyframes fade {
  0%,
  55% {
    opacity: 0;
  }
}
@keyframes reveal {
  0%,
  30% {
    scale: 0;
  }
}
</style>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  position: relative;

  &::before {
    content: '';
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: radial-gradient(circle, #c2cd85, #fff 60%);
    background-repeat: no-repeat;
  }

  &::after {
    content: '';
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #fff 1px, transparent 1px),
      linear-gradient(to bottom, #fff 1px, transparent 1px);
    background-position: right -1px;
    background-size: 120px 120px;
    opacity: 0.3;
  }
}
</style>
