<template>
<div class="bg-blue-800">
<NavbarHome></NavbarHome>
<NavbarAside></NavbarAside>
</div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld';
import NavbarLogin from '@/components/NavbarLogin';
import NavbarHome from '@/components/NavbarHome';
import NavbarAside from '@/components/NavbarAside';

export default {
  name: 'Home',
  components: {
    NavbarLogin,
    HelloWorld,
    NavbarHome,
    NavbarAside,
  }
}
</script>
