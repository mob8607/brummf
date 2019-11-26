<template>
  <div>
    <h1>CMS Wrapper</h1>
    <p v-if="isLoading">Loading...</p>
    <pre style="text-align: left">
      {{cmsComponents}}
    </pre>
  </div>
</template>

<script>

import Vue from 'vue';

export default {
  name: 'CmsWrapper',
  components: {

  },
  data() {
    return {
      cmsComponents: [],
      isLoading: true,
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    // this.fetchData()
  },

  beforeRouteEnter (to, from, next) {
    const { cmsId } = to.params;

    storyblok.init({
      accessToken: 'YtVp10RqM3knm9KWQWRKQQtt'
    });

    storyblok.get({
      slug: cmsId,
      version: 'published'
    }, (data) => {
      const components =  data.story.content.body;
      next(vm => {
        vm.cmsComponents = components;
        vm.isLoading = false;
      });
    }, (error) => {
      console.log("error", error);
    });
  },
  // when route changes and this component is already rendered,
  // the logic will be slightly different.
  beforeRouteUpdate (to, from, next) {
    const { cmsId } = to.params;
    console.log('beforeUpdate()', cmsId);
    storyblok.get({
      slug: cmsId,
      version: 'published'
    }, (data) => {
      this.cmsComponents =  data.story.content.body;
      next();
    }, (error) => {
      console.log("error", error);
    });
  },

  fetchData(page) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello world!', page);
      }, 1000);
    })
  }
};
</script>
