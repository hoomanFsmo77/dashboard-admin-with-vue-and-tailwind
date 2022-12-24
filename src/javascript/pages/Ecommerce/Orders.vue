<template>
  <div class="container-fluid">
    <row>
      <column col="12">
        <Breadcrumb :pages="[{name:'home',link:'Main'},{name:'Orders'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Orders</h1>
        <div class="flex gap-1">
          <AppLink to="#" class="text-[0.8rem] text-gray-500 hover:underline">
            <i class="fa-solid fa-upload"></i>
            Import
          </AppLink>
          <AppLink to="#" class="text-[0.8rem] text-gray-500 hover:underline">
            <i class="fa-solid fa-download"></i>
            Export
          </AppLink>
        </div>
      </column>
    </row>
    <row>
      <column col="12">
        <OrderSection :items="10" :has-card="false" :has-link="true" link="Order_details"/>
      </column>
    </row>

  </div>
</template>

<script setup>
import Breadcrumb from '../../components/reusable/Breadcrumb.vue'
import AppLink from '../../components/reusable/AppLink.vue'
import OrderSection from '../../components/Table/OrderSection.vue'

</script>

