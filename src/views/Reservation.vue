<template>
  <div class="bg-coffee-50 py-12">
    <div class="container mx-auto px-4">
      <!-- Reservation Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-serif text-coffee-900 mb-4" data-aos="fade-up">Make a Reservation</h1>
        <p class="text-lg text-coffee-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Reserve your perfect spot at Coffee Haven
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Reservation Form -->
        <div class="bg-white rounded-lg shadow-lg p-8" data-aos="fade-right">
          <form @submit.prevent="submitReservation" class="space-y-6">
            <!-- Personal Information -->
            <div>
              <h3 class="text-xl font-serif text-coffee-800 mb-4">Personal Information</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-coffee-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    v-model="form.firstName"
                    class="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500"
                    required
                  />
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-coffee-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    v-model="form.lastName"
                    class="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500"
                    required
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-coffee-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    class="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500"
                    required
                  />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-coffee-700">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    class="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500"
                    required
                  />
                </div>
              </div>
            </div>

            <!-- Reservation Details -->
            <div>
              <h3 class="text-xl font-serif text-coffee-800 mb-4">Reservation Details</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="date" class="block text-sm font-medium text-coffee-700">Date</label>
                  <input
                    type="date"
                    id="date"
                    v-model="form.date"
                    :min="minDate"
                    class="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500"
                    required
                  />
                </div>
                <div>
                  <label for="time" class="block text-sm font-medium text-coffee-700">Time</label>
                  <select
                    id="time"
                    v-model="form.time"
                    class="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500"
                    required
                  >
                    <option value="">Select a time</option>
                    <option v-for="time in availableTimes" :key="time" :value="time">
                      {{ time }}
                    </option>
                  </select>
                </div>
                <div>
                  <label for="guests" class="block text-sm font-medium text-coffee-700">Number of Guests</label>
                  <select
                    id="guests"
                    v-model="form.guests"
                    class="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500"
                    required
                  >
                    <option value="">Select number of guests</option>
                    <option v-for="n in 8" :key="n" :value="n">{{ n }} {{ n === 1 ? 'guest' : 'guests' }}</option>
                  </select>
                </div>
                <div>
                  <label for="seating" class="block text-sm font-medium text-coffee-700">Preferred Seating</label>
                  <select
                    id="seating"
                    v-model="form.seating"
                    class="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500"
                    required
                  >
                    <option value="">Select seating preference</option>
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                    <option value="bar">Bar</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Special Requests -->
            <div>
              <label for="requests" class="block text-sm font-medium text-coffee-700">Special Requests</label>
              <textarea
                id="requests"
                v-model="form.requests"
                rows="3"
                class="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500"
                placeholder="Any dietary restrictions or special occasions?"
              ></textarea>
            </div>

            <!-- Terms -->
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  v-model="form.terms"
                  class="h-4 w-4 rounded border-coffee-300 text-coffee-600 focus:ring-coffee-500"
                  required
                />
              </div>
              <div class="ml-3">
                <label for="terms" class="text-sm text-coffee-600">
                  I agree to the
                  <a href="#" class="text-coffee-800 hover:text-coffee-600">reservation policy</a>
                  and understand that a confirmation email will be sent upon submission.
                </label>
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-primary w-full"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Submitting...' : 'Confirm Reservation' }}
            </button>
          </form>
        </div>

        <!-- Information Panel -->
        <div class="lg:pl-8">
          <!-- Hours & Location -->
          <div class="bg-white rounded-lg shadow-lg p-8 mb-8" data-aos="fade-left">
            <h3 class="text-xl font-serif text-coffee-800 mb-4">Hours & Location</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-medium text-coffee-700 mb-2">Opening Hours</h4>
                <ul class="space-y-1 text-coffee-600">
                  <li class="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </li>
                  <li class="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>8:00 AM - 9:00 PM</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-coffee-700 mb-2">Location</h4>
                <p class="text-coffee-600">
                  123 Coffee Street<br />
                  City, Country
                </p>
              </div>
              <div>
                <h4 class="font-medium text-coffee-700 mb-2">Contact</h4>
                <p class="text-coffee-600">
                  Phone: (123) 456-7890<br />
                  Email: reservations@coffeehaven.com
                </p>
              </div>
            </div>
          </div>

          <!-- Policies -->
          <div class="bg-white rounded-lg shadow-lg p-8" data-aos="fade-left" data-aos-delay="100">
            <h3 class="text-xl font-serif text-coffee-800 mb-4">Reservation Policies</h3>
            <div class="space-y-4 text-coffee-600">
              <p>
                <strong class="text-coffee-700">Confirmation:</strong>
                Your reservation will be confirmed via email within 30 minutes.
              </p>
              <p>
                <strong class="text-coffee-700">Cancellation:</strong>
                Please notify us at least 2 hours in advance if you need to cancel.
              </p>
              <p>
                <strong class="text-coffee-700">Large Groups:</strong>
                For groups larger than 8, please contact us directly.
              </p>
              <p>
                <strong class="text-coffee-700">Special Events:</strong>
                For special events or private bookings, check our Events page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <TransitionRoot appear :show="showSuccessModal" as="template">
      <Dialog as="div" @close="closeSuccessModal" class="relative z-10">
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
                <div class="text-center">
                  <CheckCircleIcon class="mx-auto h-12 w-12 text-green-500" />
                  <DialogTitle as="h3" class="text-2xl font-serif text-coffee-900 mt-4 mb-2">
                    Reservation Confirmed!
                  </DialogTitle>
                  <div class="mt-4">
                    <p class="text-coffee-600">
                      Thank you for choosing Coffee Haven. A confirmation email has been sent to your inbox.
                    </p>
                  </div>
                  <div class="mt-6">
                    <button
                      type="button"
                      class="btn btn-primary w-full"
                      @click="closeSuccessModal"
                    >
                      Close
                    </button>
                  </div>
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
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
  seating: '',
  requests: '',
  terms: false,
})

const isSubmitting = ref(false)
const showSuccessModal = ref(false)

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

const availableTimes = [
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
]

const submitReservation = async () => {
  isSubmitting.value = true

  try {
    // Here you would typically send the form data to your backend
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
    
    console.log('Reservation submitted:', form.value)
    showSuccessModal.value = true
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      seating: '',
      requests: '',
      terms: false,
    }
  } catch (error) {
    console.error('Error submitting reservation:', error)
    alert('There was an error submitting your reservation. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
}
</script> 