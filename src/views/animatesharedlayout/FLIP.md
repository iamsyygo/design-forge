# 🫕 FLIP (First, Last, Invert, Play)

在 JavaScript 中实现类似 Framer Motion 的 layoutId 功能，我们可以使用 FLIP (First, Last, Invert, Play) 动画技术。

```vue
<template>
  <div class="container">
    <!-- 列表视图 -->
    <div class="grid">
      <div
        v-for="item in data"
        :key="item.title"
        class="item"
        @click="openDetail(item)"
        :data-flip-key="item.title"
      >
        <div class="item-content">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-intro">{{ item.intro }}</div>
        </div>
        <div class="item-image">
          <img :src="item.image" alt="" />
        </div>
      </div>
    </div>

    <!-- 详情视图 -->
    <div v-if="selectedItem" class="detail" @click="closeDetail">
      <div class="detail-content" :data-flip-key="selectedItem.title">
        <div class="detail-title">{{ selectedItem.title }}</div>
        <div class="detail-image">
          <img :src="selectedItem.image" alt="" />
        </div>
        <div class="detail-description">{{ selectedItem.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Flip } from './flip'

const selectedItem = ref(null)
let flipper = null

onMounted(() => {
  flipper = new Flip({
    duration: 0.6,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  })
})

const openDetail = (item) => {
  flipper.read() // 记录初始状态
  selectedItem.value = item
  nextTick(() => {
    flipper.play() // 执行动画
  })
}

const closeDetail = () => {
  flipper.read()
  selectedItem.value = null
  nextTick(() => {
    flipper.play()
  })
}
</script>
```

然后创建 FLIP 动画管理类:

```ts
export class Flip {
  private elements: Map<
    string,
    {
      element: HTMLElement
      rect: DOMRect
    }
  > = new Map()

  constructor(
    private options = {
      duration: 0.6,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  ) {}

  read() {
    // 记录所有带 data-flip-key 属性元素的初始状态
    document.querySelectorAll('[data-flip-key]').forEach((el) => {
      const key = el.getAttribute('data-flip-key')
      if (key) {
        this.elements.set(key, {
          element: el as HTMLElement,
          rect: el.getBoundingClientRect(),
        })
      }
    })
  }

  play() {
    // 对所有记录的元素执行 FLIP 动画
    document.querySelectorAll('[data-flip-key]').forEach((el) => {
      const key = el.getAttribute('data-flip-key')
      if (!key) return

      const previous = this.elements.get(key)
      if (!previous) return

      const currentRect = el.getBoundingClientRect()
      const prevRect = previous.rect

      // 计算位移
      const deltaX = prevRect.left - currentRect.left
      const deltaY = prevRect.top - currentRect.top
      const deltaW = prevRect.width / currentRect.width
      const deltaH = prevRect.height / currentRect.height

      // 应用动画
      el.animate(
        [
          {
            transform: `
            translate(${deltaX}px, ${deltaY}px) 
            scale(${deltaW}, ${deltaH})
          `,
          },
          {
            transform: 'none',
          },
        ],
        {
          duration: this.options.duration * 1000,
          easing: this.options.easing,
        },
      )
    })

    // 清除记录
    this.elements.clear()
  }
}
```

这个实现的关键点：

- 使用 data-flip-key 属性标记需要动画的元素
- 在状态改变前记录元素位置
- 状态改变后计算位移差异
- 使用 Web Animations API 执行动画

主要特点：

- 支持位置和尺寸的过渡
- 可配置动画时长和缓动函数
- 支持多个元素同时动画

注意事项：

- 需要确保过渡前后使用相同的 data-flip-key
- 建议在动画期间禁用用户交互
- 可能需要处理一些边缘情况（如元素被删除等）

这只是一个基础实现，实际使用时可能需要添加更多功能：

- 支持更多变换属性（如透明度、旋转等）
- 添加动画完成回调
- 处理动画中断
- 优化性能
