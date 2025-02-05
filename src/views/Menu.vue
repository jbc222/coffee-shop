<template>
  <div class="py-12 bg-coffee-50">
    <div class="container mx-auto px-4">
      <!-- Menu Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-serif text-coffee-900 mb-4" data-aos="fade-up">Our Menu</h1>
        <p class="text-lg text-coffee-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Discover our carefully curated selection of coffee, tea, and delightful treats
        </p>
      </div>

      <!-- Category Tabs -->
      <div class="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="200">
        <div class="inline-flex rounded-lg border border-coffee-200 p-1 bg-white">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            :class="[
              selectedCategory === category.id
                ? 'bg-coffee-500 text-white'
                : 'text-coffee-600 hover:text-coffee-800',
              'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>

      <!-- Menu Items Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="item in filteredItems"
          :key="item.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-serif text-coffee-900">{{ item.name }}</h3>
              <span class="text-coffee-600 font-medium">¥{{ item.price }}</span>
            </div>
            <p class="text-gray-600 mb-4">{{ item.description }}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-coffee-500">
                {{ item.attributes.join(' • ') }}
              </span>
              <button
                @click="showItemDetails(item)"
                class="btn btn-secondary text-sm"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Item Details Modal -->
    <TransitionRoot appear :show="isModalOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-2xl font-serif leading-6 text-coffee-900 mb-4"
                >
                  {{ selectedItem?.name }}
                </DialogTitle>
                <div class="mt-2">
                  <img
                    :src="selectedItem?.image"
                    :alt="selectedItem?.name"
                    class="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <p class="text-gray-600 mb-4">{{ selectedItem?.description }}</p>
                  <div class="space-y-2">
                    <p class="text-coffee-800">
                      <span class="font-medium">Price:</span> ¥{{ selectedItem?.price }}
                    </p>
                    <p class="text-coffee-800">
                      <span class="font-medium">Attributes:</span>
                      {{ selectedItem?.attributes.join(', ') }}
                    </p>
                    <p class="text-coffee-800" v-if="selectedItem?.allergens">
                      <span class="font-medium">Allergens:</span>
                      {{ selectedItem?.allergens.join(', ') }}
                    </p>
                  </div>
                </div>

                <div class="mt-6">
                  <button
                    type="button"
                    class="btn btn-primary w-full"
                    @click="closeModal"
                  >
                    Close
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'coffee', name: 'Coffee' },
  { id: 'tea', name: 'Tea' },
  { id: 'desserts', name: 'Desserts' },
]

const menuItems = [
  {
    id: 1,
    category: 'coffee',
    name: 'Classic Espresso',
    description: 'Rich and full-bodied espresso shot with a perfect crema',
    price: 380,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    attributes: ['Single Origin', 'Medium Roast'],
    allergens: [],
  },
  {
    id: 2,
    category: 'coffee',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and a thick layer of milk foam',
    price: 450,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    attributes: ['Whole Milk', 'Double Shot'],
    allergens: ['Milk'],
  },
  {
    id: 3,
    category: 'coffee',
    name: 'Caramel Latte',
    description: 'Smooth latte with house-made caramel syrup',
    price: 480,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    attributes: ['House Syrup', 'Whipped Cream'],
    allergens: ['Milk'],
  },
  {
    id: 4,
    category: 'tea',
    name: 'Earl Grey',
    description: 'Premium black tea with bergamot oil',
    price: 380,
    image: 'https://images.unsplash.com/photo-1519831802596-6aadd85ff671?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    attributes: ['Organic', 'Caffeine'],
    allergens: [],
  },
  {
    id: 5,
    category: 'tea',
    name: 'Green Tea',
    description: 'Japanese sencha green tea',
    price: 380,
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    attributes: ['Organic', 'Light Caffeine'],
    allergens: [],
  },
  {
    id: 6,
    category: 'desserts',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers',
    price: 580,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    attributes: ['House Made', 'Contains Alcohol'],
    allergens: ['Milk', 'Eggs', 'Wheat'],
  },
  {
    id: 7,
    category: 'desserts',
    name: 'Chocolate Cake',
    description: 'Rich chocolate layer cake with ganache',
    price: 550,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    attributes: ['House Made', 'Dark Chocolate'],
    allergens: ['Milk', 'Eggs', 'Wheat'],
  },
]

const selectedCategory = ref('all')
const isModalOpen = ref(false)
const selectedItem = ref(null)

const filteredItems = computed(() => {
  if (selectedCategory.value === 'all') {
    return menuItems
  }
  return menuItems.filter(item => item.category === selectedCategory.value)
})

const showItemDetails = (item) => {
  selectedItem.value = item
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    selectedItem.value = null
  }, 200)
}
</script> 