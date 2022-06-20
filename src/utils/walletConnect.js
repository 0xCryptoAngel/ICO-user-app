import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'

export default function useRfpFieldEditor(fieldNameInput = '') {
  const store = useStore()
  const route = useRoute()
  const editIsDisallowed = useRfpEditIsDisabled()
  const { currentStepRfpUpdateType } = useCurrentStepRfpUpdateType()
  const fieldName = computed(
    () => fieldNameInput || currentStepRfpUpdateType.value,
  )

  const presentationId = computed(() => route.params.presentationId)

  const presentationState = computed(() =>
    store.getters['rfps/getPresentationById'](presentationId.value),
  )

  const slideSelection = ref(
    JSON.parse(JSON.stringify(presentationState.value.slideSelection || {})),
  )
  const fieldValueComputed = computed(
    () => presentationState.value[fieldName.value],
  )
  const fieldValue = ref(cloneDeep(fieldValueComputed.value))

  watch(
    presentationId,
    () => (fieldValue.value = cloneDeep(fieldValueComputed.value)),
  )

  const updateFieldValue = () => {
    const updatedPresentation = JSON.parse(
      JSON.stringify({
        ...presentationState.value,
        [fieldName.value]: fieldValue.value,
      }),
    )
    store.commit('rfps/updateRfp', updatedPresentation)
  }
  const updateSlideSelection = ({
    keyName,
    updatedYesNo,
    slideCodes,
    updatedSelectedSlide,
  }) => {
    slideSelection.value[keyName] =
      typeof updatedYesNo === 'boolean' ? updatedYesNo : updatedSelectedSlide

    store.commit(
      'rfps/updateRfp',
      JSON.parse(
        JSON.stringify({
          ...presentationState.value,
          slideSelection: slideSelection.value,
        }),
      ),
    )
    const switchSlideSelection = (slideCode, isEnabledValue) => {
      store.commit('rfps/switchSlideSelection', {
        slideCode,
        presentationId: route.params.presentationId,
        isEnabledValue: isEnabledValue,
      })
    }
    const enabledValue =
      typeof updatedYesNo === 'string' ? updatedYesNo === 'Yes' : updatedYesNo

    slideCodes.forEach((slideCode) =>
      switchSlideSelection(
        slideCode,
        updatedSelectedSlide
          ? updatedSelectedSlide.includes(slideCode)
          : enabledValue,
      ),
    )
  }
  watch(fieldValue, updateFieldValue, {
    deep: true,
  })

  return {
    editIsDisallowed,
    fieldValue,
    updateSlideSelection,
  }
}
