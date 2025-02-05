<template>
  <div class="sm:hidden">
    <!-- Mobile menu button -->
    <button
      type="button"
      class="inline-flex items-center justify-center p-2 rounded-md text-coffee-600 hover:text-coffee-900 hover:bg-coffee-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-coffee-500"
      @click="isOpen = !isOpen"
    >
      <span class="sr-only">Open main menu</span>
      <Bars3Icon v-if="!isOpen" class="block h-6 w-6" />
      <XMarkIcon v-else class="block h-6 w-6" />
    </button>

    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="isOpen">
      <Dialog as="div" class="relative z-40 sm:hidden" @close="isOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative flex-1 flex flex-col w-full max-w-xs bg-white">
              <div class="pt-5 pb-4">
                <div class="flex items-center justify-between px-4">
                  <router-link
                    to="/"
                    class="text-2xl font-serif text-coffee-800"
                    @click="isOpen = false"
                  >
                    Coffee Haven
                  </router-link>
                  <button
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-coffee-600 hover:text-coffee-900 hover:bg-coffee-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-coffee-500"
                    @click="isOpen = false"
                  >
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" />
                  </button>
                </div>
                <div class="mt-8 px-2">
                  <nav class="grid gap-y-2">
                    <router-link
                      v-for="item in navigation"
                      :key="item.name"
                      :to="item.href"
                      :class="[
                        $route.name === item.name
                          ? 'bg-coffee-100 text-coffee-900'
                          : 'text-coffee-600 hover:bg-coffee-50',
                        'px-3 py-2 rounded-md text-base font-medium transition-colors duration-200'
                      ]"
                      @click="isOpen = false"
                    >
                      {{ item.text }}
                    </router-link>
                  </nav>
                </div>
              </div>
              <div class="border-t border-coffee-200 p-4 mt-auto">
                <router-link
                  to="/reservation"
                  class="btn btn-primary w-full text-center"
                  @click="isOpen = false"
                >
                  Make a Reservation
                </router-link>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'home', text: 'Home', href: '/' },
  { name: 'menu', text: 'Menu', href: '/menu' },
  { name: 'about', text: 'About', href: '/about' },
  { name: 'events', text: 'Events', href: '/events' },
  { name: 'reservation', text: 'Reservation', href: '/reservation' },
]

const isOpen = ref(false)
</script> 