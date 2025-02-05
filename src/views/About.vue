<template>
  <div class="bg-coffee-50 py-12">
    <div class="container mx-auto px-4">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-serif text-coffee-900 mb-4" data-aos="fade-up">About Coffee Haven</h1>
        <p class="text-lg text-coffee-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          A place where passion for coffee meets warm hospitality
        </p>
      </div>

      <!-- Our Story Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div class="order-2 md:order-1" data-aos="fade-right">
          <h2 class="text-3xl font-serif text-coffee-800 mb-4">Our Story</h2>
          <p class="text-coffee-600 mb-4">
            Founded in 2020, Coffee Haven began with a simple dream: to create a cozy corner where coffee lovers could find their perfect cup while feeling right at home.
          </p>
          <p class="text-coffee-600 mb-4">
            What started as a small coffee cart has grown into a beloved neighborhood café, thanks to our dedication to quality and our amazing community of customers.
          </p>
          <p class="text-coffee-600">
            Today, we continue to source the finest beans, craft each drink with care, and maintain the warm, welcoming atmosphere that has become our signature.
          </p>
        </div>
        <div class="order-1 md:order-2" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Coffee Haven Story"
            class="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>
      </div>

      <!-- Our Values Section -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-16" data-aos="fade-up">
        <h2 class="text-3xl font-serif text-coffee-800 text-center mb-8">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="value in values"
            :key="value.title"
            class="text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <component
              :is="value.icon"
              class="w-12 h-12 mx-auto mb-4 text-coffee-600"
            />
            <h3 class="text-xl font-serif text-coffee-800 mb-2">{{ value.title }}</h3>
            <p class="text-coffee-600">{{ value.description }}</p>
          </div>
        </div>
      </div>

      <!-- Our Team Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-serif text-coffee-800 text-center mb-8" data-aos="fade-up">Meet Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="member in team"
            :key="member.name"
            class="bg-white rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-64 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-serif text-coffee-800 mb-1">{{ member.name }}</h3>
              <p class="text-coffee-600 mb-2">{{ member.role }}</p>
              <p class="text-gray-600">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Visit Us Section -->
      <div class="bg-coffee-900 text-white rounded-lg overflow-hidden" data-aos="fade-up">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="p-8">
            <h2 class="text-3xl font-serif mb-4">Visit Us</h2>
            <div class="space-y-4">
              <p>
                <strong class="block text-coffee-200">Address</strong>
                123 Coffee Street<br />
                City, Country
              </p>
              <p>
                <strong class="block text-coffee-200">Hours</strong>
                Monday - Friday: 7:00 AM - 8:00 PM<br />
                Saturday - Sunday: 8:00 AM - 9:00 PM
              </p>
              <p>
                <strong class="block text-coffee-200">Contact</strong>
                Phone: (123) 456-7890<br />
                Email: hello@coffeehaven.com
              </p>
            </div>
            <router-link
              to="/reservation"
              class="btn btn-primary bg-white text-coffee-900 hover:bg-coffee-100 inline-block mt-6"
            >
              Make a Reservation
            </router-link>
          </div>
          <div class="h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&auto=format&fit=crop&w=1389&q=80"
              alt="Coffee Haven Exterior"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  HeartIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/vue/24/outline'

const values = [
  {
    icon: HeartIcon,
    title: 'Passion for Quality',
    description: 'We source the finest ingredients and craft each item with dedication and care.',
  },
  {
    icon: UserGroupIcon,
    title: 'Community First',
    description: 'We create a welcoming space where everyone feels like part of our family.',
  },
  {
    icon: SparklesIcon,
    title: 'Sustainable Practices',
    description: 'We are committed to environmental responsibility in everything we do.',
  },
]

const team = [
  {
    name: 'David Chen',
    role: 'Owner & Head Barista',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    description: 'Coffee enthusiast with over 10 years of experience in specialty coffee.',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    description: 'Trained in Paris, bringing French pastry techniques to our kitchen.',
  },
  {
    name: 'James Wilson',
    role: 'Café Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    description: 'Dedicated to creating the perfect café experience for every guest.',
  },
]
</script> 