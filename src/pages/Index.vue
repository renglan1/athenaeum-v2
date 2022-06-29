 <template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images
    <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    

  </Layout>
</template>

<static-query>
  query{
    metadata {
      siteName
    }
  }
</static-query>

<script>
export default {
  metaInfo: {
    title: "Unearth",
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
