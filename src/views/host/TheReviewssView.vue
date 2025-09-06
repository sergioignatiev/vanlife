<template>
  <div class="flex flex-col gap-[36px] my-padding">
    <section>
      <div class="flex gap-5 items-center">
        <h1 class=" text-[24px] sm:text-[32px] font-bold">Your Reviews</h1>
        <TheLastThirtyDays/>
      </div>
    </section>

    <section class="flex items-center gap-3">
<div class="text-[32px] font-bold">5.0</div>

<svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.30123 0.843597C9.64795 -0.117224 11.0068 -0.117225 11.3535 0.843596L13.0595 5.57118C13.2156 6.0036 13.6259 6.2918 14.0856 6.2918H19.3421C20.4264 6.2918 20.8467 7.70205 19.9393 8.29562L15.8905 10.9443C15.4675 11.221 15.29 11.7521 15.4615 12.2275L17.0532 16.6383C17.4087 17.6236 16.3064 18.495 15.4298 17.9215L10.9246 14.9743C10.5618 14.737 10.0929 14.737 9.73015 14.9743L5.22489 17.9215C4.34834 18.495 3.24599 17.6236 3.60154 16.6383L5.19321 12.2275C5.36479 11.7521 5.18728 11.221 4.76429 10.9443L0.715395 8.29562C-0.191962 7.70205 0.228344 6.2918 1.31261 6.2918H6.56909C7.0288 6.2918 7.43919 6.0036 7.59523 5.57118L9.30123 0.843597Z" fill="#FF8C38"/>
</svg>
<div class="">overall rating</div>
    </section>
<the-star-rating-bar/>
<h3>Reviews({{ reviews.length }})</h3>
<section class="flex flex-col gap-3 " v-for="(review,index) in reviews" :key="index">
  <div class="flex gap-1">
    <TheStar v-for="i in 5" :key="i"/>
    </div>
    <header class="flex items-center  gap-2">
      <div class="font-bold text-[13px] sm:text-[16px]">{{ review.name }}</div>
      <div class="text-[#8C8C8C] text-[13px] sm:text-[16px]">{{ review.date }}</div>
      
    </header>
  <p class="text-[13px] sm:text-[16px]">{{ review.text }}</p>


</section>

  </div>
</template>

<script setup lang="ts">
import TheLastThirtyDays from '@/components/TheLastThirtyDays.vue';
import TheStarRatingBar from '@/components/TheStarRatingBar.vue';
import TheStar from '@/components/TheStar.vue';
import { ref } from 'vue';
const reviews=ref([
  {name:"Elliot",date:'December 1, 2022',text:'The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!'}
,{name:'Sandy',date:'November 23, 2022',text:'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!'}
])

</script>

<style scoped>

</style>