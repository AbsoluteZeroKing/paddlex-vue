<template>
  <div class="login-template">
    <div class="login-container">
      <div class="login-input-outer">
        <input class="login-input" type="password" />
        <span class="login-info">
          {{ loginInfo }}
        </span>
        <el-button class="login-button" @click="login">进入工程</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: "",
      loginInfo: "Input Your Key To Enter",
    };
  },
  methods: {
    login() {
      this.$message("ok");
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '../../styles/palette.styl'
input[type="password"]:focus{line-height: normal}

.login-template {
  display flex
  justify-content center
  align-items center
  width:100%
  height inherit
}
.login-container {
  position: relative
  .login-input-outer {
    display flex
    align-items center
    width:575px
    height 100px
    font-size 70px
    caret-color white;
    background-color $accentColor
    outline none
    border none
    border-radius 50px
  }
  .login-input {
    width:450px
    height 90px
    margin-left 40px
    font-size 70px
    caret-color white;
    background-color $accentColor
    outline none
    border none
  }
  .login-button{
    opacity 0
    height 0
    width 0
    border-radius 5px
    cursor default
    transition 0.3s
  }
  .login-info {
    display inline-block
    position absolute
    font-size 30px
    transform translate(50px,0)
    pointer-events:none;
    transition 0.3s
  }
  .login-input:focus+{
    .login-info {
      color $accentColor
      position absolute
      transform translate(50px,-80px)
      pointer-events:none;
    }
    .login-info+.login-button {
      opacity 1
      height 100px
      width 100px
      cursor pointer
      color $accentColor
      font-size 15px
      font-weight 550
      border-radius 50px
      transform translate(-10px)
      border-color $accentColor
    }
  }
}
</style>
