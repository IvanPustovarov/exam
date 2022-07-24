<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="selectOption(option)"
      >
        {{ option.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.options[0].text ? this.options[0].text : null,
      open: false,
    };
  },
  mounted() {},
  methods: {
    selectOption(option) {
      this.selected = option.text;
      this.open = false;
      this.$emit("input", option.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 16rem;
  text-align: left;
  outline: none;
  height: 2rem;
  line-height: 2rem;
  .selected {
    background-color: #597f94;
    border-radius: 6px;
    border: 1px solid #bebfc0;
    color: #fff;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
  }
  .selected.open {
    border: 1px solid #80a8e8;
    border-radius: 6px 6px 0px 0px;
  }
  .selected:after {
    position: absolute;
    content: "";
    top: 1rem;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #fff transparent transparent transparent;
  }
  .items {
    color: #fff;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid #80a8e8;
    border-left: 1px solid #80a8e8;
    border-bottom: 1px solid #80a8e8;
    position: absolute;
    background-color: #7b97a6;
    left: 0;
    right: 0;
    z-index: 1;
    div {
      color: #fff;
      padding-left: 1em;
      cursor: pointer;
      user-select: none;
    }
    div:hover {
      background-color: #7fbea9;
    }
  }
  .selectHide {
    display: none;
  }
}
</style>
