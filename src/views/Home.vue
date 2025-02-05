<template>
  <div>
    <!-- Hero Section with Carousel -->
    <div class="relative h-[600px] overflow-hidden">
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
            <div class="absolute inset-0 bg-black bg-opacity-40">
              <div class="container mx-auto h-full flex items-center px-4">
                <div class="max-w-xl text-white" data-aos="fade-right">
                  <h1 class="text-5xl font-serif mb-4">{{ slide.title }}</h1>
                  <p class="text-xl mb-8">{{ slide.description }}</p>
                  <router-link
                    :to="slide.link"
                    class="btn btn-primary text-lg"
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
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-serif text-center mb-12" data-aos="fade-up">Why Choose Coffee Haven?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="text-center p-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <component
              :is="feature.icon"
              class="w-12 h-12 mx-auto mb-4 text-coffee-600"
            />
            <h3 class="text-xl font-serif mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-coffee-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-serif text-center mb-12" data-aos="fade-up">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="flex items-center mb-4">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 class="font-serif">{{ testimonial.name }}</h4>
                <p class="text-gray-600 text-sm">{{ testimonial.title }}</p>
              </div>
            </div>
            <p class="text-gray-700">{{ testimonial.quote }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-coffee-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-serif mb-4" data-aos="fade-up">Ready to Experience Coffee Haven?</h2>
        <p class="text-xl mb-8 text-coffee-100" data-aos="fade-up" data-aos-delay="100">
          Join us for a perfect cup of coffee and unforgettable moments.
        </p>
        <router-link
          to="/reservation"
          class="btn btn-primary bg-white text-coffee-900 hover:bg-coffee-100"
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
    image: '/images/hero-1.jpg',
    title: 'Welcome to Coffee Haven',
    description: 'Experience the perfect blend of comfort and taste',
    link: '/menu',
    buttonText: 'Explore Our Menu',
  },
  {
    image: '/images/hero-2.jpg',
    title: 'Artisanal Coffee',
    description: 'Carefully selected and roasted to perfection',
    link: '/about',
    buttonText: 'Learn More',
  },
  {
    image: '/images/hero-3.jpg',
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
    avatar: '/images/avatar-1.jpg',
    name: 'Sarah Johnson',
    title: 'Regular Customer',
    quote: 'The best coffee I\'ve ever had! The atmosphere is perfect for both work and relaxation.',
  },
  {
    avatar: '/images/avatar-2.jpg',
    name: 'Michael Chen',
    title: 'Food Blogger',
    quote: 'A hidden gem! The pastries are amazing, and the coffee is consistently excellent.',
  },
  {
    avatar: '/images/avatar-3.jpg',
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