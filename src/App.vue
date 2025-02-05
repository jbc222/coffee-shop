<script setup>
import HelloWorld from './components/HelloWorld.vue'

const navigation = [
  { name: 'home', text: 'Home', href: '/' },
  { name: 'menu', text: 'Menu', href: '/menu' },
  { name: 'about', text: 'About', href: '/about' },
  { name: 'events', text: 'Events', href: '/events' },
  { name: 'reservation', text: 'Reservation', href: '/reservation' },
]
</script>

<template>
  <div class="min-h-screen bg-coffee-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="container mx-auto px-4">
        <div class="flex justify-between h-16">
          <div class="flex">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/" class="text-2xl font-serif text-coffee-800">
                Coffee Haven
              </router-link>
            </div>
            
            <!-- Navigation Links -->
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link 
                v-for="item in navigation" 
                :key="item.name"
                :to="item.href"
                :class="[
                  $route.name === item.name
                    ? 'border-coffee-500 text-coffee-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                ]"
              >
                {{ item.text }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <main>
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
          appear
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-coffee-900 text-white">
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-serif mb-4">Coffee Haven</h3>
            <p class="text-coffee-100">Your cozy corner for perfect coffee moments.</p>
          </div>
          <div>
            <h4 class="text-lg font-serif mb-4">Contact</h4>
            <p class="text-coffee-100">123 Coffee Street</p>
            <p class="text-coffee-100">City, Country</p>
            <p class="text-coffee-100">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h4 class="text-lg font-serif mb-4">Hours</h4>
            <p class="text-coffee-100">Mon-Fri: 7:00 AM - 8:00 PM</p>
            <p class="text-coffee-100">Sat-Sun: 8:00 AM - 9:00 PM</p>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-coffee-800 text-center text-coffee-100">
          <p>&copy; {{ new Date().getFullYear() }} Coffee Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
