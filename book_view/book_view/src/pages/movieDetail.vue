<!--电影详情页-->
<template lang="html">
  <div class="container">
    <div>
      <movie-index-header></movie-index-header>   <!--  展示引入的header组件 -->
    </div>
    <div class="contentMain">
      <div class="">
        <h1>{{detail.movieName}}</h1>
        <div class="viewNum">下载次数：{{detail.movieNumDownload}}</div>
      </div>
      <div class="">
        <button v-on:click=movieDownload()>点击下载</button>
      </div>
      <div>
        <img class="headerImg" v-bind:src=detail.movieImg>
      </div>
      <div v-on:click="support()" class="btnPosition">
        <div class="SupportBtn">点赞
          <div>{{detail.movieNumSuppose}}</div>
        </div>
      </div>
    </div>
    <div>
      <comment v-bind:movie_id="movie_id"></comment>
    </div>
    <div>
      <common-footer></common-footer>  <!--  展示引入的footer组件 -->
    </div>
  </div>
</template>
<script>
  import MovieIndexHeader from '../components/MovieIndexHeader'
  import CommonFooter from '../components/commonFooter'
  import Comment from '../components/Comment.vue'

  let movieId = 0
  export default {
    name: 'MovieDetail',
    data () {
      return {
        detail: [],
        movieId: ''
      }
    },
    components: {
      MovieIndexHeader,
      CommonFooter,
      Comment
    },

//  这里用于获取数据，需要获得主页推荐，主页新闻列表，主页电影列表
    created () {
//    this.$route.query.id
      this.movie_id = this.$route.query.id
      movieId = this.$route.query.id
      this.$http.post('http://localhost:3000/movie/detail', {id: movieId}).then((data) => {
        this.detail = data.body.data
//      console.log( data.body.data)
      })
    },
    methods: {
      support: function (event) {
        this.$http.post('http://localhost:3000/movie/support', {id: movieId}).then((data1) => {
          let data_temp = data1.body
          let that = this
          if (data_temp.status === 0) {
            this.$http.post('http://localhost:3000/movie/showNumber', {id: movieId}).then((data2) => {
              that.detail['movieNumSuppose'] = data2.body.data.movieNumSuppose
            })
          } else {
            alert(data_temp.message)
          }
        })
      },
//    电影下载
      movieDownload: function (event) {
        this.$http.post('http://localhost:3000/movie/download', {movie_id: movieId}).then((data1) => {
          if (data1.status == 1) {
            alert(data1.message)
          } else {
            window.location = data1.data
          }
        })
      }
    }
  }
</script>

<style lang="css" scoped>
  .headerImg {
    height: 200px;
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }

  .contentMain {
    padding-top: 150px;
  }

  .btnPosition {
    padding-left: 48%;
  }

  .SupportBtn {
    border: solid 1px #000;
    width: 60px;
  }

  .viewNum {
    font-size: 10px;
  }
</style>
