<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Home from './Home.svelte';
  import '../app.css';

</script>

<Meta title="Home" component={Home}/>

<Template let:args>
  <Home {...args}/>
</Template>

<Story name="Primary" args={{
  setName: "Cool",
  percentageCompleted:11, 
  languageDetails: {"setDetails": "Latin includes: Vocabulary Sets / Trainer*, Verb Trainer*, Translation*", 
  "onlyVocab": false}, 
  languageName: "Latin"
}}/>