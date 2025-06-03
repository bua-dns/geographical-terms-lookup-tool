<script setup>
import { ref } from 'vue'


const isExpanded = ref(false)
const toggleContent = () => {
  isExpanded.value = !isExpanded.value
}

</script>

<template>
  <div class="info-box">
    <div class="info-box-header" @click="toggleContent">
        <h2>
            <slot name="label" />
        </h2>
        <span v-if="!isExpanded" class="icon plus"><img src="../assets/icons/plus-square.svg" alt="show more" /></span>
        <span v-if="isExpanded" class="icon plus"><img src="../assets/icons/minus-square.svg" alt="show more" /></span>
    </div>
    <transition name="collapse">
        <div class="info-box-content" v-if="isExpanded">
            <slot name="content" />
        </div>
    </transition>
  </div>
</template>

<style lang="scss">
.info-box {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  .icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    img {
      width: 100%;
      height: auto;
    }
  }
  .info-box-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    h2 {
      margin: 0;
      font-size: 1.125rem;
    }
    .icon {
      width: 24px;
      height: 24px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .info-box-content {
    margin-top: .75rem;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #333;
  }
}
// animation for expanding/collapsing
.collapse-enter-active,
.collapse-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
}

.collapse-enter-to,
.collapse-leave-from {
  max-height: 500px; // Adjust if needed
  opacity: 1;
}
</style>