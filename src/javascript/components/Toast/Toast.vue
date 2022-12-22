<template>
  <button v-on="type==='success' ? {click:success} : type==='error' ? {click:error} : type==='info' ? {click:info} : null" :class="buttonClass"><slot></slot></button>

</template>

<script setup>
let props=defineProps(['type','buttonClass'])
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
import ToastContent from './ToastContent.vue'
const toast = useToast();

const success = () => {
  toast.success(ToastContent, {
    timeout: 3000,
    position: "bottom-right",
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
  });

}
const error = () => {
  toast.error(ToastContent, {
    timeout: 3000,
    position: "bottom-right",
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
  });
}
const info = () => {
  toast.info(ToastContent, {
    timeout: 3000,
    position: "bottom-right",
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
  });
}



</script>

