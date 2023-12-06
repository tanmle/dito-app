<template>
  <div class="wrapper">
    <Topbar/>
    <Sidebar/>
    <div class="main-content md:ml-64">
      <slot />
    </div>
    <Footer />
  </div>
</template>