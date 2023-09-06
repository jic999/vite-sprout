import { defineComponent } from 'vue'
import S from './index.module.scss'

export default defineComponent({
  name: 'Sprout',
  setup() {
    const route = useRoute()

    const msgObj: { [key: string]: string } = {
      home: 'Vite Sprout',
      grow: 'Grow Up',
    }
    const msg = computed(() => msgObj[route.name as string] || '')

    return () => (
      <div class={[route.name === 'grow' && S['logo-box']]} flex flex-col items-center justify-end h-132 transition-height duration-1500>
        <div class={[route.name === 'grow' && S['logo']]} i-carbon:sprout text-64px transition-all duration-1500 />
        <h3 italic transition-color duration-1500>
          { msg.value }
        </h3>
      </div>
    )
  },
})
