<template>
    <h1 class="text-primary-dark uppercase">default dashboard</h1>
  <row class="!my-2">
    <column v-for="item in defaultPageData" col="12" lg="3" sm="6">
        <StaticCard
            :icon="item.icon"
            :title="item.title"
            :achieve="item.achieve"
            :change="item.change"
            :state="item.state"
            :theme="item.theme"
        />
    </column>
  </row>
  <row>
    <column lg="9" col="12">
      <Card title="Sales by channel">
          <row>
              <column col="12" md="4" class="flex py-1 ">
                <div>
                  <h6 class="uppercase font-700 text-gray-500 tracking-widest">total revenue</h6>
                  <h2 class="font-700 text-primary-indigo">$19,200</h2>
                  <div class="flex gap-1 items-center">
                    <span class="text-gray-600 md:text-1 text-[0.9rem]">+$2,032</span>
                    <span  class="category-card bg-green-200  text-green-700 !py-0.25 !px-[0.3rem] md:text-[0.7rem] mx-0.25 text-[0.6rem]">
                    <i class="bi bi-arrow-up"></i>
                    19.5%
                  </span>
                  </div>
                </div>
              </column>
              <column col="6" md="4" class="flex py-1 md:px-0.5 !px-0">
                <div class="vertical-divider  !mr-1"></div>
                <div>
                  <span class="uppercase font-400 text-gray-500 tracking-widest md:text-[0.9rem] text-[0.8rem]">Organic Search</span>
                  <h4 class="font-500 text-primary-dark my-0.5 md:text-1 text-[0.9rem]">$19,200</h4>
                  <div class="flex gap-1 items-center">
                    <span class="text-gray-600 md:text-1 text-[0.9rem]">+$2,032</span>
                    <span  class="category-card bg-green-200  text-green-700 !py-0.25 !px-[0.3rem] text-[0.7rem] mx-0.25">
                    <i class="bi bi-arrow-up"></i>
                    19.5%
                  </span>
                  </div>
                </div>
              </column>
              <column col="6" md="4" class="flex py-1 md:px-0.5 !px-0">
                <div class="vertical-divider  !mr-1"></div>
                <div>
                  <span class="uppercase font-400 text-gray-500 tracking-widest md:text-[0.9rem] text-[0.8rem]">Facebook ads</span>
                  <h4 class="font-500 text-primary-dark my-0.5 ">$19,200</h4>
                  <div class="flex gap-1 items-center">
                    <span class="text-gray-600 md:text-1 text-[0.9rem]">-$2,032</span>
                    <span  class="category-card bg-red-200  text-red-700 !py-0.25 !px-[0.3rem] text-[0.7rem] mx-0.25">
                    <i class="bi bi-arrow-down"></i>
                    19.5%
                  </span>
                  </div>
                </div>
              </column>
          </row>
          <row>
            <column col="12" class="mt-2">
              <apexchart
                  width="100%"
                  type="line"
                  :options="chartData"
                  :series="chartData.series"
              ></apexchart>
            </column>
          </row>
      </Card>
    </column>
    <column lg="3" col="12">
      <Card title="Latest activity">

      </Card>
    </column>
  </row>
</template>

<script setup>
import StaticCard from "../../components/reusable/StaticCard.vue";
import Card from "../../components/reusable/Card.vue";
import {defaultPageData,chartData} from "../../composables/useData.js";



</script>

