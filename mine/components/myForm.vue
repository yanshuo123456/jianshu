<template>
  <div>
    <form class="new-comment" method="post">
      <slot></slot>
      <textarea name="comment-content" placeholder="写下你的评论" v-model="value"></textarea>
      <div class="write-function-block">
        <div class="emoji-modal-wrap">
          <a @click="isShow=!isShow"  class="emoji">
            <i class="fa fa-smile-o"></i>
          </a>
           <emoji @select="selectEmoji" v-show="isShow"></emoji>
          <div class="emoji-modal"></div>
        </div>
        <div class="hint">Ctrl+Enter发送</div>
        <a href="#" class="btn-send">发送</a>
        <a href="#" class="btn-cancel">取消</a>
      </div>
    </form>
  </div>
</template>
<script>
import emoji from "../components/emoji.vue";

export default {
  name: "app",
  data() {
    return {
      value: "",
      isShow: false
    };
  },
  methods: {
    selectEmoji(code) {
      this.showEmoji = false;
      this.value += code;
    },
    submit() {
      this.data.push(this.value);
      this.value = "";
    }
  },
  components: {
    emoji
  }
};
</script>
