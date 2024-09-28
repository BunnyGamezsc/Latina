<script lang='ts'>
  import Home from "@/components/Home.svelte";

  const getLatestSet = () => {return {name: "Latin 1", mastered: 20, totalItems: 50}}
</script>

<Home setName={getLatestSet().name} percentageCompleted={getLatestSet().mastered/getLatestSet().totalItems*100}></Home>

<style>
   
</style>