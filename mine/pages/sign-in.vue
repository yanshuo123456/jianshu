<template>
  <div class="sign">
    <!--logo-->
    <div class="logo">
      <nuxt-link to="/">
        <img src="~/assets/img/logo.png"/>
      </nuxt-link>
    </div>
    <!--主体部分-->
    <div class="main">
      <!--title-->
      <div class="title">
        <h4>
          <nuxt-link class="active" to="/sign-in">
            登录
          </nuxt-link>
          .
          <nuxt-link class to="/sign-up">
            注册
          </nuxt-link>
        </h4>
      </div>
      <!--from表单-->
      <div class="js-form">
        <form method="post">
          <div class="input-prepend">
            <input type="text" class="input-prepend" placeholder="手机号或者邮箱">
            <i class="fa fa-user"></i>
          </div>
          <div class="input-prepend input-password">
            <input type="text" class="input-prepend" placeholder="密码">
            <i class="fa fa-lock"></i>
          </div>
          <div class="remember">
            <input type="checkbox">
            <span>记住我</span>
          </div>
          <div class="help">
            <nuxt-link class="help" to="/">登录遇到问题？</nuxt-link>
          </div>
          <button class="sign-in-btn">登录</button>
        </form>
      </div>
      <!--第三方的登录-->
      <div class="more-sign">
        <p>社交账号登录</p>
        <ul>
          <li>
            <nuxt-link to="/">
              <i class="fa fa-weibo"></i>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="fa fa-weixin"></i>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="fa fa-qq"></i>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    //修改当前的默认模板为sign.vue
    //如果不写的话，默认是default.vue
    layout:'sign',
    //设置页面标题以及描述，关键字
    head:{
      title:'登录-简书',
      meta:[
        {charset:'utf-8'},
        {name:'keywords',content:'登录页面'},
        {name:'description',count:'登录简书'},
        {name:'autor',content:'包瑞'}

      ]
    },
    data(){
      return{

      }
    }
  }
</script>

<style scoped>

</style>
