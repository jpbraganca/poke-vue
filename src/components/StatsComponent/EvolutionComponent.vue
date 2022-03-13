<template>
  <div class="main-frame">
    <img src="https://picsum.photos/122/122" class="space-items" />
    <Icon icon="akar-icons:arrow-right" width="48px" height="48px" class="space-items" />
    <img src="https://picsum.photos/122/122" class="space-items" />
    <Icon icon="akar-icons:arrow-right" width="48px" height="48px" class="space-items" />
    <img src="https://picsum.photos/122/122" class="space-items" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  components: {
    Icon,
  }
})
</script>

<style scoped>
.space-items {
  margin-right: 10px;
}

.main-frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
}

@media (max-width: 768px) {
  .main-frame > img {
    width: 80px;
    height: 80px;
  }

  .main-frame > Icon {
    width: 24px;
    height: 24px;
  }
}

@media (min-width: 992px) {
  .main-frame > img {
    width: 122px;
    height: 122px;
  }

  .main-frame > Icon {
    width: 48px;
    height: 48px;
  }
}
</style>