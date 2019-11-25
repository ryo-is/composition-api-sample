<template>
  <div class="composition-api-example">
    <h1>Composition API Example</h1>
    <div v-if="visibilityComponent.state.visible">
      Count is: {{ counterComponent.state.count }}, double is:
      {{ counterComponent.state.double }}
    </div>
    <div>
      <input
        type="checkbox"
        v-model="visibilityComponent.state.visible"
      />Visible?
    </div>
    <button @click="counterComponent.actions.increment">Click</button>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive, computed, Ref } from "@vue/composition-api"

interface CounterState {
  count: number
  double: Ref<number>
}

interface CounterActions {
  increment: () => number
}

interface CounterComponent {
  state: CounterState
  actions: CounterActions
}

interface VisibilityState {
  visible: boolean
}

interface VisibilityComponent {
  state: VisibilityState
}

const useCounter = () => {
  const state = reactive<CounterState>({
    count: 0,
    double: computed((): number => state.count * 2)
  })

  const increment = (): number => state.count++

  return {
    state,
    actions: {
      increment
    }
  }
}

const useVisibility = () => {
  const state = reactive<VisibilityState>({
    visible: false
  })

  return {
    state
  }
}

export default createComponent({
  setup() {
    const counterComponent = useCounter()
    const visibilityComponent = useVisibility()

    return {
      counterComponent,
      visibilityComponent
    }
  }
})
</script>
