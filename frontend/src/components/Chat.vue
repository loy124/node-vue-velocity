<template>
  <div class="page-container">
    <div>
      
      <div>
        <div>
          <label>Message</label>
          <textarea
            v-model="textarea"
            disabled
            v-auto-scroll-bottom
          ></textarea>
        </div>
        <div>
          <label>Your Message</label> <input v-model="message"/>
          <button class="md-primary md-raised" @click="sendMessage()"
            >Submit</button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Chat",
  created() {
    // this.$socket.on("chat", (data) => {
    //   console.log(data);
    //   this.textarea += data.message + "\n";
    // });
  },
  data() {
    return { textarea: "", message: "" };
  },
  methods: {
    sendMessage() {
      // this.$socket.emit("chat", { message: this.message });
      // this.textarea += this.message + "\n";
      // this.message = "";
    },
  },
};
</script>
<style>
.md-app {
  height: 800px;
  border: 1px solid rgba(#000, 0.12);
}
.md-textarea {
  height: 300px;
}
</style>
