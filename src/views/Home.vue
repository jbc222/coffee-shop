<template>
  <div>
    <!-- Hero Section with Carousel -->
    <div class="relative h-[80vh] overflow-hidden">
      <div class="absolute inset-0">
        <transition-group name="fade" tag="div">
          <div
            v-for="(slide, index) in slides"
            :key="slide.image"
            v-show="currentSlide === index"
            class="absolute inset-0"
          >
            <img
              :src="slide.image"
              :alt="slide.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30">
              <div class="container mx-auto h-full flex items-center px-4">
                <div class="max-w-xl text-white" data-aos="fade-right">
                  <h1 class="text-6xl font-serif mb-6">{{ slide.title }}</h1>
                  <p class="text-2xl mb-8 text-coffee-100">{{ slide.description }}</p>
                  <router-link
                    :to="slide.link"
                    class="btn btn-primary text-lg px-8 py-3 bg-coffee-600 hover:bg-coffee-700 transition-colors duration-300"
                  >
                    {{ slide.buttonText }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>

    <!-- Features Section -->
    <section class="py-20 bg-coffee-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-serif text-center mb-16 text-coffee-900" data-aos="fade-up">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="text-center p-8 bg-white rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
            data-aos="fade-up"
          >
            <component
              :is="feature.icon"
              class="w-16 h-16 mx-auto mb-6 text-coffee-600"
            />
            <h3 class="text-2xl font-serif mb-4 text-coffee-900">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-serif text-center mb-16 text-coffee-900" data-aos="fade-up">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="p-8 bg-coffee-50 rounded-lg shadow-sm"
            data-aos="fade-up"
          >
            <div class="flex items-center mb-6">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 class="text-xl font-serif text-coffee-900">{{ testimonial.name }}</h3>
                <p class="text-coffee-600 text-sm">{{ testimonial.title }}</p>
              </div>
            </div>
            <p class="text-gray-700 italic">{{ testimonial.quote }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-coffee-900 to-coffee-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-serif mb-6" data-aos="fade-up">Ready to Experience Coffee Haven?</h2>
        <p class="text-2xl mb-10 text-coffee-100" data-aos="fade-up" data-aos-delay="100">
          Join us for a perfect cup of coffee and unforgettable moments.
        </p>
        <router-link
          to="/reservation"
          class="btn btn-primary bg-white text-coffee-900 hover:bg-coffee-100 text-lg px-8 py-3 transition-colors duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Make a Reservation
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import {
  BeakerIcon,
  UserGroupIcon,
  HeartIcon,
} from '@heroicons/vue/24/outline'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Welcome to Coffee Haven',
    description: 'Experience the perfect blend of comfort and taste',
    link: '/menu',
    buttonText: 'Explore Our Menu',
  },
  {
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Artisanal Coffee',
    description: 'Carefully selected and roasted to perfection',
    link: '/about',
    buttonText: 'Learn More',
  },
  {
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Special Events',
    description: 'Join our coffee tasting events and live music nights',
    link: '/events',
    buttonText: 'View Events',
  },
]

const features = [
  {
    icon: BeakerIcon,
    title: 'Premium Coffee',
    description: 'We source the finest coffee beans from around the world.',
  },
  {
    icon: UserGroupIcon,
    title: 'Cozy Atmosphere',
    description: 'A perfect space for work, meetings, or relaxation.',
  },
  {
    icon: HeartIcon,
    title: 'Made with Love',
    description: 'Every cup is crafted with care and attention to detail.',
  },
]

const testimonials = [
  {
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    name: 'Sarah Johnson',
    title: 'Regular Customer',
    quote: 'The best coffee I\'ve ever had! The atmosphere is perfect for both work and relaxation.',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    name: 'Michael Chen',
    title: 'Food Blogger',
    quote: 'A hidden gem! The pastries are amazing, and the coffee is consistently excellent.',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    name: 'Emily Williams',
    title: 'Local Artist',
    quote: 'I love coming here for inspiration. The staff is friendly and the coffee is outstanding.',
  },
]

const currentSlide = ref(0)
let slideInterval

const startSlideShow = () => {
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
}

onMounted(() => {
  startSlideShow()
})

onBeforeUnmount(() => {
  if (slideInterval) clearInterval(slideInterval)
})
</script> 