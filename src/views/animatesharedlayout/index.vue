<template>
  <div w-screen h-screen px-50 box-border overflow-y-auto bg-black>
    <div flex flex-col justify-center items-center text-white>
      <h1 text-15 font-bold font-caveat text-center mt-15>🫕 FLIP (First, Last, Invert, Play)</h1>
      <div flex items-center justify-between mt-5 gap-20 class="header">
        <div text-8 font-bold>
          Today
          <div text-3 text-gray-300>2025-01-06</div>
        </div>
        <img
          w-12
          h-12
          rounded-full
          src="https://avatars.githubusercontent.com/u/86712674?v=4"
          alt=""
        />
      </div>
      <div class="content">
        <div v-for="item in data" class="item">
          <div class="item-content">
            <div class="item-title">{{ item.title }}</div>
            <div class="item-intro">{{ item.intro }}</div>
            <!-- <div class="item-description">{{ item.description }}</div> -->
          </div>
          <div class="item-image">
            <img :src="item.image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = [
  {
    title: 'Strawberry',
    intro: 'Sweet red berries loved worldwide',
    description:
      'Strawberries are red berries rich in vitamin C and antioxidants, with a sweet and juicy taste that makes them one of the most popular fruits.',
    image:
      'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Broccoli',
    intro: 'Green superfood packed with nutrients',
    description:
      'Broccoli is a cruciferous vegetable rich in vitamin C and dietary fiber, with high nutritional value.',
    image: 'https://images.unsplash.com/photo-1583663848850-46af132dc08e',
  },
  {
    title: 'Carrot',
    intro: 'Orange root vegetable good for eyes',
    description:
      'Carrots are umbelliferous plants rich in carotene, beneficial for eye health and a common healthy vegetable.',
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979',
  },
  {
    title: 'Banana',
    intro: 'Yellow fruit rich in potassium',
    description:
      'Bananas are from the Musaceae family, rich in potassium and vitamin B6, energy-packed and a favorite fruit among athletes.',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224',
  },
  {
    title: 'Tomato',
    intro: 'Red fruit used in many dishes',
    description:
      'Tomatoes are from the Solanaceae family, rich in vitamin C and lycopene, helping boost immunity and antioxidation.',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa',
  },
  {
    title: 'Cucumber',
    intro: 'Cool and refreshing green vegetable',
    description:
      'Cucumbers are from the Cucurbitaceae family, rich in water and vitamins, helping maintain water balance and promote digestion.',
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6',
  },
  {
    title: 'Corn',
    intro: 'Sweet yellow grain on cob',
    description:
      'Corn is a grass family plant rich in dietary fiber and vitamin B, helping maintain gut health and provide energy.',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076',
  },
  {
    title: 'Potato',
    intro: 'Versatile starchy vegetable',
    description:
      'Potatoes are from the Solanaceae family, rich in carbohydrates and vitamin B, serving as a common energy source.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
  },
  {
    title: 'Onion',
    intro: 'Flavorful layered cooking essential',
    description:
      'Onions are from the Allium family, rich in vitamin C and sulfur compounds, helping boost immunity and antioxidation.',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510',
  },
  {
    title: 'Spinach',
    intro: 'Nutrient-rich dark leafy green',
    description:
      'Spinach is rich in iron and vitamins, a highly nutritious leafy green that helps prevent anemia and boost immunity.',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb',
  },
  {
    title: 'Pumpkin',
    intro: 'Orange squash popular in fall',
    description:
      'Pumpkins are packed with beta-carotene and fiber, promoting good vision and digestive health.',
    image: 'https://images.unsplash.com/photo-1506917728037-b6af01a7d403',
  },
  {
    title: 'Bell Pepper',
    intro: 'Colorful crunchy sweet peppers',
    description:
      'Bell peppers are rich in vitamin C and antioxidants, supporting immune function and skin health.',
    image: 'https://images.unsplash.com/photo-1509377244-b9820f59c12f',
  },
  {
    title: 'Cauliflower',
    intro: 'White cruciferous vegetable',
    description:
      'Cauliflower is low in calories but high in nutrients, particularly vitamin C and fiber, making it ideal for healthy diets.',
    image: 'https://images.unsplash.com/photo-1613743990305-736d763f3d70',
  },
  {
    title: 'Zucchini',
    intro: 'Versatile summer squash',
    description:
      'Zucchini is low in calories but high in antioxidants and fiber, promoting digestive health and weight management.',
    image: 'https://images.unsplash.com/photo-1583687355032-89b902b7335f',
  },
  {
    title: 'Mushroom',
    intro: 'Earthy fungus with meaty texture',
    description:
      'Mushrooms are low in calories but rich in protein and vitamins, supporting immune system function.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  },
  {
    title: 'Garlic',
    intro: 'Pungent aromatic cooking essential',
    description:
      'Garlic contains allicin and other beneficial compounds, supporting immune function and heart health.',
    image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383',
  },
  {
    title: 'Kale',
    intro: 'Curly dark green superfood',
    description:
      'Kale is a nutrient-dense superfood rich in vitamins K, A, and C, supporting bone health and immunity.',
    image: 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57',
  },
  {
    title: 'Beet',
    intro: 'Deep red root vegetable',
    description:
      'Beets are rich in nitrates and antioxidants, supporting blood pressure regulation and exercise performance.',
    image: 'https://images.unsplash.com/photo-1533231040102-5ec7a63e6d0a',
  },
  {
    title: 'Artichoke',
    intro: 'Edible flower buds',
    description:
      'Artichokes are rich in fiber and antioxidants, supporting liver health and digestion.',
    image: 'https://images.unsplash.com/photo-1551445523-324a0fdab051',
  },
  {
    title: 'Brussels Sprouts',
    intro: 'Mini cabbage-like vegetables',
    description:
      'Brussels sprouts are rich in fiber and vitamins, supporting immune function and cellular health.',
    image: 'https://images.unsplash.com/photo-1438118907704-7718ee9a191a',
  },
  {
    title: 'Cabbage',
    intro: 'Leafy head vegetable',
    description:
      'Cabbage is low in calories but high in vitamins and fiber, supporting digestive health and immunity.',
    image: 'https://images.unsplash.com/photo-1551460188-2f48af84543c',
  },
  {
    title: 'Blackberry',
    intro: 'Dark juicy berries full of antioxidants',
    description:
      'Blackberries are rich in antioxidants and vitamins, supporting brain function and immune health.',
    image: 'https://images.unsplash.com/photo-1615218370629-da07db3571a4',
  },
  {
    title: 'Pomegranate',
    intro: 'Ruby red seeds of vitality',
    description:
      'Pomegranates are loaded with powerful antioxidants and anti-inflammatory compounds.',
    image: 'https://images.unsplash.com/photo-1541344999736-83eca272f6fc',
  },
]
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.content .item {
  cursor: pointer;
  box-sizing: border-box;
  width: 18rem;
  height: 28rem;
  padding: 1rem;
  position: relative;
  z-index: 1;
  color: #fff;
  overflow: hidden;
  border-radius: 1rem;
  img {
    position: absolute;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item-content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  .item-title {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    font-weight: bold;
  }

  .item-intro {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .item-description {
    font-size: 0.8rem;
    font-weight: normal;
  }
}
</style>
