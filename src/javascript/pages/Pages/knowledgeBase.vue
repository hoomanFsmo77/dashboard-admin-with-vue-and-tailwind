<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'Main'},{name:'Knowledge Base'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Knowledge Base</h1>
      </column>
    </row>
    <row>
      <column col="12" md="6">
        <p class="text-[0.9rem] font-500 text-primary-dark">
          One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections
        </p>
        <div class="mt-1">
          <input-group class="text-[0.9rem] !w-[80%]" icon="bi bi-search" placeholder="Search Something ..." type="outline"/>
        </div>
      </column>
    </row>
    <row class="!my-3">
      <column v-for="(item,index) in infoData"  :key="index" col="12" md="4">
        <infoBox :icon="item.icon" :theme="item.theme" :title="item.title" :description="item.description" />
      </column>
    </row>
  </div>
  <row class="!bg-white !mb-0">
    <div class="container-fluid">
      <column col="12" >
        <div class="flex justify-between items-center">
          <div>
            <h6 class="text-blue-600 uppercase tracking-widest font-500">What do you need to know?</h6>
            <h3 class="text-primary-dark font-800 mt-0.5">Choose Your Topic</h3>
          </div>
         <router-link class="text-gray-500 hover:underline text-[0.8rem]" to="">
           See all topics
           <i class="bi bi-chevron-double-right text-0.625 ml-0.25"></i>
         </router-link>
        </div>
        <row>
          <column col="12" md="4">
            <div class="flex gap-1 items-center">
              <span class="bg-primary-indigo/20 px-0.5 py-0.25 text-[0.9rem] text-primary-indigo font-500 rounded-4">12</span>
              <router-link class="h5 font-700 text-primary-dark hover:underline cursor-pointer" :to="{name:'knowledgeBase_Topic'}">
                Introduction
              </router-link>
            </div>
            <ul class="pl-1 mt-1.5 flex flex-col gap-0.5">
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor</router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor sit amet.</router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum </router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor lorem</router-link></li>

            </ul>


          </column>
          <column col="12" md="4">
            <div class="flex gap-1 items-center">
              <span class="bg-primary-indigo/20 px-0.5 py-0.25 text-[0.9rem] text-primary-indigo font-500 rounded-4">5</span>
              <router-link class="h5 font-700 text-primary-dark hover:underline cursor-pointer" :to="{name:'knowledgeBase_Topic'}">
                Usage
              </router-link>
            </div>
            <ul class="pl-1 mt-1.5 flex flex-col gap-0.5">
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor</router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor sit amet.</router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor lorem</router-link></li>

            </ul>
          </column>
          <column col="12" md="4">
            <div class="flex gap-1 items-center">
              <span class="bg-primary-indigo/20 px-0.5 py-0.25 text-[0.9rem] text-primary-indigo font-500 rounded-4">7</span>
              <router-link class="h5 font-700 text-primary-dark hover:underline cursor-pointer" :to="{name:'knowledgeBase_Topic'}">
                Renting
              </router-link>
            </div>
            <ul class="pl-1 mt-1.5 flex flex-col gap-0.5">
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor</router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor sit amet.</router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor sit amet, consetur adiicing elit.</router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum</router-link></li>

            </ul>
          </column>
          <column col="12" md="4">
            <div class="flex gap-1 items-center">
              <span class="bg-primary-indigo/20 px-0.5 py-0.25 text-[0.9rem] text-primary-indigo font-500 rounded-4">4</span>
              <router-link class="h5 font-700 text-primary-dark hover:underline cursor-pointer" :to="{name:'knowledgeBase_Topic'}">
                Fees
              </router-link>
            </div>
            <ul class="pl-1 mt-1.5 flex flex-col gap-0.5">
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor</router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor sit amet.</router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor sit amet, consetur adiicing elit.</router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum</router-link></li>

            </ul>
          </column>
          <column col="12" md="4">
            <div class="flex gap-1 items-center">
              <span class="bg-primary-indigo/20 px-0.5 py-0.25 text-[0.9rem] text-primary-indigo font-500 rounded-4">5</span>
              <router-link class="h5 font-700 text-primary-dark hover:underline cursor-pointer" :to="{name:'knowledgeBase_Topic'}">
                Others
              </router-link>
            </div>
            <ul class="pl-1 mt-1.5 flex flex-col gap-0.5">
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor</router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor sit amet.</router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum dolor sit amet, consetur adiicing elit.</router-link></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><router-link class="hover:underline" :to="{name:'knowledgeBase_Topic'}">Lorem ipsum</router-link></li>

            </ul>
          </column>
        </row>

      </column>
    </div>
  </row>
  <div class="container-fluid !bg-[#e9ecef]">
    <row>
      <column col="12" md="8" class="mx-auto">
            <h6 class="text-center uppercase tracking-widest text-blue-600 font-600">Get Support From Real People</h6>
        <p class="text-center text-[0.9rem] my-1.5 text-gray-500">
          Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.
        </p>
        <div class="flex gap-0.5 items-center justify-center flex-wrap">
          <UserProfile  v-for="item in contactData.slice(0,5)"  class="overflow-hidden transition-all hover:translate-y-[-5px]" height="80px" width="80px" :src="item.image" img-class="object-cover rounded-full h-[88%]" image-width="70"/>
        </div>
      </column>
    </row>
  </div>
  <row class="!bg-white !mt-0">
    <column col="12" sm="8" md="6" class="mx-auto">
      <div class="container-fluid">
        <div class="card relative md:top-[-95px] top-[-50px]">
          <div class="card-title !py-1 flex items-center justify-between">
            <div>
              <span class="text-blue-600 uppercase tracking-widest font-500 text-[0.8rem]">Drop Us a Line</span>
              <h4 class="font-700 text-primary-dark mt-0.5">Contact</h4>
            </div>
            <i class="bi bi-pen text-3 text-blue-600"></i>
          </div>
          <div class="p-1.5">
            <p class="text-[0.9rem] font-500 text-gray-500">He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.</p>
          </div>
          <div class="card-footer !py-1">
            <button class="btn btn-primary btn-sm ">Let us know</button>
          </div>
        </div>

      </div>
    </column>
  </row>
</template>

<script setup>
import Breadcrumb from '../../components/Breadcrumb.vue'
import inputGroup from '../../components/Form/inputGroup.vue'
import {infoData,contactData} from "../../composables/Data/useStateData.js";
import infoBox from '../../components/Card/infoBox.vue'
import UserProfile from '../../components/UserProfile.vue'

</script>

