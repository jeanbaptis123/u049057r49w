<template>
  <main>
    <Hero/>

    <div class="bottomjumbo">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div id="services" class="section-title services">
              <h2>Our services</h2>
              <p>for your proxy needs</p>
              <OurServices/>

            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import '@/assets/css/home.css';
import Hero from '@/components/home/Hero.vue';
import OurServices from '@/components/home/OurServices.vue'; </script>
