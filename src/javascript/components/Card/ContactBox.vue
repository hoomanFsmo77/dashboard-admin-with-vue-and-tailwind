<template>
  <div class="card p-1.5 flex gap-1 relative items-center !rounded-[20px]">
      <div>
        <UserProfile class="overflow-hidden" height="80px" width="80px" :src="image" img-class="object-cover rounded-full h-[88%]" image-width="70"/>
      </div>
    <div>
      <span class="block text-1.1 text-primary-dark font-800">{{name}}</span>
      <span class="text-[0.94rem] tracking-widest font-400 uppercase text-gray-700 block mb-0.85">{{job}}</span>
      <span class="text-[0.9rem] text-gray-800 break-all ">{{email}}</span>
      <br>
      <span class="text-[0.9rem] text-gray-800 break-all"> <abbr title="phone">P:</abbr>{{phone}}</span>
    </div>
    <router-link class="link-stretch" :to="{name:'Profile'}"></router-link>
  </div>

</template>

<script>
import UserProfile from '../UserProfile.vue'
export default {
  name: "ContactBox",
  components:{UserProfile},
  props:['job','image','name','email','phone']
}
</script>

