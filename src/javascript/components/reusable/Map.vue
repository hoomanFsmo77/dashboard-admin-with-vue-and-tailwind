<template>
  <CodeExample class="my-1" :value="codeEditorValue4"/>
  <div :id="id" :style="{height:height}"></div>
</template>

<script setup>
let props=defineProps(['id','type','height'])
import L from 'leaflet'
import {onMounted} from "vue";
import '../../composables/leafler-provider.js'
import CodeExample from '../../components/reusable/CodeExample.vue'
import {codeEditorValue4} from "../../composables/Data/useExtraData.js";

onMounted(()=>{
  let map = L.map(props.id).setView([51.505, -0.09], 13);
  let LeafIcon = L.icon({iconUrl:'./assets/marker-icon.png'});

  if(props.type==='simple'){
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([51.5, -0.09],{icon:LeafIcon}).addTo(map)
        .bindPopup('<h5 class="card-header">info window content</h5><p class="article">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus ea earum, iure laborum rerum similique? Accusamus, debitis dolor ea iure laudantium necessitatibus officiis, quibusdam quisquam quos recusandae similique totam!</p>')
        ;

  }
  else if(props.type==='styled'){
    L.tileLayer.provider('Stadia.Outdoors').addTo(map);
    L.marker([51.5, -0.09],{icon:LeafIcon}).addTo(map)
        .bindPopup('<h5 class="card-header">info window content</h5><p class="article">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus ea earum, iure laborum rerum similique? Accusamus, debitis dolor ea iure laudantium necessitatibus officiis, quibusdam quisquam quos recusandae similique totam!</p>')
        ;


  }
  else if(props.type==='markers'){
    L.tileLayer.provider('Stadia.Outdoors').addTo(map);
    L.marker([51.5, -0.09],{icon:LeafIcon}).addTo(map)
        .bindPopup(`
          <div class="flex gap-0.5">
                <img src="https://www.central-restaurant.de/wp-content/uploads/2021/06/05_SLIDER1_RESTAURANT-CENTRAL_MYT5741-1.jpg" style="width: 133px;" alt="">
                <div>
                     <span class="text-blue-700 text-[0.8rem] font-700">lorem ipsum</span>
                     <p class="article !text-[0.8rem] !mt-0.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam blanditiis consectetur distinctio eius eveniet explicabo, facilis.</p>
                     <p class="article !text-[0.75rem] !mt-0.5">942 Greenpoint Avenue, Northridge, Puerto Rico, 8248</p>
                     <a href="mailto:biancabriggs@prosure.com" class="link font-500 !text-[0.75rem]">biancabriggs@prosure.com</a>
                     <p class="article !text-[0.8rem] !mt-0.5">+1 (831) 587-2089</p>
                </div>
          </div>
        
        `)
        ;
    L.marker([51.5, -0.08],{icon:LeafIcon}).addTo(map)
        .bindPopup(`<div class="flex gap-0.5">
                <img src="https://www.central-restaurant.de/wp-content/uploads/2021/06/02_SLIDER1_RESTAURANT-CENTRAL_MYT5737-1.jpg" style="width: 133px;" alt="">
                <div>
                     <span class="text-blue-700 text-[0.8rem] font-700">lorem ipsum</span>
                     <p class="article !text-[0.8rem] !mt-0.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam blanditiis consectetur distinctio eius eveniet explicabo, facilis.</p>
                     <p class="article !text-[0.75rem] !mt-0.5">942 Greenpoint Avenue, Northridge, Puerto Rico, 8248</p>
                     <a href="mailto:biancabriggs@prosure.com" class="link font-500 !text-[0.75rem]">biancabriggs@prosure.com</a>
                     <p class="article !text-[0.8rem] !mt-0.5">+1 (831) 587-2089</p>
                </div>
          </div>`)
        ;
    L.marker([51.5, -0.07],{icon:LeafIcon}).addTo(map)
        .bindPopup(`<div class="flex gap-0.5">
                <img src="https://dam.destination.one/666808/b2eac33cfacb6a4efd57ae97b52febaa5d1f661d12149b6227e57c55b9119a09/einbecker-steinhaus-am-marktplatz-jpg.jpg" style="width: 133px;" alt="">
                <div>
                     <span class="text-blue-700 text-[0.8rem] font-700">lorem ipsum</span>
                     <p class="article !text-[0.8rem] !mt-0.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam blanditiis consectetur distinctio eius eveniet explicabo, facilis.</p>
                     <p class="article !text-[0.75rem] !mt-0.5">942 Greenpoint Avenue, Northridge, Puerto Rico, 8248</p>
                     <a href="mailto:biancabriggs@prosure.com" class="link font-500 !text-[0.75rem]">biancabriggs@prosure.com</a>
                     <p class="article !text-[0.8rem] !mt-0.5">+1 (831) 587-2089</p>
                </div>
          </div>`)
        ;


  }



})


</script>
<style  lang="scss">
.leaflet-container a.leaflet-popup-close-button{
  display: flex!important;
  align-items: center!important;
  justify-content: center!important;
  width: 35px!important;
  height: 35px!important;
  background: #333!important;
  color: white!important;
}
.leaflet-popup-content{width: 400px!important;}
</style>
