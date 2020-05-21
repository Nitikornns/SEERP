<template>
<div>
    <Navbar/>
    <InputText/>
</div>
  
</template>

<script>
import InputText from '@/components/InputText'
import Navbar from '@/components/Navbar'

export default {
    name : "Login",
    components : {
        InputText,
        Navbar,
    },
    data : () => ({

    }),
}
</script>

<style>

</style>