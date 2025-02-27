/**
 * router/index.ts
 *
 * Router configuration with proper handling for the TechServiceDescription route
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import TechServiceDescription from '@/pages/TechServiceDescription.vue'

// When using vue-router/auto, you generally shouldn't mix manual and auto routes
// However, you can customize the auto-generated routes

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes) => {
    // First remove any auto-generated route that might conflict with our manual one
    const filteredRoutes = routes.filter(route => 
      !(route.name === 'TechServiceDescription' || route.path === '/service/:id')
    );
    
    // Then add our custom route with props enabled
    filteredRoutes.push({
      path: '/service/:id',
      name: 'TechServiceDescription',
      component: TechServiceDescription,
      props: true
    });
    
    // Apply layouts
    return setupLayouts(filteredRoutes);
  },
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
})

export default router