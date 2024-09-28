<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Button from './CreateCard.svelte';
  import '../app.css';
  // import "../fitty.min.js"
</script>

<Meta title="CreateCard" component={Button}/>

<Template let:args>
  <Button {...args}/>
</Template>

<Story name="Default" args={{setName: "[Insert Set Name]", percentageCompleted: 0 }}/>

<!-- <Story name="Secondary" args={{primary: false}}/> -->