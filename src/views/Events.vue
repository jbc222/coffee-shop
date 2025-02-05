<template>
  <div class="bg-coffee-50 py-12">
    <div class="container mx-auto px-4">
      <!-- Events Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-serif text-coffee-900 mb-4" data-aos="fade-up">Events & Happenings</h1>
        <p class="text-lg text-coffee-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Join us for special events, workshops, and live performances
        </p>
      </div>

      <!-- Featured Event -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-16" data-aos="fade-up">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="relative h-[400px]">
            <img
              :src="featuredEvent.image"
              :alt="featuredEvent.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div class="absolute bottom-0 left-0 p-6 text-white">
              <span class="inline-block px-3 py-1 bg-coffee-600 rounded-full text-sm font-medium mb-2">
                Featured Event
              </span>
              <h2 class="text-2xl font-serif mb-2">{{ featuredEvent.title }}</h2>
              <p class="text-coffee-100">{{ formatDate(featuredEvent.date) }}</p>
            </div>
          </div>
          <div class="p-8">
            <div class="prose prose-coffee">
              <p class="text-coffee-600 mb-6">{{ featuredEvent.description }}</p>
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <CalendarIcon class="w-6 h-6 text-coffee-500 mr-3 mt-1" />
                  <div>
                    <h4 class="font-medium text-coffee-800">Date & Time</h4>
                    <p class="text-coffee-600">
                      {{ formatDate(featuredEvent.date) }}<br />
                      {{ featuredEvent.time }}
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <TicketIcon class="w-6 h-6 text-coffee-500 mr-3 mt-1" />
                  <div>
                    <h4 class="font-medium text-coffee-800">Price</h4>
                    <p class="text-coffee-600">{{ featuredEvent.price }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UserGroupIcon class="w-6 h-6 text-coffee-500 mr-3 mt-1" />
                  <div>
                    <h4 class="font-medium text-coffee-800">Capacity</h4>
                    <p class="text-coffee-600">{{ featuredEvent.capacity }} people</p>
                  </div>
                </div>
              </div>
              <button
                @click="registerForEvent(featuredEvent)"
                class="btn btn-primary w-full"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Upcoming Events -->
      <div class="mb-16">
        <h2 class="text-3xl font-serif text-coffee-800 mb-8" data-aos="fade-up">Upcoming Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="event in upcomingEvents"
            :key="event.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="relative h-48">
              <img
                :src="event.image"
                :alt="event.title"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4">
                <span
                  class="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-coffee-600"
                >
                  {{ event.category }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-serif text-coffee-800 mb-2">{{ event.title }}</h3>
              <p class="text-coffee-600 mb-4">{{ formatDate(event.date) }} • {{ event.time }}</p>
              <p class="text-gray-600 mb-4">{{ event.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-coffee-600 font-medium">{{ event.price }}</span>
                <button
                  @click="registerForEvent(event)"
                  class="btn btn-secondary"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Past Events Gallery -->
      <div>
        <h2 class="text-3xl font-serif text-coffee-800 mb-8" data-aos="fade-up">Past Events Gallery</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="image in pastEventImages"
            :key="image.id"
            class="relative aspect-square group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="200"
            @click="openGallery(image)"
          >
            <img
              :src="image.url"
              :alt="image.description"
              class="w-full h-full object-cover rounded-lg"
            />
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-lg" />
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p class="text-white text-center px-4">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Registration Modal -->
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
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-2xl font-serif leading-6 text-coffee-900 mb-4">
                  Register for {{ selectedEvent?.title }}
                </DialogTitle>
                <form @submit.prevent="submitRegistration" class="space-y-4">
                  <div>
                    <label for="name" class="block text-sm font-medium text-coffee-800">Name</label>
                    <input
                      type="text"
                      id="name"
                      v-model="registration.name"
                      class="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500"
                      required
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-coffee-800">Email</label>
                    <input
                      type="email"
                      id="email"
                      v-model="registration.email"
                      class="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500"
                      required
                    />
                  </div>
                  <div>
                    <label for="participants" class="block text-sm font-medium text-coffee-800">Number of Participants</label>
                    <select
                      id="participants"
                      v-model="registration.participants"
                      class="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500"
                      required
                    >
                      <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
                    </select>
                  </div>
                  <div>
                    <label for="notes" class="block text-sm font-medium text-coffee-800">Special Notes</label>
                    <textarea
                      id="notes"
                      v-model="registration.notes"
                      rows="3"
                      class="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500"
                    ></textarea>
                  </div>
                  <div class="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="closeModal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="btn btn-primary"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
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
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  CalendarIcon,
  TicketIcon,
  UserGroupIcon,
} from '@heroicons/vue/24/outline'

const featuredEvent = {
  id: 1,
  title: 'Coffee Tasting Workshop',
  description: 'Join our expert baristas for an evening of coffee exploration. Learn about different coffee origins, brewing methods, and taste a variety of specialty coffees.',
  date: '2024-03-15',
  time: '18:00 - 20:00',
  price: '¥3,800',
  capacity: 15,
  image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  category: 'Workshop',
}

const upcomingEvents = [
  {
    id: 2,
    title: 'Live Jazz Night',
    description: 'Enjoy an evening of smooth jazz with local musicians while sipping on your favorite coffee.',
    date: '2024-03-20',
    time: '19:00 - 21:00',
    price: '¥2,500',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Music',
  },
  {
    id: 3,
    title: 'Latte Art Class',
    description: 'Learn the basics of latte art from our skilled baristas and create your own designs.',
    date: '2024-03-25',
    time: '15:00 - 17:00',
    price: '¥4,200',
    image: 'https://images.unsplash.com/photo-1534415378365-1e2ed59a7e83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Workshop',
  },
  {
    id: 4,
    title: 'Poetry Reading',
    description: 'A cozy evening of poetry reading and discussion with local poets.',
    date: '2024-03-30',
    time: '18:30 - 20:30',
    price: '¥1,500',
    image: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Cultural',
  },
]

const pastEventImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1482350325005-eda5e677279b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Christmas Special Event 2023',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Summer Coffee Festival 2023',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Barista Championship 2023',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Coffee & Art Exhibition',
  },
]

const isModalOpen = ref(false)
const selectedEvent = ref(null)
const registration = ref({
  name: '',
  email: '',
  participants: 1,
  notes: '',
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const registerForEvent = (event) => {
  selectedEvent.value = event
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    registration.value = {
      name: '',
      email: '',
      participants: 1,
      notes: '',
    }
    selectedEvent.value = null
  }, 200)
}

const submitRegistration = () => {
  // Here you would typically send the registration data to your backend
  console.log('Registration submitted:', {
    event: selectedEvent.value,
    registration: registration.value,
  })
  
  // Show success message (in a real app, you'd want to handle this more gracefully)
  alert('Registration successful! We will contact you with more details soon.')
  closeModal()
}
</script> 