<template>
  <div>
    <h2>Leagues:</h2>
    <ul>
      <li v-for="league in leagues"
          :key="league"
      >
        {{ league }}
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default {
  name: 'c-list',
  // components: {},
  // mixins: [],

  // props: {},
  data() {
    return {
      leagues: [],
    };
  },

  // computed: {},
  // watch: {},

  // beforeCreate() {},
  // created() {},
  // beforeMount() {},
  mounted() {
    this.getData();
  },
  // beforeUpdate() {},
  // updated() {},
  // activated() {},
  // deactivated() {},
  // beforeDestroy() {},
  // destroyed() {},

  methods: {
    getData() {
      const db = firebase.firestore();

      db.collection('leagues').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const leagueTitle = doc.data().title;
          console.log('leagueTitle', leagueTitle);
          this.leagues.push(leagueTitle);
        });
      });
    },
  },
  // render() {},
};
</script>

<style lang="scss">
  .c-list {
  }
</style>
