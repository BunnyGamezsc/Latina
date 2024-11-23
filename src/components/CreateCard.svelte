<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { Progress } from "$lib/components/ui/progress/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import CompletedCard from "./CompletedCard.svelte";
  import { computeLanguage, getLanguageDetails } from "@/utils";
  export let languageName;
  export let languageDetails;
  export let setName: string;
  export let percentageCompleted: number;
</script>

<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
    <Card.Root class="sm:col-span-2">
      <Card.Header class="pb-3">
        <Card.Title>Your Sets</Card.Title>
        <Card.Description class="max-w-lg text-balance leading-relaxed">
          Create a new Set for {languageName}
          <br>
          <!-- {languageDetails.setDetails} -->
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <div class="flex gap-1">
          <Button>Create New Set</Button>
          <!-- {#if languageDetails.onlyVocab == false}
          <Button>Study {languageName}</Button>
          {/if} -->
        </div>
      </Card.Footer>
    </Card.Root>
    <CompletedCard setName={setName} percentageCompleted={percentageCompleted}></CompletedCard>
    <!-- <Card.Root>
      <Card.Header class="pb-2">
        <Card.Description>This Month</Card.Description>
        <Card.Title class="text-3xl">$5,329</Card.Title>
      </Card.Header>
      <Card.Content>
        <div class="text-muted-foreground text-xs">+10% from last month</div>
      </Card.Content>
      <Card.Footer>
        <Progress value={12} aria-label="12% increase" />
      </Card.Footer>
    </Card.Root> -->
  </div>

<style>
   
</style>