export const ModalConnexion = () => import('../..\\components\\modalConnexion.vue' /* webpackChunkName: "components/modal-connexion" */).then(c => wrapFunctional(c.default || c))
export const ModalInscription = () => import('../..\\components\\modalInscription.vue' /* webpackChunkName: "components/modal-inscription" */).then(c => wrapFunctional(c.default || c))
export const PresentationPage = () => import('../..\\components\\PresentationPage.vue' /* webpackChunkName: "components/presentation-page" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
