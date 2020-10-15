<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.base-info .info-title {
  color: #222;
}
.base-info .info-price {
  margin-top: 10px;
}
.base-info .info-price .n-price,
.base-info .info-price .o-price {
  font-size: 24px;
}
.base-info .info-price .n-price {
  color: var(--color-high-text);
}
.base-info .info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.base-info .info-price .discount {
  color: #fff;
  background-color: var(--color-high-text);
  font-size: 12px;
  padding: 2px 4px;
  border-radius: 6px;
  /* 用相对定位让它飘上去一点 */
  position: relative;
  top: -8px;
}
.info-other {
  margin-top: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
.info-service {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
}
.info-service-item {
  font-size: 13px;
}
.info-service-item img {
  width: 12px;
  height: 12px;
  font-size: 11px;
}
.info-service span {
  color: #222;
}
</style>