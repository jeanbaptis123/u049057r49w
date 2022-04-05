<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 infotext">
          <div class="text">
            <div class="row">
              <div class="col-12">
                <h1>Scrape websites without limits</h1>
              </div>
            </div>
            <ul>
              <li>Up to 50 000 datacenter proxies</li>
              <li>99% uptime guarantee</li>
              <li>Unlimited bandwidth</li>
            </ul>
            <div class="row">
              <div class="col-lg-5 col-12">
                <router-link
                  class="btn w-100" to="#!">
                  Start now
                </router-link>
              </div>
              <div class="col-lg-5 col-12">
                <button
                  id="playvideo"
                  class="lets-play btn-outline-jum w-100"
                  style="background-color: unset; display: flex;justify-content: center;"
                >
                  <img alt="" class="svg-inline--fa fa-play-circle fa-w-16"
                       src="@/assets/img/videoplay.svg" style="width: 20px; margin-right: 5px"/>
                  Welcome video
                </button>
              </div>
            </div>

            <div id="video-wrap"></div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>

</script>

<style scoped>

</style>
