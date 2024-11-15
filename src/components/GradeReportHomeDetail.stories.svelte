<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import GradeReportHomeDetail from './GradeReportHomeDetail.svelte';
  import '../app.css';

</script>

<Meta title="GradeReportHomeDetail" component={GradeReportHomeDetail}/>

<Template let:args>
  <Home {...args}/>
</Template>

<Story name="Primary" args={{
 gradeBook_classDetail: {"Latin":1}
}}/>