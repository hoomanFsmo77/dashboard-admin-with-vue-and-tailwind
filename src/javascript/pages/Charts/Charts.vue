<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'Main'},{name:'Charts'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Charts</h1>
      </column>
    </row>
    <row>
      <column col="12" md="8">
          <Card title="Line chart Example" :has-menu="false" body-class="!p-0">
            <div class="p-2">
              <p class="article">
                Charts on this page use <a class="link font-500" href="https://github.com/apexcharts/vue3-apexcharts">apexcharts</a>  - Simple yet flexible JavaScript charting for designers & developers.
              </p>
              <p class="article">
                Theme has built in Vue wrapper. You can find all chart components in <code>src/components/charts </code>folder.
              </p>
              <div>
                <button @click="collapseFlag[0]=!collapseFlag[0]" class="link font-500 !text-[0.9rem]">Show code example</button>
                <CodeEditor class="v-collapse mt-2" v-collapsible="collapseFlag[0]" width="0" min_width="100%" :read_only="true" :value="codeEditorValue7"></CodeEditor>
              </div>
            </div>
            <div class="px-1">
              <apexchart type="area" height="350" :options="chart13.chartOptions" :series="chart13.series"></apexchart>
            </div>
          </Card>
      </column>
      <column col="12" md="4">
        <row class="!pt-0 !mt-0">
          <column class="!pt-0" col="12">
            <Card title="Line chart with primary gradient" :has-menu="false" body-class="!p-1">
              <apexchart type="area" height="200" :options="chart14.chartOptions" :series="chart14.series"></apexchart>

            </Card>
          </column>
          <column col="12">
            <Card title="Bar Chart" :has-menu="false">
              <apexchart type="bar" height="200" :options="chart15.chartOptions" :series="chart15.series"></apexchart>
            </Card>
          </column>
        </row>

      </column>
    </row>
    <row>
      <column col="12" sm="6" md="5">
        <row class="!pt-0 !mt-0">
          <column class="!pt-0 !mt-0" col="12">
            <Card title="Donut Chart" :has-menu="false" body-class="!p-1">
              <div class="my-1">
                <button @click="collapseFlag[1]=!collapseFlag[1]" class="link font-500 !text-[0.9rem]">Show code example</button>
                <CodeEditor class="v-collapse mt-2" v-collapsible="collapseFlag[1]" width="0" min_width="100%" :read_only="true" :value="codeEditorValue7"></CodeEditor>
              </div>
              <apexchart type="donut" height="200" :options="chart16.chartOptions" :series="chart16.series"></apexchart>
            </Card>

          </column>
          <column col="12">
            <Card title="donut chart 2" :has-menu="false" body-class="!p-1">
              <div class="mb-1">
                <button @click="collapseFlag[3]=!collapseFlag[3]" class="link font-500 !text-[0.9rem]">Show code example</button>
                <CodeEditor class="v-collapse mt-2" v-collapsible="collapseFlag[3]" width="0" min_width="100%" :read_only="true" :value="codeEditorValue7"></CodeEditor>
              </div>
              <div>
                <apexchart type="radialBar"  height="250" :options="chart7.chartOptions" :series="chart7.series"></apexchart>
              </div>
            </Card>
          </column>
        </row>

      </column>
      <column col="12" sm="6" md="7">
          <Card title="Bar Chart 2" :has-menu="false" body-class="!p-1.5">
            <p class="article !mb-0.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, voluptatem.</p>
            <div class="mb-1">
              <button @click="collapseFlag[2]=!collapseFlag[2]" class="link font-500 !text-[0.9rem]">Show code example</button>
              <CodeEditor class="v-collapse mt-2" v-collapsible="collapseFlag[2]" width="0" min_width="100%" :read_only="true" :value="codeEditorValue7"></CodeEditor>
            </div>
            <div>
              <apexchart type="bar" height="350" :options="chart17.chartOptions" :series="chart17.series"></apexchart>
            </div>

          </Card>
      </column>
    </row>
    <row>
      <column col="12" md="6">
        <Card title="Donut chart Example" :has-menu="false" body-class="!p-2">
          <div class="mb-1">
            <button @click="collapseFlag[5]=!collapseFlag[5]" class="link font-500 !text-[0.9rem]">Show code example</button>
            <CodeEditor class="v-collapse mt-2" v-collapsible="collapseFlag[5]" width="0" min_width="100%" :read_only="true" :value="codeEditorValue7"></CodeEditor>
          </div>
          <div>
            <apexchart type="donut" height="250" :options="chart18.chartOptions" :series="chart18.series"></apexchart>

          </div>
        </Card>
      </column>
      <column col="12" md="6">
        <Card title="Pie chart Example" :has-menu="false" body-class="!p-2">
          <div class="mb-1">
            <button @click="collapseFlag[4]=!collapseFlag[4]" class="link font-500 !text-[0.9rem]">Show code example</button>
            <CodeEditor class="v-collapse mt-2" v-collapsible="collapseFlag[4]" width="0" min_width="100%" :read_only="true" :value="codeEditorValue7"></CodeEditor>
          </div>
          <div>
            <apexchart type="pie" height="250" :options="chart19.chartOptions" :series="chart19.series"></apexchart>

          </div>
        </Card>
      </column>
    </row>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {chart13,chart14,chart15,chart16,chart17,chart7,chart18,chart19} from "../../composables/Data/useChartData.js";
import Breadcrumb from '../../components/Breadcrumb.vue'
import Card from '../../components/Card/Card.vue'
import CodeEditor from 'simple-code-editor';
import {codeEditorValue7} from "../../composables/Data/useExtraData.js";
const collapseFlag=ref([false,false,false,false,false,false])

</script>
<style scoped lang="scss">
.v-collapse:not(.show) {
  @apply hidden;
}
.collapsing{
  @apply h-0 overflow-hidden transition-all duration-300 ease-in-out
}
</style>
