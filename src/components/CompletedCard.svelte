<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Progress } from "$lib/components/ui/progress";
  // import textFit from "../textFit";
  export let setName: any;
  export let percentageCompleted: any;
  let cardSetTitle;
//   import { textfit } from 'svelte-textfit';
  let parent;

  // fitty(document.getElementsByClassName("fitText"))




  

</script>
<Card.Root class="sm:col-span-2">
  <Card.Header class="pb-3">
    <Card.Description class="max-w-lg text-balance leading-relaxed">
      Mastered Words in Set
    </Card.Description>
    <Card.Title><div class="fit-to-width"><p>{setName}</p></div></Card.Title>
  </Card.Header>
  <Card.Content>
    <div class="text-muted-foreground text-xs">{percentageCompleted}%</div>
  </Card.Content>
  <Card.Footer>
    <Progress value={percentageCompleted} aria-label="{percentageCompleted} increase" />
  </Card.Footer>
</Card.Root>

<!-- <Card.Root style="sm:col-span-2">


    <Card.Header class="pb-2">
      <Card.Description>Mastered Words in Set</Card.Description>
      <Card.Title class="text-4xl">
        <div class="fit-to-width"><p>{setName}</p></div>
      </Card.Title>
    </Card.Header>
    <Card.Content>
      <div class="text-muted-foreground text-xs">{percentageCompleted}%</div>
    </Card.Content>
    <Card.Footer>
      <Progress value={percentageCompleted} aria-label="{percentageCompleted} increase" />
    </Card.Footer>
  </Card.Root> -->


  <style lang="scss">
    
/* The numbers reference the corresponding explanations from the article text. */
/* 1 */
@supports (animation-range: entry-crossing) {
  .fit-to-width {
    font-size: 3rem; /* 2 */
    overflow: hidden; /* 3 */

    scroll-snap-type: x mandatory; /* 4 */

    &::before {
      content: "";
      scroll-snap-align: start; /* 12 */
      display: block;
    }

    & > * {
      inline-size: max-content; /* 5 */
      line-height: 1;           /* 6 */
      transform-origin: 0 0;    /* 7 */

      animation: apply-text-ratio linear; /* 8 */
      animation-timeline: view(inline);   /* 9 */
      animation-range: entry-crossing;    /* 10 */

      display: block;           /* 11 */
      contain: layout;          /* 13 */
    }
  }
}

/* 14 */
@keyframes apply-text-ratio {
  from {
    transform: scale(0); /* 15 */
    margin-block-end: -0.1lh; /* 16 */
  }
}

  </style>