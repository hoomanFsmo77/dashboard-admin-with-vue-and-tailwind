<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'Main'},{name:'Gallery'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Gallery</h1>
      </column>
    </row>
    <row>

      <photo-provider>
        <column v-for="(item,index) in galleryData.slice(0,12)" col="6"  md="4" xlg="3">
          <photo-consumer  :intro="item.name" :key="index" :src="item.image">
            <div class="card overflow-hidden cursor-pointer">
              <img :src="item.image" class="view-box"  alt="">
              <div class="py-0.5 px-0.75">
                <span class="text-0.875 text-primary-dark font-700 ">{{item.name}}</span>
                <span class="block my-0.5 text-[0.8rem] text-gray-500">Image sample text</span>
              </div>
            </div>

          </photo-consumer>
        </column>
      </photo-provider>


    </row>
    <row>
      <column col="12">
          <Card title="Lightbox" :has-menu="false" body-class="!p-2">
            <p class="article">
              vue3-photo-preview is a photo viewer plugin for Vue js.
            </p>
            <p class="article">
              You can configure lightbox to your needs in <code>src/javascript/composables/Data/useExtraData.js</code>. Follow instructions in plugins
              <a href="https://github.com/NameWjp/vue3-photo-preview" class="link">documentation</a>.
            </p>
            <div>
              <button @click="collapseFlag=!collapseFlag" class="link font-500 !text-[0.9rem]">Show code example</button>
              <CodeEditor class="v-collapse mt-2" v-collapsible="collapseFlag" width="0" min_width="100%" :read_only="true" :value="codeEditorValue3"></CodeEditor>
            </div>
          </Card>
      </column>
    </row>
  </div>
</template>

<script setup>
import Breadcrumb from '../../components/reusable/Breadcrumb.vue'
import {galleryData} from "../../composables/Data/useExtraData.js";
import Card from '../../components/reusable/Card.vue'
import CodeEditor from 'simple-code-editor';
import {codeEditorValue3} from "../../composables/Data/useExtraData.js";
import {ref} from "vue";

const collapseFlag=ref(false)
</script>
<style scoped lang="scss">
.v-collapse:not(.show) {
  @apply hidden;
}
.collapsing{
  @apply h-0 overflow-hidden transition-all duration-300 ease-in-out
}
</style>
